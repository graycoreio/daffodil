import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';

@Component({
  selector: 'daff-text-snippet',
  templateUrl: './text-snippet.component.html',
  styleUrls: ['./text-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    DaffButtonModule,
  ],
})
export class DaffTextSnippetComponent implements AfterViewInit {

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
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  calculateHeight() {
    const ref = this.html ? this.htmlRef : this.contentRef;

    if(!ref || !ref.nativeElement.firstChild) {
      return;
    }

    const heightNode = ref.nativeElement.firstChild.nodeType === 1 ? ref.nativeElement.firstChild : ref.nativeElement;

    if(this.condensed) {
      ref.nativeElement.style.height = window.getComputedStyle(heightNode, null).getPropertyValue('line-height');
    } else {
      ref.nativeElement.style.height = null;
    }
  }

  toggleSnippet() {
    this.condensed = !this.condensed;
    this.calculateHeight();
    this.toggle.emit(this.condensed);
  }

  ngAfterViewInit() {
    this.calculateHeight();
  }
}
