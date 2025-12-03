import {
  Component,
  NgZone,
  ChangeDetectionStrategy,
  input,
  signal,
  OnDestroy,
  inject,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';

/**
 * DaffArticleCopyButtonComponent is a button that copies text content to the clipboard.
 * It provides visual feedback by changing the icon when content is successfully copied.
 *
 * @example
 * ```html
 * <daff-article-copy-button [content]="codeSnippet" />
 * ```
 */
@Component({
  selector: 'daff-article-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
  ],
})
export class DaffArticleCopyButtonComponent implements OnDestroy {
  private timeoutId?: ReturnType<typeof setTimeout>;

  // Content to be copied to clipboard
  content = input.required<string>();

  protected copied = signal(false);

  protected readonly faCopy = faCopy; // default copy icon
  protected readonly faCheck = faCheck; // check icon for copied state
  private _ngZone = inject(NgZone);

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

      this._ngZone.runOutsideAngular(() => {
        this.timeoutId = setTimeout(() => {
          this._ngZone.run(() => this.copied.set(false));
        }, 1500);
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  get ariaLabel() {
    return this.copied() ? 'Copied to clipboard' : 'Copy to clipboard';
  }
}
