import {
  Component,
  OnInit,
} from '@angular/core';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  ToggleSidebar,
  CloseSidebar,
  OpenSidebar,
  SetSidebarState,
} from '../../actions/sidebar.actions';
import * as fromDemoSidebar from '../../reducers/index';

@Component({
  selector: 'demo-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html',
  standalone: false,
})
export class SidebarViewportContainer implements OnInit {

  showSidebar$: Observable<boolean>;

  constructor(
    private store: Store<fromDemoSidebar.State>,
  ) { }

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(select(fromDemoSidebar.selectShowSidebar));
  }

  close() {
    this.store.dispatch(new CloseSidebar());
  }

  open() {
    this.store.dispatch(new OpenSidebar());
  }

  toggle() {
    this.store.dispatch(new ToggleSidebar());
  }

  setVisibility(state: boolean) {
    this.store.dispatch(new SetSidebarState(state));
  }
}
