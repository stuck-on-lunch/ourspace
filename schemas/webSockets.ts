import z from 'zod';

export const ZMessageType = z.enum(['event', 'message']);
export const MessageType = ZMessageType.enum;
export type MessageType = z.infer<typeof ZMessageType>;

export const ZWebSocketMessageBase = z.object({
  type: ZMessageType,
  timestamp: z.number(),
  data: z.object({}).passthrough(),
});

export type WebSocketEventMessage = z.infer<typeof ZWebSocketEventMessage>;
export const ZWebSocketEventMessage = ZWebSocketMessageBase.extend({
  type: z.literal(MessageType.event),
  eventType: z.enum(['connect', 'disconnect']),
});

export type WebSocketUserMessage = z.infer<typeof ZWebSocketUserMessage>;
export const ZWebSocketUserMessage = ZWebSocketMessageBase.extend({
  type: z.literal(MessageType.message),
  message: z.string(),
});
