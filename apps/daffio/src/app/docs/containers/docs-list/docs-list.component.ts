import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioDocsListComponent } from '../../components/docs-list/docs-list.component';
import { useDaffioNavList } from '../../composables/nav-index';

@Component({
  selector: 'daffio-docs-list-container',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
})
export class DaffioDocsListContainer {
  docsList$ = useDaffioNavList().list;
}
