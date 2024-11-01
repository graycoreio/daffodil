import {
  AsyncPipe,
  NgFor,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
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

import { DaffLogoModule } from '@daffodil/branding';
import {
  DaffButtonComponent,
  DaffIconButtonComponent,
} from '@daffodil/design/button';
import { DaffRouterDataService } from '@daffodil/router';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DAFFIO_NAV_SIDEBAR_ID } from './sidebar-id';
import { DaffioHeaderComponentModule } from '../../header/components/header.module';
import { DaffioRoute } from '../../router/route.type';
import { DaffioSidebarService } from '../../sidebar/services/sidebar.service';
import { DaffioNavLink } from '../link/type';

@Component({
  selector: 'daffio-nav-header-container',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioHeaderComponentModule,
    RouterLink,
    RouterLinkActive,
    DaffLogoModule,
    DaffThemeSwitchButtonModule,
    NgFor,
    DaffButtonComponent,
    DaffIconButtonComponent,
    FaIconComponent,
    AsyncPipe,
  ],
})
export class DaffioNavHeaderContainer implements OnInit {
  faBars = faBars;

  links$: Observable<Array<DaffioNavLink>>;

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
