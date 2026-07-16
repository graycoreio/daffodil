import {
  Component,
  ChangeDetectionStrategy,
  Input,
  input,
  computed,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBars,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import {
  DAFF_MENU_COMPONENTS,
  DaffMenuService,
} from '@daffodil/design/menu';
import {
  DaffBreadcrumb,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioSidebarService } from '../../../core/sidebar/services/sidebar.service';
import { DAFFIO_DOCS_LIST_SIDEBAR_ID } from '../../containers/docs-list/sidebar.provider';
import { DaffioDocsScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
import { DaffioDocsTableOfContentsComponent } from '../table-of-contents/table-of-contents.component';

const GITHUB_LINK = 'https://github.com/graycoreio/daffodil/blob/develop';

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
    FaIconComponent,
    DaffioDocsScrollToTopComponent,
    DaffioDocsTableOfContentsComponent,
    DAFF_MENU_COMPONENTS,
  ],
  providers: [
    DaffMenuService,
  ],
})
export class DaffioDocViewerComponent {
  faBars = faBars;
  faChevronDown = faChevronDown;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  private sidebarService = inject(DaffioSidebarService);

  @Input() toc: DaffDocTableOfContents = [];
  @Input() breadcrumbs: Array<DaffBreadcrumb> = [];

  sourcePath = input.required<string>();

  readonly editLink = computed(() => `${GITHUB_LINK}${this.sourcePath()}`);

  open() {
    this.sidebarService.open(DAFFIO_DOCS_LIST_SIDEBAR_ID);
  }
}
