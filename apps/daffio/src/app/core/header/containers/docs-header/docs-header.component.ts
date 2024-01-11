import {
  ChangeDetectionStrategy,
  Component,
  Injector,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { DaffSidebarViewportNavDirective } from '@daffodil/design/sidebar';

import { ToggleSidebar } from '../../../../core/sidebar/actions/sidebar.actions';

@Component({
  selector: 'daffio-docs-header-container',
  templateUrl: './docs-header.component.html',
  styles: [`
  :host {
    display: block;
    border-bottom: 1px solid black;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DaffSidebarViewportNavDirective,
      useValue: {},
    },
  ],
})
export class DaffioDocsHeaderContainer {
  faBars = faBars;

  links: any[] = [
    { path: '/api', title: 'API Index' },
  ];

  constructor(private store: Store<any>, private injector: Injector) { }

  openDocsSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }

  get height() {
    return 65;
  }
}
