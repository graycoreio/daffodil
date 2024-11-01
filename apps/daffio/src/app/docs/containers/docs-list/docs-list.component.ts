import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

import { DaffioDocsListComponent } from '../../components/docs-list/docs-list.component';

@Component({
  selector: 'daffio-docs-list-container',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
})
export class DaffioDocsListContainer implements OnInit {
  docsList$: Observable<DaffDocsNavList>;

  constructor(
    private route: DaffRouterActivatedRoute,
  ) {}

  ngOnInit() {
    this.docsList$ = this.route.route$.pipe(
      switchMap((route) => route.data),
      map((data) => data.index),
    );
  }
}
