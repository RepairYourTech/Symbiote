// npx jest src/core/__tests__/utils/fs-test-utils.test.ts

import * as fs from 'fs/promises';
import * as path from 'path';
import { fileExistsAtPath } from '../../../utils/fs';
import {
    setupFilesystemMocks,
    createMockSymbioteIgnore,
    createMockSourceCodeFiles,
    mergeMockFileSystems
} from './fs-test-utils';

// Mock fs and fileExistsAtPath
jest.mock('fs/promises');
jest.mock('../../../utils/fs');

describe('File System Test Utilities', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('setupFilesystemMocks', () => {
        it('should mock readFile to return file content', async () => {
            // Setup
            const mockFs = {
                files: {
                    '/test/file.txt': 'test content'
                },
                directories: ['/test']
            };

            const { cleanup } = setupFilesystemMocks(mockFs);

            // Test
            const content = await fs.readFile('/test/file.txt', 'utf8');

            // Verify
            expect(content).toBe('test content');

            // Cleanup
            cleanup();
        });

        it('should throw error when reading non-existent file', async () => {
            // Setup
            const mockFs = {
                files: {},
                directories: []
            };

            const { cleanup } = setupFilesystemMocks(mockFs);

            // Test & Verify
            await expect(fs.readFile('/test/non-existent.txt', 'utf8')).rejects.toThrow();

            // Cleanup
            cleanup();
        });

        it('should mock writeFile to update mock filesystem', async () => {
            // Setup
            const mockFs = {
                files: {},
                directories: []
            };

            const { cleanup } = setupFilesystemMocks(mockFs);

            // Test
            await fs.writeFile('/test/new-file.txt', 'new content');

            // Verify
            expect(mockFs.files['/test/new-file.txt']).toBe('new content');

            // Cleanup
            cleanup();
        });

        it('should mock mkdir to update directories', async () => {
            // Setup
            const mockFs = {
                files: {},
                directories: []
            };

            const { cleanup } = setupFilesystemMocks(mockFs);

            // Test
            await fs.mkdir('/test/new-dir', { recursive: true });

            // Verify
            expect(mockFs.directories).toContain('/test/new-dir');

            // Cleanup
            cleanup();
        });

        it('should mock fileExistsAtPath to check mock filesystem', async () => {
            // Setup
            const mockFs = {
                files: {
                    '/test/file.txt': 'test content'
                },
                directories: ['/test']
            };

            const { cleanup } = setupFilesystemMocks(mockFs);

            // Test & Verify
            expect(await fileExistsAtPath('/test/file.txt')).toBe(true);
            expect(await fileExistsAtPath('/test/non-existent.txt')).toBe(false);

            // Cleanup
            cleanup();
        });
    });

    describe('createMockSymbioteIgnore', () => {
        it('should create a mock filesystem with .symbiote-ignore file', () => {
            // Test
            const mockFs = createMockSymbioteIgnore('/test', ['node_modules', '.git', '*.log']);

            // Get the correct path with platform-specific separators
            const ignoreFilePath = path.join('/test', '.symbiote-ignore');

            // Verify
            expect(mockFs.files[ignoreFilePath]).toBe('node_modules\n.git\n*.log');
            expect(mockFs.directories).toContain('/test');
        });
    });

    describe('createMockSourceCodeFiles', () => {
        it('should create a mock filesystem with source code files', () => {
            // Test
            const mockFs = createMockSourceCodeFiles('/test', {
                'src/app.ts': 'console.log("Hello");',
                'src/utils/helper.ts': 'export function helper() {}'
            });

            // Get the correct paths with platform-specific separators
            const appFilePath = path.join('/test', 'src', 'app.ts');
            const helperFilePath = path.join('/test', 'src', 'utils', 'helper.ts');
            const testDir = '/test';
            const srcDir = path.join('/test', 'src');
            const utilsDir = path.join('/test', 'src', 'utils');

            // Verify
            expect(mockFs.files[appFilePath]).toBe('console.log("Hello");');
            expect(mockFs.files[helperFilePath]).toBe('export function helper() {}');
            expect(mockFs.directories).toContain(testDir);
            expect(mockFs.directories).toContain(srcDir);
            expect(mockFs.directories).toContain(utilsDir);
        });
    });

    describe('mergeMockFileSystems', () => {
        it('should merge multiple mock filesystems', () => {
            // Setup
            const mockFs1 = createMockSymbioteIgnore('/test', ['node_modules', '.git']);
            const mockFs2 = createMockSourceCodeFiles('/test', {
                'src/app.ts': 'console.log("Hello");'
            });

            // Test
            const merged = mergeMockFileSystems(mockFs1, mockFs2);

            // Get the correct paths with platform-specific separators
            const ignoreFilePath = path.join('/test', '.symbiote-ignore');
            const appFilePath = path.join('/test', 'src', 'app.ts');
            const testDir = '/test';
            const srcDir = path.join('/test', 'src');

            // Verify
            expect(merged.files[ignoreFilePath]).toBe('node_modules\n.git');
            expect(merged.files[appFilePath]).toBe('console.log("Hello");');
            expect(merged.directories).toContain(testDir);
            expect(merged.directories).toContain(srcDir);

            // Check for no duplicates
            expect(merged.directories.filter(d => d === testDir).length).toBe(1);
        });
    });
});
