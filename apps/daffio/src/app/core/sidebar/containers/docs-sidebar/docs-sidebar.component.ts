import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { LetDirective } from '@ngrx/component';
import {
  select,
  Store,
} from '@ngrx/store';
import {
  Observable,
  map,
} from 'rxjs';

import { DaffBreakpoints } from '@daffodil/design';
import { DaffRouterNamedViewOutletModule } from '@daffodil/router';

import { DaffioRouterNamedViewsEnum } from '../../../../named-views/models/named-views.enum';
import { DaffioDocsSidebarContentComponentModule } from '../../components/docs-sidebar-content/docs-sidebar-content.module';
import { selectSidebarKind } from '../../reducers';

export const DAFFIO_DOCS_CONTENT_SIDEBAR_KIND = 'content';

/**
 * @private
 * This component stores all of the sidebars within daff.io/docs
 */
@Component({
  selector: 'daffio-docs-sidebar-container',
  templateUrl: './docs-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    LetDirective,
    DaffRouterNamedViewOutletModule,
    DaffioDocsSidebarContentComponentModule,
  ],
})
export class DaffioDocsSidebarContainer implements OnInit {
  contentSidebarKind = DAFFIO_DOCS_CONTENT_SIDEBAR_KIND;
  readonly docsSidebarNamedView = DaffioRouterNamedViewsEnum.DOCS_SIDEBAR;

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
