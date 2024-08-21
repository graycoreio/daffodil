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
  styleUrls: ['./docs-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsHeaderContainer {
  faBars = faBars;

  links: any[] = [
    { path: '/docs/guides', title: 'Guides' },
    { path: '/docs/packages', title: 'Packages' },
    { path: '/docs/api', title: 'API Reference' },
  ];

  constructor(private store: Store<any>) { }

  openDocsSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
