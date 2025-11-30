import { DaffContentSchema } from '@daffodil/content';

import { DaffContentChatMessage } from './chat-sidebar/chat-message';

/**
 * Output data structure emitted when the user submits a prompt in the AI editor.
 * Contains the prompt text along with the current context (chat history and schema)
 * needed to generate an AI response.
 */
export interface PromptOutput {
  /** The user's prompt text requesting changes or new content */
  prompt: string;

  /** Complete conversation history including user and system messages */
  chatHistory: DaffContentChatMessage[];

  /** Current schema state that may be modified by the user */
  schema: DaffContentSchema;
}
