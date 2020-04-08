import { Component, OnInit } from '@angular/core';

import { DaffNavigationTree, DaffNavigationFacade, DaffNavigationLoad } from '@daffodil/navigation';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromDemoSidebar from '../../reducers/index';
import { CloseSidebar } from '../../actions/sidebar.actions';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarContainer implements OnInit {
  faTimes = faTimes;
  tree$: Observable<DaffNavigationTree>;
  treeLoading$: Observable<boolean>;
  treeErrors$: Observable<string[]>;

  constructor(
    private store: Store<fromDemoSidebar.State>,
    private navigationFacade: DaffNavigationFacade<DaffNavigationTree>
    ) {}

  ngOnInit() {
    this.tree$ = this.navigationFacade.tree$;
    this.treeLoading$ = this.navigationFacade.loading$;
    this.treeErrors$ = this.navigationFacade.errors$;
    this.navigationFacade.dispatch(new DaffNavigationLoad('2'));
  }

  onClose() {
    this.store.dispatch(new CloseSidebar);
  }
}
