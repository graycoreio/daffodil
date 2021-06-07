import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';


@Component({
  selector: 'daffio-header-container',
  templateUrl: './header.component.html',
})
export class DaffioHeaderContainer {
  faBars = faBars;

  links: any[] = [
    { path: '/api', title: 'Docs' },
    { path: '/why-pwa', title: 'Why PWA' },
  ];

  constructor(private store: Store<any>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
