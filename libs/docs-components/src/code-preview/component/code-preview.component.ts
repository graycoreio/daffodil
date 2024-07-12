import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import {
  DaffDocsCodeExample,
  DaffDocsCodeExampleFile,
} from '../model/code-example';

@Component({
  selector: 'daff-docs-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgComponentOutlet,
  ],
})
export class DaffDocsCodePreviewComponent {
  private _selectedFile = 0;

  @HostBinding('class.daff-docs-code-preview') class = true;

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
  @Input() example: DaffDocsCodeExample;

  get exampleFile(): DaffDocsCodeExampleFile {
    return this.example?.files[this._selectedFile];
  }

  get codeBlockClass(): string {
    return `hljs ${this.exampleFile?.language}`;
  }

  selectFile(index: number) {
    this._selectedFile = index;
  }
}
