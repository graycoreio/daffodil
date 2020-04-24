import { Component, ViewChild, ElementRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { DesignLandCodeExample, DesignLandCodeExampleFile } from '../model/code-example';

@Component({
  selector: 'design-land-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodePreviewComponent {
  /**
   * The ref for the slot of the custom element for the example
   */
  @ViewChild('content', { static: true }) content: ElementRef;
  
  /**
   * The title of the preview
   */
  @Input() title: string;
  
  /**
   * The example code
   */
  @Input() example: DesignLandCodeExample;

  selectedFile: DesignLandCodeExampleFile;

  ngOnChanges() {
    if(this.example){
      this.content.nativeElement.innerHtml = "";
      this.content.nativeElement.appendChild(document.createElement(this.example.element));
      this.selectedFile = this.example.files[0];
    }
  }
}
