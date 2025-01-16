import { Component } from '@angular/core';
import {
  faBars,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';


@Component({
  selector: 'demo-header-container',
  templateUrl: './header.component.html',
  standalone: false,
})
export class DemoHeaderContainer {
  faBars = faBars;
  faShoppingCart = faShoppingCart;

  constructor(private store: Store<any>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
