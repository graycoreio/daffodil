import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectSidebarKind } from '../../../core/sidebar/reducers';

@Component({
  selector: 'daffio-docs-packages-sidebar',
  templateUrl: './packages-sidebar.component.html',
  styleUrls: ['./packages-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsPackagesSidebarComponent implements OnInit {
  constructor(private store: Store) {}

  sidebarKind$: Observable<string | undefined>;

  ngOnInit() {
    this.sidebarKind$ = this.store.pipe(select(selectSidebarKind));
  }
}
