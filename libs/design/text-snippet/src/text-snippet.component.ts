import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  input,
  model,
  output,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'daff-text-snippet',
  templateUrl: './text-snippet.component.html',
  styleUrl: './text-snippet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-text-snippet',
  },
})
export class DaffTextSnippetComponent {
  /**
   * Whether or not the component should render a condensed version of the content.
   */
  condensed = model(true);

  /**
   * The HTML content to render inside the snippet.
   */
  html = input('');

  /**
   * @docs-private
   */
  ariaExpanded() {
    return !this.condensed() ? true : false;
  }

  /**
   * @docs-private
   */
  contentRef = viewChild('contentEl', { read: ElementRef });

  /**
   * @docs-private
   */
  htmlRef = viewChild('htmlEl', { read: ElementRef });

  /**
   * An output event that can be used to track the state of the component externally.
   */
  toggled = output<boolean>();

  /**
   * @docs-private
   */
  toggleSnippet() {
    this.condensed.set(!this.condensed());
    this.toggled.emit(this.condensed());
  }
}
