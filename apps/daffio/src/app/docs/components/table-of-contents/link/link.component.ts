
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { DaffDocTableOfContents } from '@daffodil/docs-utils';

import { DaffioActiveHeaderService } from '../../../../core/dynamic-fragment/service';

const DEFAULT_ROUTER_LINK_ACTIVE_CONFIG: RouterLinkActive['routerLinkActiveOptions'] = {
  paths: 'exact',
  queryParams: 'exact',
  fragment: 'exact',
  matrixParams: 'ignored',
};

@Component({
  selector: 'daffio-docs-table-of-contents-link',
  templateUrl: './link.component.html',
  styleUrl: 'link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LetDirective,
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
  @Input() @HostBinding('class.in-sidebar') inSidebar = false;

  constructor(
    public activeHeaderService: DaffioActiveHeaderService,
  ) {}
}
