import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';

@Component({
  selector: 'demo-header-container',
  templateUrl: './header.component.html'
})
export class DemoHeaderContainer {
  constructor(private store: Store<{}>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
