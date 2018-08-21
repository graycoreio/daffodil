import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ToggleShowSidebar } from '../../actions/header.actions';
import * as fromFoundationHeader from '../../reducers';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showSidebar$: Observable<boolean>;

  constructor(
    private store: Store<fromFoundationHeader.State>
  ) { }

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(
      select(fromFoundationHeader.selectShowSidebar)
    );
  }

  toggleShowSidebar() {
    this.store.dispatch(new ToggleShowSidebar());
  }
}
