import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daffio-header-container',
  templateUrl: './header.component.html'
})
export class DaffioHeaderContainer {
  faBars = faBars;
  
  links: any[] = [
    {path: '/docs/api', title: 'Docs'},
    {path: '/why-pwa', title: 'Why PWA'}
  ];
  
  constructor(private store: Store<{}>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
