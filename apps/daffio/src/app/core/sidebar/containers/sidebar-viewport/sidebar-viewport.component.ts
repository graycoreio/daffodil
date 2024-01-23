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
  map,
  Observable,
} from 'rxjs';

import { DaffSidebarMode } from '@daffodil/design/sidebar';
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
    this.showSidebarHeader$ = this.namedViewService.namedViews$.pipe(map((namedViews) => !!namedViews[this.sidebarHeaderNamedView]));
    this.showSidebarFooter$ = this.namedViewService.namedViews$.pipe(map((namedViews) => !!namedViews[this.sidebarFooterNamedView]));
  }

  constructor(
    private store: Store<fromDaffioSidebar.State>,
    private namedViewService: DaffRouterNamedViewService) { }

  close() {
    this.store.dispatch(new CloseSidebar());
  }
}
