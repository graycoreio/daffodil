import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CloseSidebar, OpenSidebar, SetSidebarState } from '../../actions/sidebar.actions';
import * as fromDaffioSidebar from '../../reducers/index';
import { DaffSidebarMode } from '@daffodil/design';

@Component({
  selector: 'daffio-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html'
})
export class DaffioSidebarViewportContainer implements OnInit{
  
  showSidebar$: Observable<boolean>;
  mode$: Observable<DaffSidebarMode>;

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(select(fromDaffioSidebar.selectShowSidebar));
    this.mode$ = this.store.pipe(select(fromDaffioSidebar.selectSidebarMode));
  }

  constructor(private store: Store<fromDaffioSidebar.State>) { }

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
