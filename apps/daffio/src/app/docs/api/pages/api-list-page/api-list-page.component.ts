import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  map,
  Observable,
} from 'rxjs';

import { DaffDocsApiNavList } from '@daffodil/docs-utils';

@Component({
  selector: 'daffio-api-list-page',
  templateUrl: './api-list-page.component.html',
  styleUrls: ['./api-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioApiListPageComponent implements OnInit {
  /**
   * A list of references for API documents.
   */
  apiList$: Observable<DaffDocsApiNavList>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.apiList$ = this.route.data.pipe(
      map((data) => data.index),
    );
  }
}
