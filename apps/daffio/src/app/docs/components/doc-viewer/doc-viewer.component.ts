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
  styleUrls: ['./doc-viewer.component.scss'],
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
	  //It is necessary to bypass the default angular sanitization to keep id tags in the injected html. These id tags are used for fragment routing.
	  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.doc.contents);
	}
}
