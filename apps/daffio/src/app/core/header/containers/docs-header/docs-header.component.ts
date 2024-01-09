import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../../../core/sidebar/actions/sidebar.actions';

@Component({
  selector: 'daffio-docs-header-container',
  templateUrl: './docs-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsHeaderContainer {
  faBars = faBars;

  links: any[] = [
    { path: '/api', title: 'API Index' },
  ];

  constructor(private store: Store<any>) { }

  openDocsSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
