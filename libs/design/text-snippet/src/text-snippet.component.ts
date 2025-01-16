import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'daff-text-snippet',
  templateUrl: './text-snippet.component.html',
  styleUrls: ['./text-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class DaffTextSnippetComponent {

  /**
   * A property to track whether or not the component
   * should render a condensed version of the content.
   */
  @Input() condensed = true;

  @Input() html = '';

  @ViewChild('contentEl', { read: ElementRef }) contentRef: ElementRef;
  @ViewChild('htmlEl', { read: ElementRef }) htmlRef: ElementRef;

  /**
   * An output event that can be used to track the state of the component externally.
   */
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  toggleSnippet() {
    this.condensed = !this.condensed;
    this.toggle.emit(this.condensed);
  }
}
