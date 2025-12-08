import { DaffRendererChildMessage } from './types';

/**
 * Type guard for child messages.
 */
export const isDaffRendererChildMessage = (
  message: unknown,
): message is DaffRendererChildMessage => (
  typeof message === 'object' &&
    message !== null &&
    'type' in message &&
    (message.type === 'schemaUpdate' || message.type === 'ready')
);
