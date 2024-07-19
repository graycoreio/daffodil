import { NgComponentOutlet } from '@angular/common';
import {
  Component,
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

  /**
   * @docs-private
   */
  @HostBinding('class.daff-docs-code-preview') class = true;

  /**
   * The example code
   */
  @Input() example: DaffDocsCodeExample;

  /**
   * The index of the currently visible file.
   */
  private _selectedFile = 0;

  /**
   * The currently selected example file.
   */
  get exampleFile(): DaffDocsCodeExampleFile {
    return this.example?.files[this._selectedFile];
  }

  /**
   * Property to change the display of the content
   */
  @Input() hideContent = false;

  /**
   * @docs-private
   */
  @HostBinding('class.hide-content') get hideContentClass() {
    return this.hideContent;
  }

  /**
   * The highlight.js sytyling class of the `code` block.
   */
  get codeBlockClass(): string {
    return `hljs ${this.exampleFile?.language}`;
  }

  /**
   * Select a specific file.
   */
  selectFile(index: number) {
    this._selectedFile = index;
  }
}
