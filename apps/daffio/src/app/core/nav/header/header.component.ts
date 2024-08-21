import {
  AsyncPipe,
  NgFor,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  Observable,
  map,
} from 'rxjs';

import { DaffLogoModule } from '@daffodil/branding';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffRouterDataService } from '@daffodil/router';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DaffioHeaderComponentModule } from '../../header/components/header.module';
import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';
import { DaffioRouteWithNavLinks } from '../link/route.type';
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
    DaffLogoModule,
    DaffThemeSwitchButtonModule,
    NgFor,
    DaffButtonModule,
    FaIconComponent,
    AsyncPipe,
  ],
})
export class DaffioNavHeaderContainer implements OnInit {
  faBars = faBars;

  links$: Observable<Array<DaffioNavLink>>;

  constructor(
    private routerData: DaffRouterDataService<DaffioRouteWithNavLinks['data']>,
    // TODO: don't keep me in rebase
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.links$ = this.routerData.data$.pipe(
      map((data) => data.daffioNavLinks),
    );
  }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
