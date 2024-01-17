import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { CloseSidebar } from '../../../actions/sidebar.actions';
import * as fromDaffioSidebar from '../../../reducers/index';

@Component({
  selector: 'daffio-marketing-sidebar-header',
  templateUrl: './marketing-sidebar-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioMarketingSidebarHeaderComponent {
  faTimes = faTimes;

  constructor(private store: Store<fromDaffioSidebar.State>){}

  close() {
    this.store.dispatch(new CloseSidebar());
  }
}
