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
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../../core/sidebar/actions/sidebar.actions';
import { DAFFIO_DOCS_PACKAGES_CONTENT_SIDEBAR_KIND } from '../../../guides/components/packages-sidebar/packages-sidebar.component';
import { DaffioDoc } from '../../models/doc';

@Component({
  selector: 'daffio-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocViewerComponent implements OnChanges {
  faBars = faBars;

  constructor(private sanitizer: DomSanitizer, private store: Store<any>) {}

  /**
   * The doc to render
   */
  @Input() doc: DaffioDoc;

  sanitizedContent: SafeHtml;

  ngOnChanges() {
	  //It is necessary to bypass the default angular sanitization to keep id tags in the injected html. These id tags are used for fragment routing.
	  this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.doc.contents);
  }

  open() {
    this.store.dispatch(new ToggleSidebar(DAFFIO_DOCS_PACKAGES_CONTENT_SIDEBAR_KIND));
  }
}
