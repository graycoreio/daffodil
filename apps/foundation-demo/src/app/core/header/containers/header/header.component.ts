import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { OpenSidebar, ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';

@Component({
  selector: 'header-container',
  templateUrl: './header.component.html'
})
export class HeaderContainer {
  constructor(private store: Store<{}>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
