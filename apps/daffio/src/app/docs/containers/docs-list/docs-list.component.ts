import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { DaffRouterActivatedRoute } from '@daffodil/router';

import { DaffioDocsListComponent } from '../../components/docs-list/docs-list.component';
import { DaffioDocList } from '../../models/doc-list';

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
  docsList$: Observable<DaffioDocList>;

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
