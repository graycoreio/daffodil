import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import {
  combineLatest,
  map,
  Observable,
} from 'rxjs';

import {
  DaffSidebarMode,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';
import { DaffRouterNamedViewService } from '@daffodil/router';

import { DaffioRouterNamedViewsEnum } from '../../../../named-views/models/named-views.enum';
import { CloseSidebar } from '../../actions/sidebar.actions';
import * as fromDaffioSidebar from '../../reducers/index';

@Component({
  selector: 'daffio-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioSidebarViewportContainer implements OnInit {
  readonly sidebarHeaderNamedView = DaffioRouterNamedViewsEnum.SIDEBARHEADER;
  readonly sidebarContentNamedView = DaffioRouterNamedViewsEnum.SIDEBARCONTENT;
  readonly sidebarFooterNamedView = DaffioRouterNamedViewsEnum.SIDEBARFOOTER;

  showSidebar$: Observable<boolean>;
  mode$: Observable<DaffSidebarMode>;
  showSidebarHeader$: Observable<boolean>;
  showSidebarFooter$: Observable<boolean>;

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(select(fromDaffioSidebar.selectShowSidebar));
    this.mode$ = this.store.pipe(select(fromDaffioSidebar.selectSidebarMode));
    this.showSidebarHeader$ = combineLatest([
      this.namedViewService.namedViews$,
      this.mode$,
    ]).pipe(
      map(([namedViews, mode]) => !!namedViews[this.sidebarHeaderNamedView] && mode !== DaffSidebarModeEnum.SideFixed),
    );
    this.showSidebarFooter$ = combineLatest([
      this.namedViewService.namedViews$,
      this.mode$,
    ]).pipe(
      map(([namedViews, mode]) => !!namedViews[this.sidebarFooterNamedView] && mode !== DaffSidebarModeEnum.SideFixed),
    );
  }

  constructor(
    private store: Store<fromDaffioSidebar.State>,
    private namedViewService: DaffRouterNamedViewService,
  ) { }

  close() {
    this.store.dispatch(new CloseSidebar());
  }
}
