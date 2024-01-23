import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import {
  Observable,
  map,
} from 'rxjs';

import { DaffBreakpoints } from '@daffodil/design';

import { selectSidebarKind } from '../../../core/sidebar/reducers';

export const DAFFIO_DOCS_PACKAGES_CONTENT_SIDEBAR_KIND = 'content';

@Component({
  selector: 'daffio-docs-packages-sidebar',
  templateUrl: './packages-sidebar.component.html',
  styleUrls: ['./packages-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsPackagesSidebarComponent implements OnInit {
  contentSidebarKind = DAFFIO_DOCS_PACKAGES_CONTENT_SIDEBAR_KIND;

  constructor(
    private store: Store,
    private breakpointObserver: BreakpointObserver,
  ) {}

  sidebarKind$: Observable<string | undefined>;
  isBigTablet$: Observable<boolean>;

  ngOnInit() {
    this.isBigTablet$ = this.breakpointObserver.observe(DaffBreakpoints.BIG_TABLET).pipe(
      map(({ matches }) => matches),
    );
    this.sidebarKind$ = this.store.pipe(select(selectSidebarKind));
  }
}
