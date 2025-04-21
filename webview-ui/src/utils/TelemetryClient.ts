import { TelemetrySetting } from "../../../src/shared/TelemetrySetting"

/**
 * TelemetryClient stub implementation for Symbiote
 * This is a non-functional stub that maintains API compatibility
 * but does not collect or send any telemetry data
 */
class TelemetryClient {
	private static instance: TelemetryClient
	private static telemetryEnabled: boolean = false

	/**
	 * Updates the telemetry state based on user preferences
	 * In Symbiote, telemetry is always disabled regardless of settings
	 */
	public updateTelemetryState(telemetrySetting: TelemetrySetting, apiKey?: string, distinctId?: string) {
		// Always set telemetry to disabled in Symbiote
		TelemetryClient.telemetryEnabled = false
	}

	/**
	 * Gets or creates the singleton instance of TelemetryClient
	 * @returns The TelemetryClient instance
	 */
	public static getInstance(): TelemetryClient {
		if (!TelemetryClient.instance) {
			TelemetryClient.instance = new TelemetryClient()
		}
		return TelemetryClient.instance
	}

	/**
	 * Stub implementation that does not capture any telemetry
	 * @param eventName The event name that would have been captured
	 * @param properties The event properties that would have been captured
	 */
	public capture(eventName: string, properties?: Record<string, any>) {
		// No-op implementation - telemetry is disabled
	}
}

export const telemetryClient = TelemetryClient.getInstance()
