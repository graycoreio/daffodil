import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ToggleShowSidebar } from '../../actions/sidebar.actions';
import * as fromFoundationHeader from '../../reducers';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
    let that = this;
    // setTimeout included to give the sidebar component time to determine the location of the click first.
    setTimeout(() => {
      that.store.dispatch(new ToggleShowSidebar());
    });
  }
}
