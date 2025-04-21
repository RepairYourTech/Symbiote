import { z } from "zod"

import { SymbioteEventName, symbioteEventsSchema, symbioteSettingsSchema } from "./index"

/**
 * Ack
 */

export const ackSchema = z.object({
	clientId: z.string(),
	pid: z.number(),
	ppid: z.number(),
})

export type Ack = z.infer<typeof ackSchema>

/**
 * TaskCommand
 */

export enum TaskCommandName {
	StartNewTask = "StartNewTask",
	CancelTask = "CancelTask",
	CloseTask = "CloseTask",
}

export const taskCommandSchema = z.discriminatedUnion("commandName", [
	z.object({
		commandName: z.literal(TaskCommandName.StartNewTask),
		data: z.object({
			configuration: symbioteSettingsSchema,
			text: z.string(),
			images: z.array(z.string()).optional(),
			newTab: z.boolean().optional(),
		}),
	}),
	z.object({
		commandName: z.literal(TaskCommandName.CancelTask),
		data: z.string(),
	}),
	z.object({
		commandName: z.literal(TaskCommandName.CloseTask),
		data: z.string(),
	}),
])

export type TaskCommand = z.infer<typeof taskCommandSchema>

/**
 * TaskEvent
 */

export const taskEventSchema = z.discriminatedUnion("eventName", [
	z.object({
		eventName: z.literal(SymbioteEventName.Message),
		payload: symbioteEventsSchema.shape[SymbioteEventName.Message],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskCreated),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskCreated],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskStarted),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskStarted],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskModeSwitched),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskModeSwitched],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskPaused),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskPaused],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskUnpaused),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskUnpaused],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskAskResponded),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskAskResponded],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskAborted),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskAborted],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskSpawned),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskSpawned],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskCompleted),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskCompleted],
	}),
	z.object({
		eventName: z.literal(SymbioteEventName.TaskTokenUsageUpdated),
		payload: symbioteEventsSchema.shape[SymbioteEventName.TaskTokenUsageUpdated],
	}),
])

export type TaskEvent = z.infer<typeof taskEventSchema>

/**
 * IpcMessage
 */

export enum IpcMessageType {
	Connect = "Connect",
	Disconnect = "Disconnect",
	Ack = "Ack",
	TaskCommand = "TaskCommand",
	TaskEvent = "TaskEvent",
}

export enum IpcOrigin {
	Client = "client",
	Server = "server",
}

export const ipcMessageSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal(IpcMessageType.Ack),
		origin: z.literal(IpcOrigin.Server),
		data: ackSchema,
	}),
	z.object({
		type: z.literal(IpcMessageType.TaskCommand),
		origin: z.literal(IpcOrigin.Client),
		clientId: z.string(),
		data: taskCommandSchema,
	}),
	z.object({
		type: z.literal(IpcMessageType.TaskEvent),
		origin: z.literal(IpcOrigin.Server),
		relayClientId: z.string().optional(),
		data: taskEventSchema,
	}),
])

export type IpcMessage = z.infer<typeof ipcMessageSchema>
