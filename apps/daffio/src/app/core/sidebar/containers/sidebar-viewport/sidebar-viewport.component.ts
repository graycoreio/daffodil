import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CloseSidebar, OpenSidebar, SetSidebarState } from '../../actions/sidebar.actions';
import * as fromDaffioSidebar from '../../reducers/index';
import { DaffSidebarMode } from '@daffodil/design';
import { DaffioGuideList } from '../../../../docs/shared/models/guide-list';
import { DaffioDocService } from '../../../../docs/shared/services/docs.service';
import { DaffioDoc } from 'apps/daffio/src/app/docs/shared/models/doc';

@Component({
  selector: 'daffio-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html'
})
export class DaffioSidebarViewportContainer implements OnInit{
  
  showSidebar$: Observable<boolean>;
  sidebarContents$: Observable<DaffioGuideList>;
  mode$: Observable<DaffSidebarMode>;

  ngOnInit() {
    this.sidebarContents$ = this.docService.getGuideList();
    this.showSidebar$ = this.store.pipe(select(fromDaffioSidebar.selectShowSidebar));
    this.mode$ = this.store.pipe(select(fromDaffioSidebar.selectSidebarMode));
  }

  constructor(private store: Store<fromDaffioSidebar.State>,
    private docService: DaffioDocService<DaffioDoc, DaffioGuideList>) { }

  close () {
    this.store.dispatch(new CloseSidebar);
  }

  open () {
    this.store.dispatch(new OpenSidebar);
  }

  setVisibility(state: boolean) {
    this.store.dispatch(new SetSidebarState(state));
  }
}
