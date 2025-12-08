import { DaffRendererParentMessage } from './types';

/**
 * Type guard for parent messages.
 */
export const isDaffRendererParentMessage = (
  message: unknown,
): message is DaffRendererParentMessage=>  (
  typeof message === 'object' &&
		message !== null &&
		'type' in message &&
		(message.type === 'setSchema')
);
