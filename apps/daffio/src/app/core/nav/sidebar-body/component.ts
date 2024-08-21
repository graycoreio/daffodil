import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffListModule } from '@daffodil/design/list';
import { DaffRouterDataService } from '@daffodil/router';

import { DaffioRouteWithNavLinks } from '../link/route.type';
import { DaffioNavLink } from '../link/type';

@Component({
  selector: 'daffio-nav-links-sidebar-body',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffListModule,
    RouterLink,
  ],
})
export class DaffioNavSidebarBodyComponent implements OnInit {
  links$: Observable<Array<DaffioNavLink>>;

  constructor(
    private routerData: DaffRouterDataService<DaffioRouteWithNavLinks['data']>,
  ) {}

  ngOnInit(): void {
    this.links$ = this.routerData.data$.pipe(
      map((data) => data.daffioNavLinks),
    );
  }
}
