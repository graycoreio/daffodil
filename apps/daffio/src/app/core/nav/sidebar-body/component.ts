import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import {
  map,
  Observable,
} from 'rxjs';

import { DAFF_NAV_LIST_COMPONENTS } from '@daffodil/design/list';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioNavLinkDynamicComponent } from '../link/dynamic-component.type';
import { DaffioNavLinkComponent } from '../link/link.component';
import { DaffioRouteWithNavLinks } from '../link/route.type';
import { DaffioNavLink } from '../link/type';

@Component({
  selector: 'daffio-nav-links-sidebar-body',
  templateUrl: './component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    DAFF_NAV_LIST_COMPONENTS,
    DaffioNavLinkComponent,
  ],
})
export class DaffioNavSidebarBodyComponent implements OnInit {
  links$: Observable<Array<DaffioNavLink | Type<DaffioNavLinkDynamicComponent>>>;

  constructor(
    private routerData: DaffRouterDataService<DaffioRouteWithNavLinks['data']>,
  ) {}

  ngOnInit(): void {
    this.links$ = this.routerData.data$.pipe(
      map((data) => data.daffioNavLinks),
    );
  }
}
