import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  SafeHtml,
  DomSanitizer,
} from '@angular/platform-browser';

import { DaffioDoc } from '../../models/doc';


@Component({
  selector: 'daffio-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocViewerComponent {

  constructor(private sanitizer: DomSanitizer) { }

  _doc: DaffioDoc;
  /**
   * The doc to render
   */
  @Input()
  get doc(): DaffioDoc {
    return this._doc;
  };
  set doc(value: DaffioDoc) {
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(value.contents);
    this._doc = value;
  }


  sanitizedContent: SafeHtml;
}
