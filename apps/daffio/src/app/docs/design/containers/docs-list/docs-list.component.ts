import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  filter,
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { DaffDocsDesignGuideNavList } from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

import { DaffioDocsListComponent } from '../../../components/docs-list/docs-list.component';

@Component({
  selector: 'daffio-docs-design-list-container',
  templateUrl: './docs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
  ],
})
export class DaffioDocsDesignListContainer implements OnInit {
  docsList$: Observable<DaffDocsDesignGuideNavList>;

  constructor(
    private route: DaffRouterActivatedRoute,
  ) {}

  ngOnInit() {
    this.docsList$ = this.route.route$.pipe(
      switchMap((route) => route.data),
      filter(Boolean),
      map((data) => data.index),
    );
  }
}
