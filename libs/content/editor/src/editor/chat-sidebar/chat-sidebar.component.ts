import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DaffContentSchema } from '@daffodil/content';

import { DaffContentChatMessage } from './chat-message';

/**
 * A chat interface component for interacting with the AI content generator.
 *
 * This component provides:
 * - A scrollable chat history displaying user and system messages
 * - An input field for submitting prompts
 * - Loading state with a "Thinking..." indicator
 * - Error message display
 * - Ability to restore previous schema versions from chat history
 * - Stop generation button while AI is processing
 *
 * The chat history automatically scrolls to the bottom when new messages arrive.
 */
@Component({
  selector: 'chat-sidebar',
  imports: [FormsModule],
  templateUrl: './chat-sidebar.component.html',
  styleUrl: './chat-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatSidebarComponent {
  /**
   * The conversation history to display.
   */
  chatHistory = input<DaffContentChatMessage[]>([]);

  /**
   * Whether the AI is currently generating a response.
   * When true, shows a loading indicator and stop button.
   */
  isLoading = input<boolean>(false);

  /**
   * Error message to display, if any.
   */
  error = input<string | null>(null);

  /**
   * Emits the prompt text when the user submits a message.
   */
  promptSubmit = output<string>();

  /**
   * Emits when the user requests to stop the current generation.
   */
  stopGeneration = output<void>();

  /**
   * Emits when the user clicks to restore a previous schema version.
   */
  schemaRestore = output<DaffContentSchema>();

  /**
   * The current text in the prompt input field.
   *
   * @docs-private
   */
  currentPrompt = signal('');

  /**
   * Reference to the chat history container element for auto-scrolling.
   *
   * @docs-private
   */
  chatHistoryContainer = viewChild<ElementRef<HTMLDivElement>>('chatHistoryEl');

  constructor() {
    effect(() => {
      this.chatHistory();
      setTimeout(() => {
        const container = this.chatHistoryContainer()?.nativeElement;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, 0);
    });
  }

  /**
   * Handles prompt submission from the input field.
   * Validates the input, emits the prompt, and clears the input field.
   *
   * @docs-private
   * @param event - Optional keyboard event (for Enter key submission).
   */
  onSubmitPrompt(event?: Event) {
    if (event instanceof KeyboardEvent) {
      event.preventDefault();
    }

    if (this.isLoading()) {
      return;
    }

    const promptText = this.currentPrompt();
    if (!promptText.trim()) {
      return;
    }

    this.promptSubmit.emit(promptText);
    this.currentPrompt.set('');
  }

  /**
   * Handles the stop generation button click.
   *
   * @docs-private
   */
  onStopGeneration() {
    this.stopGeneration.emit();
  }

  /**
   * Handles restoring a schema from chat history.
   *
   * @docs-private
   * @param schema - The schema to restore.
   */
  onRestoreSchema(schema: DaffContentSchema) {
    this.schemaRestore.emit(schema);
  }
}
