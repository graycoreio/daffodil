import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
} from '@angular/platform-browser';

import { DaffioDoc } from '../../models/doc';

@Component({
  selector: 'daffio-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocViewerComponent implements OnChanges {

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * The doc to render
   */
  @Input() doc: DaffioDoc;

	sanitizedContent: SafeHtml;

	ngOnChanges() {
	  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.doc.contents);
	}
}
