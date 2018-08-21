import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromFoundationHeader from '../../reducers';
import { ToggleShowSidebar } from '../../actions/header.actions';

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
    this.store.dispatch(new ToggleShowSidebar());
  }
}
