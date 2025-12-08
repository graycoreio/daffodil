import { DaffRendererChildMessage } from './types';

/**
 * Sends a message to the parent.
 */
export const sendParentMessage = (window: Window & typeof globalThis, message: DaffRendererChildMessage): void => {
  if (window?.parent && window.parent !== window) {
    window.parent.postMessage(message, '*');
  }
};
