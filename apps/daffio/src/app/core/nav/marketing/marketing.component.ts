import {
  AsyncPipe,
  NgComponentOutlet,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  Observable,
  map,
} from 'rxjs';

import {
  DAFF_BRANDING_CONSTANTS,
  DaffLogoModule,
} from '@daffodil/branding';
import {
  DaffButtonComponent,
  DaffIconButtonComponent,
} from '@daffodil/design/button';
import { DaffRouterDataService } from '@daffodil/router';
import { DaffSfThemeToggleComponent } from '@daffodil/storefront/theme-toggle';

import { DaffioHeaderComponent } from '../../header/components/header/header.component';
import { DaffioHeaderItemDirective } from '../../header/components/header-item/header-item.directive';
import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarService } from '../../sidebar/services/sidebar.service';
import { isComponent } from '../../utils/is-component';
import { DAFFIO_NAV_SIDEBAR_ID } from '../header/sidebar-id';
import { DaffioNavLink } from '../link/type';

@Component({
  selector: 'daffio-nav-marketing-container',
  templateUrl: './marketing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioHeaderComponent,
    DaffioHeaderItemDirective,
    RouterLink,
    DaffLogoModule,
    DaffButtonComponent,
    DaffIconButtonComponent,
    FaIconComponent,
    AsyncPipe,
    NgComponentOutlet,
    RouterLinkActive,
    DaffSfThemeToggleComponent,
  ],
})
export class DaffioMarketingNavContainer implements OnInit {
  readonly isComponent = isComponent;
  faBars = faBars;
  docsLink = DAFF_BRANDING_CONSTANTS.DOCS_URL;

  links$: Observable<Array<DaffioNavLink | Type<unknown>>>;

  constructor(
    private routerData: DaffRouterDataService<DaffioRoute['data']>,
    private sidebarService: DaffioSidebarService,
  ) {}

  ngOnInit(): void {
    this.links$ = this.routerData.data$.pipe(
      map((data) => data.daffioNavLinks),
    );
  }

  openSidebar() {
    this.sidebarService.open(DAFFIO_NAV_SIDEBAR_ID);
  }
}
