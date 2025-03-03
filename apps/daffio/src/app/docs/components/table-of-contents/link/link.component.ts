
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { DaffDocTableOfContents } from '@daffodil/docs-utils';

const DEFAULT_ROUTER_LINK_ACTIVE_CONFIG: RouterLinkActive['routerLinkActiveOptions'] = {
  exact: true,
};

@Component({
  selector: 'daffio-docs-table-of-contents-link',
  templateUrl: './link.component.html',
  styleUrl: 'link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
})
export class DaffioDocsTableOfContentsLinkComponent {
  readonly ROUTER_LINK_ACTIVE_CONFIG = DEFAULT_ROUTER_LINK_ACTIVE_CONFIG;

  /**
   * The doc to render
   */
  @Input() tableOfContents: DaffDocTableOfContents;
}
