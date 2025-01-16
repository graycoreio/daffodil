import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import {
  DaffSidebarSide,
  DaffSidebarMode,
  DaffSidebarComponent,
} from '@daffodil/design/sidebar';
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
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  providers: [{ provide: DaffSidebarComponent, useExisting: forwardRef(() => SidebarContainer) }],
  standalone: false,
})
export class SidebarContainer implements OnInit {

  @Input() side: DaffSidebarSide;

  @Input() mode: DaffSidebarMode;

  @Input() open: boolean;

  @ViewChild(DaffSidebarComponent) sidebar: DaffSidebarComponent;

  get width() {
    return this.sidebar.width;
  }

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
    this.navigationFacade.dispatch(new DaffNavigationLoad());
  }

  onClose() {
    this.store.dispatch(new CloseSidebar());
  }
}
