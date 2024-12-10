import { AsyncPipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffDocsApiNavList } from '@daffodil/docs-utils';

import { useDaffioNavList } from '../../composables/nav-index';
import { DaffioApiNavListComponent } from '../components/nav-list/nav-list.component';

@Component({
  template: `
    <daffio-api-nav-list [navList]="list$ | async"></daffio-api-nav-list>
  `,
  standalone: true,
  imports: [
    DaffioApiNavListComponent,
    AsyncPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioApiNavListSidebarContainer {
  list$ = useDaffioNavList<DaffDocsApiNavList>().list;
}
