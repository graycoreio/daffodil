import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';

import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'demo-header-container',
  templateUrl: './header.component.html'
})
export class DemoHeaderContainer {
  faBars = faBars;
  faShoppingCart = faShoppingCart;
  
  constructor(private store: Store<{}>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
