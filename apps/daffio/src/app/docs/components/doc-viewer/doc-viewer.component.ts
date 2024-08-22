import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
} from '@angular/platform-browser';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../../core/sidebar/actions/sidebar.actions';
import { DAFFIO_DOCS_CONTENT_SIDEBAR_KIND } from '../../../core/sidebar/containers/docs-sidebar/docs-sidebar.component';
import { DaffioApiReference } from '../../api/models/api-reference';
import { DaffioDoc } from '../../models/doc';

@Component({
  selector: 'daffio-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocViewerComponent {
  faBars = faBars;

  constructor(private sanitizer: DomSanitizer, private store: Store<any>) {}

  /**
   * The doc to render
   */
  @Input() doc: DaffioDoc | DaffioApiReference;

  sanitizedContent: SafeHtml;

  get isApiPackage(): boolean {
    return 'docType' in this.doc && this.doc.docType === 'package';
  }

  open() {
    this.store.dispatch(new ToggleSidebar(DAFFIO_DOCS_CONTENT_SIDEBAR_KIND));
  }

  getInnerHtml(doc: DaffioDoc): SafeHtml {
    //It is necessary to bypass the default angular sanitization to keep id tags in the injected html. These id tags are used for fragment routing.
    return this.sanitizer.bypassSecurityTrustHtml(doc.contents);
  }
}
