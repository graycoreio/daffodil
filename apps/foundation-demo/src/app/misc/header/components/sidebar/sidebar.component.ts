import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToggleShowSidebar } from '../../actions/sidebar.actions';
import * as fromFoundationHeader from '../../reducers';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class SidebarComponent {

  @Input() showSidebar: boolean;

  constructor(
    private store: Store<fromFoundationHeader.State>
  ) { }

  toggleShowSidebar() {
    this.store.dispatch(new ToggleShowSidebar());
  }

  onClick(event) {
    if(this.showSidebar && !this.isSidebarElement(event)) {
      this.toggleShowSidebar();
    }
  }

  private isSidebarElement(event) {
    return event.path[0].classList[0].includes('sidebar');
  }
}
