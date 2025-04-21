/**
 * Task class for testing
 * 
 * This is a simplified version of the Task class used in the Cline class.
 */

import { Cline } from "../../Cline";

export type TaskStatus = "pending" | "in_progress" | "completed" | "failed";

export interface Subtask {
    description: string;
    status: TaskStatus;
}

export class Task {
    description: string;
    status: TaskStatus = "pending";
    subtasks: Subtask[] = [];
    private cline: Cline;

    constructor(description: string, cline: Cline) {
        this.description = description;
        this.cline = cline;
    }

    /**
     * Set the status of the task
     * @param status - The new status
     */
    setStatus(status: TaskStatus): void {
        this.status = status;
        this.cline.providerRef.deref()?.updateTask({
            description: this.description,
            status: this.status,
        });
    }

    /**
     * Add a subtask to the task
     * @param description - The subtask description
     * @returns The index of the new subtask
     */
    addSubtask(description: string): number {
        const subtask: Subtask = {
            description,
            status: "pending",
        };
        this.subtasks.push(subtask);
        this.updateSubtasks();
        return this.subtasks.length - 1;
    }

    /**
     * Update the status of a subtask
     * @param index - The index of the subtask
     * @param status - The new status
     */
    updateSubtaskStatus(index: number, status: TaskStatus): void {
        if (index >= 0 && index < this.subtasks.length) {
            this.subtasks[index].status = status;
            this.updateSubtasks();
        }
    }

    /**
     * Update the subtasks in the UI
     */
    private updateSubtasks(): void {
        this.cline.providerRef.deref()?.updateSubtasks(this.subtasks);
    }

    /**
     * Start the task
     */
    async start(): Promise<Task> {
        this.setStatus("in_progress");
        return this;
    }

    /**
     * Complete the task
     */
    complete(): void {
        this.setStatus("completed");
    }

    /**
     * Mark the task as failed
     */
    fail(): void {
        this.setStatus("failed");
    }
}
