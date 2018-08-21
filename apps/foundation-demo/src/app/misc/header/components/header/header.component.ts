import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFoundationHeader from '../../reducers';
import { ToggleShowSidebar } from '../../actions/sidebar.actions';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private store: Store<fromFoundationHeader.State>
  ) { }

  toggleShowSidebar() {
    this.store.dispatch(new ToggleShowSidebar());
  }
}
