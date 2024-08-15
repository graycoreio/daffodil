import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  distinctUntilChanged,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';

import { DaffRouterActivatedRoute } from '@daffodil/router';

import { DaffioRoute } from '../../../core/router/route.type';
import { DaffioDocsListComponent } from '../../components/docs-list/docs-list.component';
import { DaffioDocList } from '../../models/doc-list';
import { DaffioDocsIndexService } from '../../services/index.service';

@Component({
  selector: 'daffio-docs-list-container',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
  providers: [
    DaffioDocsIndexService,
  ],
})
export class DaffioDocsListContainer implements OnInit {
  docsList$: Observable<DaffioDocList>;

  constructor(
    private route: DaffRouterActivatedRoute,
    private index: DaffioDocsIndexService,
  ) {}

  ngOnInit() {
    this.docsList$ = this.route.route$.pipe(
      switchMap((route) => route.data),
      map((data: DaffioRoute['data']) => data.docKind),
      distinctUntilChanged(),
      switchMap((kind) => this.index.getList(kind)),
    );
  }
}
