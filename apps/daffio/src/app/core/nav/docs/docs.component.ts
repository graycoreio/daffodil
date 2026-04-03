import { BreakpointObserver } from '@angular/cdk/layout';
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
  startWith,
} from 'rxjs';

import { DaffLogoModule } from '@daffodil/branding';
import { DaffBreakpoints } from '@daffodil/design';
import { DaffIconButtonComponent } from '@daffodil/design/button';
import { DaffRouterDataService } from '@daffodil/router';
import { DaffSfThemeToggleComponent } from '@daffodil/storefront/theme-toggle';

import { DaffioDocsSearchButtonComponent } from '../../../docs//search/components/search-button/search-button.component';
import { DaffioHeaderComponent } from '../../header/components/header/header.component';
import { DaffioHeaderItemDirective } from '../../header/components/header-item/header-item.directive';
import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarService } from '../../sidebar/services/sidebar.service';
import { isComponent } from '../../utils/is-component';
import { DAFFIO_NAV_SIDEBAR_ID } from '../header/sidebar-id';
import { DaffioNavLink } from '../link/type';


@Component({
  selector: 'daffio-docs-nav-container',
  templateUrl: './docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioHeaderComponent,
    DaffioHeaderItemDirective,
    RouterLink,
    DaffLogoModule,
    DaffIconButtonComponent,
    FaIconComponent,
    AsyncPipe,
    NgComponentOutlet,
    RouterLinkActive,
    DaffSfThemeToggleComponent,
    DaffioDocsSearchButtonComponent,
  ],
})
export class DaffioDocsNavContainer implements OnInit {
  readonly isComponent = isComponent;
  faBars = faBars;

  links$: Observable<Array<DaffioNavLink | Type<unknown>>>;
  isBigTablet$: Observable<boolean>;

  constructor(
    private routerData: DaffRouterDataService<DaffioRoute['data']>,
    private sidebarService: DaffioSidebarService,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.links$ = this.routerData.data$.pipe(
      map((data) => data.daffioNavLinks),
    );
    this.isBigTablet$ = this.breakpointObserver.observe(DaffBreakpoints.BIG_TABLET).pipe(
      startWith({ matches: true }),
      map((result) => result?.matches),
    );
  }

  openSidebar() {
    this.sidebarService.open(DAFFIO_NAV_SIDEBAR_ID);
  }
}
