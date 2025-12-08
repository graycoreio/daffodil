import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  HostBinding,
  input,
  output,
  signal,
} from '@angular/core';

import { DaffContentSchema } from '@daffodil/content';

import { DaffContentChatMessage } from './chat-sidebar/chat-message';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { PromptOutput } from './prompt';
import { DaffEditorRendererConfig } from './renderer-config';
import { SchemaViewComponent } from './schema-view/schema-view.component';
import { EditableRenderer } from '../editable-renderer/editable-renderer';
import { DaffIframeRenderer } from '../iframe-renderer/iframe-renderer.component';

/**
 * An AI-powered visual editor component for editing {@link DaffContentSchema} content.
 *
 * This component provides a complete editing interface with:
 * - A visual preview of the rendered schema with inline text editing
 * - An AI chat sidebar for generating and modifying content via natural language
 * - A schema viewer for inspecting the raw JSON structure
 * - A components list showing available components
 * - Responsive viewport preview modes (desktop, tablet, mobile)
 * - Fullscreen mode support
 *
 * @example
 * ```html
 * <daff-ai-editor
 *   [schema]="pageSchema"
 *   [chatHistory]="messages"
 *   [isGenerating]="loading"
 *   [error]="errorMessage"
 *   (schemaUpdate)="onSchemaChange($event)"
 *   (prompt)="onPromptSubmit($event)"
 *   (stopGeneration)="onStop()">
 * </daff-ai-editor>
 * ```
 */
@Component({
  selector: 'daff-ai-editor',
  imports: [ChatSidebarComponent, EditableRenderer, DaffIframeRenderer, ComponentsListComponent, SchemaViewComponent],
  templateUrl: './ai-editor.component.html',
  styleUrl: './ai-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffAiEditorComponent {
  /**
   * The content schema to render and edit.
   */
  schema = input<DaffContentSchema>();

  /**
   * Whether the editor is in fullscreen mode.
   */
  fullscreen = input<boolean>(false);

  /**
   * The conversation history between the user and AI.
   */
  chatHistory = input<DaffContentChatMessage[]>([]);

  /**
   * Error message to display in the chat sidebar.
   */
  error = input<string | null>(null);

  /**
   * Whether the AI is currently generating a response.
   */
  isGenerating = input<boolean>(false);

  /**
   * Optional configuration for the iframe-based renderer.
   * When provided, the editor uses an iframe for CSS isolation.
   * When not provided, uses inline rendering (default behavior).
   */
  rendererConfig = input<DaffEditorRendererConfig | null>(null);

  /**
   * Emits when the schema is updated, either via inline editing or AI generation.
   */
  schemaUpdate = output<DaffContentSchema>();

  /**
   * Emits when the user submits a prompt to the AI.
   * Contains the prompt text, chat history, and current schema for context.
   */
  prompt = output<PromptOutput>();

  /**
   * Emits when the user requests to stop the current AI generation.
   */
  stopGeneration = output<void>();

  /**
   * Emits when the fullscreen state should change.
   */
  fullscreenChange = output<boolean>();

  /**
   * The currently active sidebar tab.
   *
   * @docs-private
   */
  activeTab = signal<'interact' | 'schema' | 'components'>('interact');

  /**
   * The current viewport preview mode.
   *
   * @docs-private
   */
  viewportMode = signal<'desktop' | 'tablet' | 'mobile'>('desktop');

  /**
   * Whether the sidebar is visible.
   *
   * @docs-private
   */
  sidebarVisible = signal<boolean>(true);

  /**
   * User messages that have been submitted but not yet confirmed in chatHistory.
   *
   * @docs-private
   */
  optimisticMessages = signal<DaffContentChatMessage[]>([]);

  /**
   * Combined chat history including optimistic messages for immediate UI feedback.
   *
   * @docs-private
   */
  displayChatHistory = computed(() => [
    ...this.chatHistory(),
    ...this.optimisticMessages(),
  ]);

  constructor() {
    effect(() => {
      this.chatHistory();
      this.optimisticMessages.set([]);
    });
  }

  /**
   * @docs-private
   */
  @HostBinding('class.fullscreen')
  get fullscreenClass() {
    return this.fullscreen();
  }

  /**
   * Handles prompt submission from the chat sidebar.
   * Adds an optimistic message for immediate UI feedback and emits the prompt event.
   *
   * @docs-private
   * @param promptText - The user's prompt text.
   */
  onPromptSubmit(promptText: string) {
    this.optimisticMessages.set([
      {
        type: 'user',
        message: promptText,
      },
    ]);

    this.prompt.emit({
      prompt: promptText,
      chatHistory: this.chatHistory(),
      schema: this.schema(),
    });
  }

  /**
   * Handles the stop generation request from the chat sidebar.
   *
   * @docs-private
   */
  onStopGeneration() {
    this.stopGeneration.emit();
  }

  /**
   * Handles schema updates from the editable renderer.
   *
   * @docs-private
   * @param updatedSchema - The updated schema from inline editing.
   */
  onSchemaUpdate(updatedSchema: DaffContentSchema) {
    this.schemaUpdate.emit(updatedSchema);
  }

  /**
   * Handles schema restoration from the chat history.
   *
   * @docs-private
   * @param schema - The schema to restore.
   */
  onSchemaRestore(schema: DaffContentSchema) {
    this.schemaUpdate.emit(schema);
  }

  /**
   * Sets the active sidebar tab.
   *
   * @docs-private
   * @param tab - The tab to activate.
   */
  setActiveTab(tab: 'interact' | 'schema' | 'components') {
    this.activeTab.set(tab);
  }

  /**
   * Sets the viewport preview mode.
   *
   * @docs-private
   * @param mode - The viewport mode to set.
   */
  setViewportMode(mode: 'desktop' | 'tablet' | 'mobile') {
    this.viewportMode.set(mode);
  }

  /**
   * Toggles fullscreen mode and emits the new state.
   *
   * @docs-private
   */
  toggleFullscreen() {
    this.fullscreenChange.emit(!this.fullscreen());
  }

  /**
   * Toggles the sidebar visibility.
   *
   * @docs-private
   */
  toggleSidebar() {
    this.sidebarVisible.update(visible => !visible);
  }
}
