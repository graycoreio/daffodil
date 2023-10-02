import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  HostBinding,
  Renderer2,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '@daffodil/design';

import {
  DesignLandCodeExample,
  DesignLandCodeExampleFile,
} from '../model/code-example';

/**
 * An _elementRef and an instance of renderer2 are needed for the code preview mixins
 */
class CodePreviewBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _codePreviewBase = daffArticleEncapsulatedMixin((CodePreviewBase));

@Component({
  selector: 'design-land-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodePreviewComponent extends _codePreviewBase implements OnChanges {
  @HostBinding('class.design-land-code-preview') class = true;

  /**
   * The ref for the slot of the custom element for the example
   */
  @ViewChild('content', { static: true }) content: ElementRef;

  /**
   * Property to change the display of the content
   */
  @Input() hideContent = false;

  @HostBinding('class.hide-content') get hideContentClass() {
    return this.hideContent;
  }

  /**
   * The example code
   */
  @Input() example: DesignLandCodeExample;

  exampleFile: DesignLandCodeExampleFile;

  ngOnChanges() {
    if(this.example){
      this.content.nativeElement.innerHtml = '';
      this.content.nativeElement.appendChild(document.createElement(this.example.element));
      this.exampleFile = this.example.files[0];
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }
}
