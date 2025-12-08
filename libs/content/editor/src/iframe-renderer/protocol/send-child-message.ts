
import { DaffRendererParentMessage } from './types';

/**
 * Sends a message to the iframe
 */
export const sendChildIframeMessage = (iframe: HTMLIFrameElement, message: DaffRendererParentMessage): void =>  {
  if (iframe.contentWindow) {
    iframe.contentWindow.postMessage(message, '*');
  }
};
