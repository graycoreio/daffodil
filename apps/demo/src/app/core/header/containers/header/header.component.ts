import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { DaffIconButtonComponent } from '@daffodil/design/button';

import { LogoComponent } from '../../../logo/logo.component';
import { ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';
import { DemoHeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'demo-header-container',
  templateUrl: './header.component.html',
  imports: [
    RouterModule,
    FaIconComponent,
    DaffIconButtonComponent,
    DemoHeaderComponent,
    LogoComponent,
  ],
})
export class DemoHeaderContainer {
  faBars = faBars;
  faShoppingCart = faShoppingCart;

  constructor(private store: Store<any>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
