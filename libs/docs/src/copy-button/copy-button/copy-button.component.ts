import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
  OnDestroy,
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
  host: {
    '[attr.aria-label]': 'copied() ? "Copied to clipboard" : "Copy to clipboard"',
  },
  imports: [
    DaffIconButtonComponent,
    FaIconComponent,
  ],
})
export class DaffDocsCopyButtonComponent implements OnDestroy {
  private timeoutId?: ReturnType<typeof setTimeout>;

  // Content to be copied to clipboard
  content = input.required<string>();

  protected copied = signal(false);

  protected readonly faCopy = faCopy; // default copy icon
  protected readonly faCheck = faCheck; // check icon for copied state

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  async copyToClipboard(): Promise<void> {
    try {
      // Write content to clipboard
      await navigator.clipboard.writeText(this.content());
      this.copied.set(true);

      this.timeoutId = setTimeout(() => {
        this.copied.set(false);
      }, 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
}
