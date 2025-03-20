import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import {
  DaffBreadcrumb,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioSidebarService } from '../../../core/sidebar/services/sidebar.service';
import { DAFFIO_DOCS_LIST_SIDEBAR_ID } from '../../containers/docs-list/sidebar.provider';
import { DAFFIO_DOCS_TOC_SIDEBAR_ID } from '../../containers/toc-sidebar-content/sidebar.provider';
import { DaffioDocsTableOfContentsModule } from '../table-of-contents/table-of-contents.module';

@Component({
  selector: 'daffio-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BREADCRUMB_COMPONENTS,
    DAFF_ARTICLE_COMPONENTS,
    DaffioDocsTableOfContentsModule,
    FaIconComponent,
  ],
})
export class DaffioDocViewerComponent {
  faBars = faBars;
  faChevronRight = faChevronRight;

  constructor(
    private sidebarService: DaffioSidebarService,
  ) {}

  @Input() toc: DaffDocTableOfContents = [];
  @Input() breadcrumbs: Array<DaffBreadcrumb> = [];

  open() {
    this.sidebarService.open(DAFFIO_DOCS_LIST_SIDEBAR_ID);
  }

  openToc() {
    this.sidebarService.open(DAFFIO_DOCS_TOC_SIDEBAR_ID);
  }
}
