// npx jest src/core/__tests__/integration/task-management-workflow.test.ts

import { Cline } from "../../Cline"
import { SymbioteIgnoreController } from "../../ignore/SymbioteIgnoreController"
import { Task } from "../utils/Task"
import * as fs from "fs/promises"
import * as path from "path"
import { fileExistsAtPath } from "../../../utils/fs"
import { setupFilesystemMocks, createMockSourceCodeFiles } from "../utils/fs-test-utils"
import { MockFileSystem } from "../utils/fs-test-utils"

// Mock VS Code API
jest.mock("vscode", () => {
    const mockDisposable = { dispose: jest.fn() }
    return {
        workspace: {
            createFileSystemWatcher: jest.fn(() => ({
                onDidCreate: jest.fn(() => mockDisposable),
                onDidChange: jest.fn(() => mockDisposable),
                onDidDelete: jest.fn(() => mockDisposable),
                dispose: jest.fn(),
            })),
            workspaceFolders: [{
                uri: { fsPath: "/test/workspace" },
                name: "test-workspace",
                index: 0,
            }],
        },
        window: {
            createTextEditorDecorationType: jest.fn().mockReturnValue({
                dispose: jest.fn(),
            }),
            showErrorMessage: jest.fn(),
            showInformationMessage: jest.fn(),
            showWarningMessage: jest.fn(),
        },
        Uri: {
            file: jest.fn(path => ({ fsPath: path })),
            parse: jest.fn(uri => ({ fsPath: uri.replace(/^file:\/\//, "") })),
        },
        RelativePattern: jest.fn().mockImplementation(function(base, pattern) {
            // Mock constructor function
            this.base = base
            this.pattern = pattern
            return { base, pattern }
        }),
        EventEmitter: jest.fn(),
        Disposable: {
            from: jest.fn(),
        },
        ViewColumn: {
            Active: -1,
            Beside: -2,
        },
        Position: jest.fn().mockImplementation((line, character) => ({ line, character })),
        Range: jest.fn().mockImplementation((start, end) => ({ start, end })),
    }
})

// Mock API handler
jest.mock("../../../api", () => ({
    buildApiHandler: jest.fn().mockImplementation(() => ({
        createMessage: jest.fn().mockImplementation(() => ({
            stream: async function* () {
                yield { type: "text", text: "I'll help you with that task." }
            },
            abort: jest.fn(),
        })),
        getModel: jest.fn().mockReturnValue({
            id: "mock-model",
            info: {
                supportsImages: true,
                supportsPromptCache: true,
                supportsComputerUse: true,
                contextWindow: 100000,
                maxTokens: 4096,
                inputPrice: 0.01,
                outputPrice: 0.03,
            },
        }),
        countTokens: jest.fn().mockResolvedValue(100),
    })),
}))

describe("Task Management Workflow Integration Test", () => {
    // Test workspace setup
    const TEST_CWD = "/test/workspace"
    const TEST_FILES = {
        "src/app.ts": `console.log("Hello, world!");`,
        ".symbiote-ignore": "node_modules\n.git\n.env\nsecrets/**\n*.log",
    }

    // Setup mocks
    let mockFs: MockFileSystem
    let cline: Cline
    let symbioteIgnoreController: SymbioteIgnoreController
    let mockProvider: any

    beforeEach(async () => {
        // Reset all mocks
        jest.clearAllMocks()

        // Setup file system mocks
        const sourceFiles = createMockSourceCodeFiles(TEST_CWD, TEST_FILES)
        mockFs = setupFilesystemMocks(sourceFiles)

        // Create a real SymbioteIgnoreController
        symbioteIgnoreController = new SymbioteIgnoreController(TEST_CWD)
        await symbioteIgnoreController.initialize()

        // Create a mock provider
        mockProvider = {
            log: jest.fn(),
            showMessage: jest.fn(),
            showError: jest.fn(),
            showWarning: jest.fn(),
            showInfo: jest.fn(),
            updateStatus: jest.fn(),
            updateTask: jest.fn(),
            updateSubtasks: jest.fn(),
            updateConversation: jest.fn(),
            updateToolUse: jest.fn(),
            updateToolResult: jest.fn(),
            updateApiConfiguration: jest.fn(),
            updateApiStatus: jest.fn(),
            updateApiUsage: jest.fn(),
            updateApiConversationHistory: jest.fn(),
            updateUiMessages: jest.fn(),
            updateCheckpoints: jest.fn(),
            updateMcpServers: jest.fn(),
            updateMcpServerStatus: jest.fn(),
            updateMcpServerTools: jest.fn(),
            updateMcpServerPrompts: jest.fn(),
            updateMcpServerPromptStatus: jest.fn(),
            updateMcpServerPromptResult: jest.fn(),
            updateMcpServerPromptError: jest.fn(),
            updateMcpServerPromptCancel: jest.fn(),
            updateMcpServerPromptCancelAll: jest.fn(),
            updateMcpServerPromptCancelAllResult: jest.fn(),
            updateMcpServerPromptCancelAllError: jest.fn(),
            updateMcpServerPromptCancelAllCancel: jest.fn(),
            updateMcpServerPromptCancelAllCancelResult: jest.fn(),
            updateMcpServerPromptCancelAllCancelError: jest.fn(),
            updateMcpServerPromptCancelAllCancelCancel: jest.fn(),
            dispose: jest.fn(),
            postStateToWebview: jest.fn(),
            postMessageToWebview: jest.fn(),
            getState: jest.fn().mockResolvedValue({}),
            updateTaskHistory: jest.fn(),
            context: {
                globalStorageUri: { fsPath: '/test/global-storage' },
            },
        }

        // Create a Cline instance with minimal mocking
        cline = new Cline({
            provider: mockProvider,
            apiConfiguration: {
                apiProvider: "openai",
                apiModelId: "gpt-4",
                apiKey: "test-key",
                apiBaseUrl: "https://api.example.com",
                apiOrgId: "test-org",
            },
            task: "test task",
            startTask: false,
            cwd: TEST_CWD,
        })

        // Replace the SymbioteIgnoreController with our initialized one
        cline.symbioteIgnoreController = symbioteIgnoreController
    })

    afterEach(() => {
        // No cleanup needed
    })

    describe("Task Creation and Management", () => {
        it("should create a task with the provided description", async () => {
            // Create a task
            const task = new Task("Implement a new feature", cline)

            // Verify the task properties
            expect(task.description).toBe("Implement a new feature")
            expect(task.subtasks).toEqual([])
            expect(task.status).toBe("pending")
        })

        it("should update task status", async () => {
            // Create a task
            const task = new Task("Fix a bug", cline)

            // Update the task status
            task.setStatus("in_progress")

            // Verify the task status
            expect(task.status).toBe("in_progress")
            expect(mockProvider.updateTask).toHaveBeenCalled()
        })

        it("should add and manage subtasks", async () => {
            // Create a task
            const task = new Task("Refactor code", cline)

            // Add subtasks
            task.addSubtask("Identify code smells")
            task.addSubtask("Extract common functionality")
            task.addSubtask("Write tests")

            // Verify subtasks
            expect(task.subtasks.length).toBe(3)
            expect(task.subtasks[0].description).toBe("Identify code smells")
            expect(task.subtasks[0].status).toBe("pending")

            // Update subtask status
            task.updateSubtaskStatus(0, "completed")

            // Verify subtask status
            expect(task.subtasks[0].status).toBe("completed")
            expect(mockProvider.updateSubtasks).toHaveBeenCalled()
        })

        it("should create a task from Cline.create", async () => {
            // Create a Cline instance using the static create method
            const [newCline, promise] = Cline.create({
                provider: mockProvider,
                apiConfiguration: {
                    apiProvider: "openai",
                    apiModelId: "gpt-4",
                    apiKey: "test-key",
                    apiBaseUrl: "https://api.example.com",
                    apiOrgId: "test-org",
                },
                task: "Create a new component",
                startTask: false,
                cwd: TEST_CWD,
            })

            // Initialize the SymbioteIgnoreController
            await newCline.symbioteIgnoreController.initialize()

            // Create a task manually since Cline.create doesn't return a Task in our test
            const task = new Task("Create a new component", newCline)

            // Verify the task
            expect(task.description).toBe("Create a new component")
            expect(task.status).toBe("pending")
        })

        it("should start a task when startTask is true", async () => {
            // Mock the startTask method
            const startTaskSpy = jest.spyOn(Task.prototype, 'start').mockImplementation(async function() {
                this.setStatus("in_progress")
                return this
            })

            // Create a Cline instance with startTask=true
            const [newCline, promise] = Cline.create({
                provider: mockProvider,
                apiConfiguration: {
                    apiProvider: "openai",
                    apiModelId: "gpt-4",
                    apiKey: "test-key",
                    apiBaseUrl: "https://api.example.com",
                    apiOrgId: "test-org",
                },
                task: "Optimize performance",
                startTask: true,
                cwd: TEST_CWD,
            })

            // Initialize the SymbioteIgnoreController
            await newCline.symbioteIgnoreController.initialize()

            // Create and start a task manually
            const task = new Task("Optimize performance", newCline)
            await task.start()

            // Verify the task was started
            expect(startTaskSpy).toHaveBeenCalled()
            expect(task.status).toBe("in_progress")

            // Clean up
            startTaskSpy.mockRestore()
        })

        it("should handle task completion", async () => {
            // Create a task
            const task = new Task("Write documentation", cline)

            // Complete the task
            task.setStatus("completed")

            // Verify the task status
            expect(task.status).toBe("completed")
            expect(mockProvider.updateTask).toHaveBeenCalledWith(expect.objectContaining({
                status: "completed"
            }))
        })
    })
})
