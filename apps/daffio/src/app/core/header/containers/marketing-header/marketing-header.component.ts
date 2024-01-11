import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { DaffSidebarViewportNavDirective } from '@daffodil/design/sidebar';

import { ToggleSidebar } from '../../../../core/sidebar/actions/sidebar.actions';

@Component({
  selector: 'daffio-marketing-header-container',
  templateUrl: './marketing-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DaffSidebarViewportNavDirective,
      useValue: {},
    },
  ],
})
export class DaffioMarketingHeaderContainer {
  faBars = faBars;

  links: any[] = [
    { path: '/api', title: 'Docs' },
    { path: '/why-pwa', title: 'Why PWA' },
  ];

  constructor(private store: Store<any>) { }

  openSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }

  get height() {
    return 64;
  }
}
