import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'daff-text-snippet',
  templateUrl: './text-snippet.component.html',
  styleUrls: ['./text-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-text-snippet',
  },
})
export class DaffTextSnippetComponent {

  /**
   * Whether or not the component should render a condensed version of the content.
   */
  @Input() condensed = true;

  /**
   * The HTML content to render inside the snippet.
   */
  @Input() html = '';

  /**
   * @docs-private
   */
  ariaExpanded() {
    return !this.condensed ? true : false;
  }

  /**
   * @docs-private
   */
  @ViewChild('contentEl', { read: ElementRef }) contentRef: ElementRef;

  /**
   * @docs-private
   */
  @ViewChild('htmlEl', { read: ElementRef }) htmlRef: ElementRef;

  /**
   * An output event that can be used to track the state of the component externally.
   */
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  /**
   * @docs-private
   */
  toggleSnippet() {
    this.condensed = !this.condensed;
    this.toggle.emit(this.condensed);
  }
}
