import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  Observable,
  map,
} from 'rxjs';

import { DaffLogoModule } from '@daffodil/branding';
import { DaffIconButtonComponent } from '@daffodil/design/button';
import { DaffRouterDataService } from '@daffodil/router';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DaffioHeaderComponent } from '../../header/components/header/header.component';
import { DaffioHeaderItemDirective } from '../../header/components/header-item/header-item.directive';
import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarService } from '../../sidebar/services/sidebar.service';
import { DAFFIO_NAV_SIDEBAR_ID } from '../header/sidebar-id';
import { DaffioNavLinkDynamicComponent } from '../link/dynamic-component.type';
import { DaffioNavLinkComponent } from '../link/link.component';
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
    DaffThemeSwitchButtonModule,
    DaffIconButtonComponent,
    FaIconComponent,
    AsyncPipe,
    DaffioNavLinkComponent,
  ],
})
export class DaffioDocsNavContainer implements OnInit {
  faBars = faBars;

  links$: Observable<Array<DaffioNavLink | Type<DaffioNavLinkDynamicComponent>>>;

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
