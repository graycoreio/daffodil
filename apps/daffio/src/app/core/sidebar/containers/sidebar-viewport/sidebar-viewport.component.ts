import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ToggleSidebar, CloseSidebar, OpenSidebar, SetSidebarState } from '../../actions/sidebar.actions';
import * as fromDaffioSidebar from '../../reducers/index';

@Component({
  selector: 'daff-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html'
})
export class DaffSidebarViewportContainer {
  
  showSidebar$: Observable<boolean>;

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(
      select(fromDaffioSidebar.selectShowSidebar)
    );
  }

  constructor(
    private store: Store<fromDaffioSidebar.State>
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
