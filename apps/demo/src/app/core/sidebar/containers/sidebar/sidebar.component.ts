import {
  Component,
  OnInit,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationFacade,
  DaffNavigationLoad,
} from '@daffodil/navigation/state';

import { CloseSidebar } from '../../actions/sidebar.actions';
import * as fromDemoSidebar from '../../reducers/index';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarContainer implements OnInit {
  faTimes = faTimes;
  tree$: Observable<DaffNavigationTree>;
  treeLoading$: Observable<boolean>;
  treeErrors$: Observable<DaffStateError[]>;

  constructor(
    private store: Store<fromDemoSidebar.State>,
    private navigationFacade: DaffNavigationFacade<DaffNavigationTree>,
  ) {}

  ngOnInit() {
    this.tree$ = this.navigationFacade.tree$;
    this.treeLoading$ = this.navigationFacade.loading$;
    this.treeErrors$ = this.navigationFacade.errors$;
    this.navigationFacade.dispatch(new DaffNavigationLoad('2'));
  }

  onClose() {
    this.store.dispatch(new CloseSidebar());
  }
}
