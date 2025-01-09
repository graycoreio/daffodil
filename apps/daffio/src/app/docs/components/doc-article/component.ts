import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  DaffBreadcrumb,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioSidebarService } from '../../../core/sidebar/services/sidebar.service';
import { DAFFIO_DOCS_LIST_SIDEBAR_ID } from '../../containers/docs-list/sidebar.provider';

@Component({
  selector: 'daffio-doc-article',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocArticleComponent {
  faBars = faBars;

  constructor(
    private sidebarService: DaffioSidebarService,
  ) {}

  @Input() toc?: DaffDocTableOfContents;
  @Input() breadcrumbs: Array<DaffBreadcrumb> = [];

  open() {
    this.sidebarService.open(DAFFIO_DOCS_LIST_SIDEBAR_ID);
  }
}
