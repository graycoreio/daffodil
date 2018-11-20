import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ToggleSidebar, CloseSidebar, OpenSidebar, SetSidebarState } from '../../actions/sidebar.actions';
import * as fromFoundationSidebar from '../../reducers/index';

@Component({
  selector: 'sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html'
})
export class SidebarViewportContainer {
  
  showSidebar$: Observable<boolean>;

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(select(fromFoundationSidebar.selectShowSidebar));
  }

  constructor(
    private store: Store<fromFoundationSidebar.State>
  ) { }

  close () {
    this.store.dispatch(new CloseSidebar);
  }

  open () {
    this.store.dispatch(new OpenSidebar);
  }

  toggle() {
    this.store.dispatch(new ToggleSidebar());
  }

  setVisibility(state: boolean) {
    this.store.dispatch(new SetSidebarState(state));
  }
}
