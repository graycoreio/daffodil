import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CloseSidebar, OpenSidebar, SetSidebarState } from '../../actions/sidebar.actions';
import * as fromDaffioSidebar from '../../reducers/index';
import { DaffSidebarMode } from '@daffodil/design';
import { NavigationService } from '../../../navigation/navigation.service';
import { DaffioNavigationTree } from '../../../navigation/navigation-tree';

@Component({
  selector: 'daffio-sidebar-viewport-container',
  templateUrl: './sidebar-viewport.component.html',
  styleUrls: ['./sidebar-viewport.component.scss']
})
export class DaffioSidebarViewportContainer implements OnInit{
  
  showSidebar$: Observable<boolean>;
  mode$: Observable<DaffSidebarMode>;
  tree$: Observable<DaffioNavigationTree>;

  ngOnInit() {
    this.showSidebar$ = this.store.pipe(select(fromDaffioSidebar.selectShowSidebar));
    this.mode$ = this.store.pipe(select(fromDaffioSidebar.selectSidebarMode));
    this.tree$ = this.navigationService.getNavigation();
  }

  constructor(private store: Store<fromDaffioSidebar.State>, private navigationService: NavigationService) { }

  close () {
    this.store.dispatch(new CloseSidebar);
  }

  open () {
    this.store.dispatch(new OpenSidebar);
  }

  setVisibility(state: boolean) {
    this.store.dispatch(new SetSidebarState(state));
  }
}
