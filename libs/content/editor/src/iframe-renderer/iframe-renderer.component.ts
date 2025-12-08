import {
  DOCUMENT,
  KeyValuePipe,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
} from '@angular/platform-browser';

import { DaffContentSchema } from '@daffodil/content';

import {
  DaffRendererChildMessage,
  isDaffRendererChildMessage,
  sendChildIframeMessage,
} from './protocol/public_api';
import { DaffEditorRendererMode } from '../editor/renderer-config';

/**
 * A component that renders content schema in an iframe for CSS isolation.
 *
 * Supports two communication modes:
 * - `csr`: Client-side rendering. Dynamic updates via postMessage, supports inline editing
 * - `ssr`: Server-side rendering. Schema POSTed via hidden form, page reloads on changes, preview only
 *
 * @example
 * ```html
 * <daff-iframe-renderer
 *   [rendererUrl]="'/renderer'"
 *   [mode]="'csr'"
 *   [schema]="pageSchema"
 *   [viewportMode]="'desktop'"
 *   (schemaUpdate)="onSchemaUpdate($event)">
 * </daff-iframe-renderer>
 * ```
 */
@Component({
  selector: 'daff-iframe-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KeyValuePipe],
  template: `
    <iframe
      #frame
      name="daff-iframe-renderer-iframe"
      [src]="safeUrl()"
      (load)="onIframeLoad()">
    </iframe>
    <!-- Hidden form for SSR mode POST submissions -->
    @if (mode() === 'ssr') {
      <form
        #ssrForm
        [attr.action]="rendererUrl()"
        method="POST"
        target="daff-iframe-renderer-iframe">
        <input type="hidden" name="schema" #schemaInput>
        @for (field of formFields() | keyvalue; track field.key) {
          <input type="hidden" [attr.name]="field.key" [value]="field.value">
        }
      </form>
    }
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    form {
      display: none;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  `],
})
export class DaffIframeRenderer implements OnInit {

  private readonly frameRef = viewChild.required<ElementRef<HTMLIFrameElement>>('frame');
  private readonly ssrFormRef = viewChild<ElementRef<HTMLFormElement>>('ssrForm');
  private readonly schemaInputRef = viewChild<ElementRef<HTMLInputElement>>('schemaInput');

  private readonly sanitizer = inject(DomSanitizer);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;

  /**
   * Whether the iframe has signaled it's ready to receive messages.
   * Only used in CSR mode.
   */
  private readonly isIframeReady = signal(false);

  /**
   * Whether the iframe has loaded its initial content.
   * Used in SSR mode to wait for about:blank to load before form submission.
   */
  private readonly isIframeLoaded = signal(false);

  /**
   * Sanitized URL for the iframe src (used in CSR mode).
   * In SSR mode, the iframe loads via form POST instead.
   */
  protected readonly safeUrl = signal<SafeResourceUrl>('');

  /**
   * Unique name for the iframe to target with form submissions.
   */
  protected readonly iframeName = `daff-iframe-renderer-iframe`;

  /**
   * The URL of the renderer page to load in the iframe.
   */
  readonly rendererUrl = input.required<string>();

  /**
   * The communication mode for the renderer.
   * - `csr`: Client-side rendering. Dynamic updates, supports inline editing
   * - `ssr`: Server-side rendering. Schema POSTed via form, reloads on changes, preview only
   */
  readonly mode = input<DaffEditorRendererMode>('csr');

  /**
   * The content schema to render.
   */
  readonly schema = input<DaffContentSchema>();

  /**
   * Additional form fields to include in the SSR form POST.
   * These are added as hidden inputs alongside the schema field.
   */
  readonly formFields = input<Record<string, string>>({});

  /**
   * Emits when the schema is updated via inline editing in the iframe.
   *
   * To trigger this from the child iframe, use `postMessage` to send a message
   * to the parent window with the following structure:
   *
   * ```ts
   * window.parent.postMessage({
   *   type: 'schemaUpdate',
   *   schema: updatedSchema
   * }, '*');
   * ```
   */
  readonly schemaUpdate = output<DaffContentSchema>();

  constructor() {
    // Set iframe src based on mode
    effect(() => {
      if (this.mode() === 'csr') {
        // CSR mode: Set iframe src directly to the renderer URL
        const url = this.rendererUrl();
        this.safeUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(url));
      } else {
        // SSR mode: Set to about:blank to create a targetable browsing context for form POST
        this.safeUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl('about:blank'));
      }
    });

    // SSR mode: Submit form when iframe is loaded and schema changes
    effect(() => {
      if (this.mode() !== 'ssr' || !this.isIframeLoaded()) {
        return;
      }

      const schema = this.schema();
      untracked(() => this.submitSsrForm(schema));
    });



    // CSR mode: Send schema to iframe when it changes and iframe is ready
    effect(() => {
      if (this.mode() !== 'csr') {
        return;
      }

      const schema = this.schema();
      const ready = this.isIframeReady();

      if (ready) {
        untracked(() => sendChildIframeMessage(
          this.frameRef().nativeElement,
          { type: 'setSchema', schema }),
        );
      }
    });
  }

  /**
   * Submits the hidden form to POST schema to the renderer (SSR mode).
   */
  private submitSsrForm(schema: DaffContentSchema | undefined): void {
    const form = this.ssrFormRef()?.nativeElement;
    const schemaInput = this.schemaInputRef()?.nativeElement;

    if (!form || !schemaInput) {
      return;
    }

    schemaInput.value = schema ? JSON.stringify(schema) : '';
    form.submit();
  }

  ngOnInit(): void {
    // Only set up message listener for CSR mode
    if (this.mode() !== 'csr') {
      return;
    }

    const messageHandler = (event: MessageEvent) => {
      if (!this.isValidOrigin(event.origin)) {
        return;
      }

      if (!isDaffRendererChildMessage(event.data)) {
        return;
      }

      this.handleChildMessage(event.data);
    };

    this.window?.addEventListener('message', messageHandler);

    this.destroyRef.onDestroy(() => {
      this.window?.removeEventListener('message', messageHandler);
    });
  }

  /**
   * Called when the iframe finishes loading.
   */
  protected onIframeLoad(): void {
    if (this.mode() === 'csr') {
      // Reset ready state when iframe reloads (CSR mode only)
      this.isIframeReady.set(false);
    } else {
      // SSR mode: Mark iframe as loaded so form can be submitted
      this.isIframeLoaded.set(true);
    }
  }

  /**
   * Handles messages from the iframe (CSR mode only).
   */
  private handleChildMessage(message: DaffRendererChildMessage): void {
    switch (message.type) {
      case 'ready':
        this.isIframeReady.set(true);
        sendChildIframeMessage(
          this.frameRef().nativeElement,
          { type: 'setSchema', schema: this.schema() },
        );
        break;

      case 'schemaUpdate':
        this.schemaUpdate.emit(message.schema);
        break;
    }
  }

  /**
   * Validates that the message origin matches the expected iframe origin.
   */
  private isValidOrigin(origin: string): boolean {
    return origin === this.window?.location.origin;
  }
}
