import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { DaffioDoc } from 'apps/daffio/src/app/docs/models/doc';
import { DaffioDocsService } from 'apps/daffio/src/app/docs/services/docs.service';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffSidebarMode } from '@daffodil/design/sidebar';
import { DaffRouterNamedViewService } from '@daffodil/router';

import { DaffioGuideList } from '../../../../docs/models/guide-list';
import { DaffioRouterNamedViewsEnum } from '../../../../named-views/models/named-views.enum';
import {
  CloseSidebar,
  OpenSidebar,
  SetSidebarState,
} from '../../actions/sidebar.actions';
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
  sidebarContents$: Observable<DaffioGuideList>;
  mode$: Observable<DaffSidebarMode>;
  showSidebarHeader$: Observable<boolean>;
  showSidebarFooter$: Observable<boolean>;

  ngOnInit() {
    this.sidebarContents$ = this.docService.getGuideList();
    this.showSidebar$ = this.store.pipe(select(fromDaffioSidebar.selectShowSidebar));
    this.mode$ = this.store.pipe(select(fromDaffioSidebar.selectSidebarMode));
    this.showSidebarHeader$ = this.namedViewService.namedViews$.pipe(map((namedViews) => !!namedViews[this.sidebarHeaderNamedView]));
    this.showSidebarFooter$ = this.namedViewService.namedViews$.pipe(map((namedViews) => !!namedViews[this.sidebarFooterNamedView]));
  }

  constructor(
    private store: Store<fromDaffioSidebar.State>,
    private docService: DaffioDocsService<DaffioDoc, DaffioGuideList>,
    private namedViewService: DaffRouterNamedViewService) { }

  close() {
    this.store.dispatch(new CloseSidebar());
  }

  open() {
    this.store.dispatch(new OpenSidebar());
  }

  setVisibility(state: boolean) {
    this.store.dispatch(new SetSidebarState({ open: state }));
  }
}
