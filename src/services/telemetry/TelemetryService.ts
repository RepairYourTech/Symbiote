import { ZodError } from "zod"
import { logger } from "../../utils/logging"
import { PostHogClient, ClineProviderInterface } from "./PostHogClient"

/**
 * TelemetryService stub implementation for Symbiote
 * This is a non-functional stub that maintains API compatibility
 * but does not collect or send any telemetry data
 */
class TelemetryService {
	private client: PostHogClient | null = null
	private initialized = false

	/**
	 * Initialize the telemetry service with the PostHog client
	 * In Symbiote, this is a stub that doesn't actually enable telemetry
	 */
	public initialize(): void {
		if (this.initialized) {
			return
		}

		try {
			this.client = PostHogClient.getInstance()
			this.initialized = true
			logger.debug("TelemetryService initialized (stub implementation)")
		} catch (error) {
			console.warn("Failed to initialize telemetry service:", error)
		}
	}

	/**
	 * Sets the ClineProvider reference to use for global properties
	 * @param provider A ClineProvider instance to use
	 */
	public setProvider(provider: ClineProviderInterface): void {
		// If client is initialized, pass the provider reference
		if (this.isReady) {
			this.client!.setProvider(provider)
		}
	}

	/**
	 * Base method for all telemetry operations
	 * Checks if the service is initialized before performing any operation
	 * @returns Whether the service is ready to use
	 */
	private get isReady(): boolean {
		return this.initialized && this.client !== null
	}

	/**
	 * Updates the telemetry state based on user preferences and VSCode settings
	 * In Symbiote, telemetry is always disabled regardless of settings
	 * @param didUserOptIn Whether the user has explicitly opted into telemetry
	 */
	public updateTelemetryState(didUserOptIn: boolean): void {
		if (!this.isReady) {
			return
		}

		this.client!.updateTelemetryState(didUserOptIn)
	}

	/**
	 * Stub implementation that does not capture any telemetry
	 * @param event The event that would have been captured
	 */
	public capture(event: { event: string; properties?: any }): void {
		// No-op implementation - telemetry is disabled
	}

	/**
	 * Generic method to capture any type of event with specified properties
	 * In Symbiote, this is a no-op stub
	 * @param eventName The event name to capture
	 * @param properties The event properties
	 */
	public captureEvent(eventName: string, properties?: any): void {
		// No-op implementation - telemetry is disabled
	}

	// Task events convenience methods - all no-op stubs
	public captureTaskCreated(taskId: string): void {}
	public captureTaskRestarted(taskId: string): void {}
	public captureTaskCompleted(taskId: string): void {}
	public captureConversationMessage(taskId: string, source: "user" | "assistant"): void {}
	public captureModeSwitch(taskId: string, newMode: string): void {}
	public captureToolUsage(taskId: string, tool: string): void {}
	public captureCheckpointCreated(taskId: string): void {}
	public captureCheckpointDiffed(taskId: string): void {}
	public captureCheckpointRestored(taskId: string): void {}
	public captureCodeActionUsed(actionType: string): void {}
	public capturePromptEnhanced(taskId?: string): void {}
	public captureSchemaValidationError({ schemaName, error }: { schemaName: string; error: ZodError }): void {}
	public captureDiffApplicationError(taskId: string, consecutiveMistakeCount: number): void {}
	public captureShellIntegrationError(taskId: string): void {}
	public captureConsecutiveMistakeError(taskId: string): void {}

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
		if (!this.isReady) {
			return
		}

		await this.client!.shutdown()
	}
}

// Export a singleton instance of the telemetry service wrapper
export const telemetryService = new TelemetryService()
