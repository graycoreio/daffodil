import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../../../core/sidebar/actions/sidebar.actions';

@Component({
  selector: 'daffio-marketing-header-container',
  templateUrl: './marketing-header.component.html',
  styleUrls: ['./marketing-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioMarketingHeaderContainer {
  faBars = faBars;

  links: any[] = [
    { path: '/why-pwa', title: 'Why PWA' },
    { path: '/api', title: 'Docs' },
  ];

  constructor(private store: Store<any>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
