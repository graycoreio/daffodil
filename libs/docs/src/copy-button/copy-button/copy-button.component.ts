import { DOCUMENT } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  inject,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';

import { DaffIconButtonComponent } from '@daffodil/design/button';

/**
 * DaffDocsCopyButtonComponent is a button that copies text content to the clipboard.
 * It provides visual feedback by changing the icon when content is successfully copied.
 *
 * @example
 * ```html
 * <daff-docs-copy-button [content]="codeSnippet" />
 * ```
 */
@Component({
  selector: 'daff-docs-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffIconButtonComponent,
    FaIconComponent,
  ],
})
export class DaffDocsCopyButtonComponent {
  private document = inject(DOCUMENT);

  // Code snippet to copy
  content = input.required<string>();

  protected copied = signal(false);

  protected readonly faCopy = faCopy; // default copy icon
  protected readonly faCheck = faCheck; // check icon for copied state

  async copyToClipboard(): Promise<void> {
    try {
      // Write code snippet to clipboard
      await this.document.defaultView?.navigator.clipboard.writeText(this.content());
      this.copied.set(true);

      setTimeout(() => {
        this.copied.set(false);
      }, 1500); // resets copied state after 1.5 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
}
