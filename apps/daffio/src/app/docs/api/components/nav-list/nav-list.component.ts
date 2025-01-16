import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';
import { DaffDocsApiNavList } from '@daffodil/docs-utils';

const DEFAULT_ROUTER_LINK_ACTIVE_CONFIG: RouterLinkActive['routerLinkActiveOptions'] = {
  exact: true,
};

@Component({
  selector: 'daffio-api-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    DAFF_LIST_COMPONENTS,
    RouterLinkActive,
  ],
})
export class DaffioApiNavListComponent {
  @Input() navList: DaffDocsApiNavList;

  readonly ROUTER_LINK_ACTIVE_CONFIG = DEFAULT_ROUTER_LINK_ACTIVE_CONFIG;
}
