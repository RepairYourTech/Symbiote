/**
 * File system test utilities for Symbiote tests
 *
 * This module provides utilities for mocking file system operations in tests.
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { fileExistsAtPath } from '../../../utils/fs';

/**
 * Mock file system state for tests
 */
export interface MockFileSystem {
    files: Record<string, string>;
    directories: string[];
}

/**
 * Setup file system mocks for tests
 *
 * @param mockFs - Mock file system state
 * @returns Object with cleanup function
 */
export function setupFilesystemMocks(mockFs: MockFileSystem) {
    // Configure fs.readFile mock
    if (jest.isMockFunction(fs.readFile)) {
        // If fs.readFile is already mocked, update its implementation
        (fs.readFile as jest.Mock).mockImplementation(async (filePath: string | URL, options?: any) => {
            const normalizedPath = typeof filePath === 'string' ? filePath : filePath.toString();

            if (mockFs.files[normalizedPath]) {
                return mockFs.files[normalizedPath];
            }

            // Try with normalized path
            const posixPath = normalizedPath.split(path.sep).join('/');
            if (mockFs.files[posixPath]) {
                return mockFs.files[posixPath];
            }

            throw new Error(`ENOENT: no such file or directory, open '${normalizedPath}'`);
        });
    } else {
        // If not already mocked, create a new mock
        jest.mock('fs/promises', () => ({
            ...jest.requireActual('fs/promises'),
            readFile: jest.fn().mockImplementation(async (filePath: string | URL, options?: any) => {
                const normalizedPath = typeof filePath === 'string' ? filePath : filePath.toString();

                if (mockFs.files[normalizedPath]) {
                    return mockFs.files[normalizedPath];
                }

                // Try with normalized path
                const posixPath = normalizedPath.split(path.sep).join('/');
                if (mockFs.files[posixPath]) {
                    return mockFs.files[posixPath];
                }

                throw new Error(`ENOENT: no such file or directory, open '${normalizedPath}'`);
            }),
        }));
    }

    // Configure fs.writeFile mock
    if (jest.isMockFunction(fs.writeFile)) {
        (fs.writeFile as jest.Mock).mockImplementation(async (filePath: string | URL, data: any) => {
            const normalizedPath = typeof filePath === 'string' ? filePath : filePath.toString();
            mockFs.files[normalizedPath] = data.toString();
            return Promise.resolve();
        });
    }

    // Configure fs.mkdir mock
    if (jest.isMockFunction(fs.mkdir)) {
        (fs.mkdir as jest.Mock).mockImplementation(async (dirPath: string | URL, options?: any) => {
            const normalizedPath = typeof dirPath === 'string' ? dirPath : dirPath.toString();
            mockFs.directories.push(normalizedPath);
            return Promise.resolve(undefined);
        });
    }

    // Configure fileExistsAtPath mock
    const fileExistsModule = require('../../../utils/fs');
    if (jest.isMockFunction(fileExistsModule.fileExistsAtPath)) {
        (fileExistsModule.fileExistsAtPath as jest.Mock).mockImplementation(async (filePath: string) => {
            return filePath in mockFs.files;
        });
    }

    // Return the mock filesystem for use in tests
    return mockFs;
}

/**
 * Create a mock .symbiote-ignore file for tests
 *
 * @param cwd - Working directory
 * @param patterns - Ignore patterns
 * @returns Mock file system with .symbiote-ignore
 */
export function createMockSymbioteIgnore(cwd: string, patterns: string[]): MockFileSystem {
    const ignoreFilePath = path.join(cwd, '.symbiote-ignore');
    const ignoreContent = patterns.join('\n');

    return {
        files: {
            [ignoreFilePath]: ignoreContent
        },
        directories: [cwd]
    };
}

/**
 * Create a mock file system with source code files
 *
 * @param baseDir - Base directory
 * @param files - Record of file paths to content
 * @returns Mock file system
 */
export function createMockSourceCodeFiles(baseDir: string, files: Record<string, string>): MockFileSystem {
    const mockFs: MockFileSystem = {
        files: {},
        directories: [baseDir]
    };

    // Add each file with full path
    for (const [filePath, content] of Object.entries(files)) {
        const fullPath = path.join(baseDir, filePath);
        mockFs.files[fullPath] = content;

        // Add directories for each file
        const dirPath = path.dirname(fullPath);
        if (!mockFs.directories.includes(dirPath)) {
            mockFs.directories.push(dirPath);
        }
    }

    return mockFs;
}

/**
 * Merge multiple mock file systems
 *
 * @param fileSystems - Array of mock file systems
 * @returns Merged mock file system
 */
export function mergeMockFileSystems(...fileSystems: MockFileSystem[]): MockFileSystem {
    const merged: MockFileSystem = {
        files: {},
        directories: []
    };

    for (const fs of fileSystems) {
        merged.files = { ...merged.files, ...fs.files };
        merged.directories = [...merged.directories, ...fs.directories];
    }

    // Remove duplicates from directories
    merged.directories = [...new Set(merged.directories)];

    return merged;
}
