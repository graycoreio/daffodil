import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faBars,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffBreadcrumb,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioSidebarService } from '../../../core/sidebar/services/sidebar.service';
import { DAFFIO_DOCS_LIST_SIDEBAR_ID } from '../../containers/docs-list/sidebar.provider';
import { DAFFIO_DOCS_TOC_SIDEBAR_ID } from '../../containers/toc-sidebar-content/sidebar.provider';

@Component({
  selector: 'daffio-doc-article',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffioDocArticleComponent {
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
