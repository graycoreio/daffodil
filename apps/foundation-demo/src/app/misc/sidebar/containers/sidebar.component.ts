import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ToggleShowSidebar } from '../actions/sidebar.actions';
import * as fromFoundationSidebar from '../reducers/index';

@Component({
  selector: '[sidebar-container]',
  template: '<ng-content></ng-content>',
  exportAs: 'SidebarContainer'
})
export class SidebarContainer {
  
  showSidebar$: Observable<boolean>;

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(
      select(fromFoundationSidebar.selectShowSidebar)
    );
  }

  constructor(
    private store: Store<fromFoundationSidebar.State>
  ) { }

  toggleShowSidebar() {
    this.store.dispatch(new ToggleShowSidebar());
  }
}
