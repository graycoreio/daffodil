import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { CloseSidebar } from '../../actions/sidebar.actions';
import * as fromDaffioSidebar from '../../reducers/index';

@Component({
  selector: 'daffio-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioSidebarHeaderComponent {
  faTimes = faTimes;

  constructor(private store: Store<fromDaffioSidebar.State>){}

  close() {
    this.store.dispatch(new CloseSidebar());
  }
}
