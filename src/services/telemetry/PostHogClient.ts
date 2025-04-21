import * as vscode from "vscode"
import { logger } from "../../utils/logging"

// This forward declaration is needed to avoid circular dependencies
export interface ClineProviderInterface {
	// Gets telemetry properties to attach to every event
	getTelemetryProperties(): Promise<Record<string, any>>
}

/**
 * PostHogClient stub implementation for Symbiote
 * This is a non-functional stub that maintains API compatibility
 * but does not collect or send any telemetry data
 */
export class PostHogClient {
	public static readonly EVENTS = {
		TASK: {
			CREATED: "Task Created",
			RESTARTED: "Task Reopened",
			COMPLETED: "Task Completed",
			CONVERSATION_MESSAGE: "Conversation Message",
			MODE_SWITCH: "Mode Switched",
			TOOL_USED: "Tool Used",
			CHECKPOINT_CREATED: "Checkpoint Created",
			CHECKPOINT_RESTORED: "Checkpoint Restored",
			CHECKPOINT_DIFFED: "Checkpoint Diffed",
			CODE_ACTION_USED: "Code Action Used",
			PROMPT_ENHANCED: "Prompt Enhanced",
		},
		ERRORS: {
			SCHEMA_VALIDATION_ERROR: "Schema Validation Error",
			DIFF_APPLICATION_ERROR: "Diff Application Error",
			SHELL_INTEGRATION_ERROR: "Shell Integration Error",
			CONSECUTIVE_MISTAKE_ERROR: "Consecutive Mistake Error",
		},
	}

	private static instance: PostHogClient
	private distinctId: string = vscode.env.machineId
	private telemetryEnabled: boolean = false
	private providerRef: WeakRef<ClineProviderInterface> | null = null

	private constructor() {
		// No initialization needed for stub
	}

	/**
	 * Updates the telemetry state based on user preferences and VSCode settings
	 * In Symbiote, telemetry is always disabled regardless of settings
	 * @param didUserOptIn Whether the user has explicitly opted into telemetry
	 */
	public updateTelemetryState(didUserOptIn: boolean): void {
		// Always set telemetry to disabled in Symbiote
		this.telemetryEnabled = false
		logger.debug("Telemetry is permanently disabled in Symbiote")
	}

	/**
	 * Gets or creates the singleton instance of PostHogClient
	 * @returns The PostHogClient instance
	 */
	public static getInstance(): PostHogClient {
		if (!PostHogClient.instance) {
			PostHogClient.instance = new PostHogClient()
		}

		return PostHogClient.instance
	}

	/**
	 * Sets the ClineProvider reference to use for global properties
	 * @param provider A ClineProvider instance to use
	 */
	public setProvider(provider: ClineProviderInterface): void {
		this.providerRef = new WeakRef(provider)
		logger.debug("PostHogClient: ClineProvider reference set (stub implementation)")
	}

	/**
	 * Stub implementation that does not capture any telemetry
	 * @param event The event that would have been captured
	 */
	public async capture(event: { event: string; properties?: any }): Promise<void> {
		// No-op implementation - telemetry is disabled
		return Promise.resolve()
	}

	/**
	 * Checks if telemetry is currently enabled
	 * @returns Always false in Symbiote
	 */
	public isTelemetryEnabled(): boolean {
		return false
	}

	/**
	 * Stub shutdown method
	 */
	public async shutdown(): Promise<void> {
		// No-op implementation
		return Promise.resolve()
	}
}
