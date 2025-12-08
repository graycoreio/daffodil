import { DaffContentSchema } from '@daffodil/content';

/**
 * Messages sent from the parent (editor) to the iframe (renderer).
 */
export type DaffRendererParentMessage =
  | DaffRendererSetSchemaMessage;

/**
 * Message to set or update the schema in the renderer.
 */
export interface DaffRendererSetSchemaMessage {
  type: 'setSchema';
  schema: DaffContentSchema | undefined;
}

/**
 * Messages sent from the iframe (renderer) to the parent (editor).
 */
export type DaffRendererChildMessage =
  | DaffRendererSchemaUpdateMessage
  | DaffRendererReadyMessage;

/**
 * Message indicating the schema was updated via inline editing.
 */
export interface DaffRendererSchemaUpdateMessage {
  type: 'schemaUpdate';
  schema: DaffContentSchema;
}

/**
 * Message indicating the renderer is ready to receive messages.
 */
export interface DaffRendererReadyMessage {
  type: 'ready';
}
