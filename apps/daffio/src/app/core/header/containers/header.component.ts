import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../sidebar/actions/sidebar.actions';

@Component({
  selector: 'daffio-header-container',
  templateUrl: './header.component.html'
})
export class DaffioHeaderContainer {
  links: any[] = [
    {path: '/developers', title: 'Developers'},
    {path: '/solutions', title: 'Solutions'},
    {path: '/documentation', title: 'Documentation'},
    {path: '/support', title: 'Support'}
  ];
  
  constructor(private store: Store<{}>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
