import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  HostBinding,
} from '@angular/core';

import {
  DesignLandCodeExample,
  DesignLandCodeExampleFile,
} from '../model/code-example';

@Component({
  selector: 'design-land-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CodePreviewComponent implements OnChanges {
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
}
