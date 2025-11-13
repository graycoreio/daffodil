import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  filter,
  map,
  Observable,
} from 'rxjs';

import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DaffDocsApiNavList } from '@daffodil/docs-utils';

import { DaffioApiListComponent } from '../../components/api-list/api-list.component';

@Component({
  selector: 'daffio-api-list-page',
  templateUrl: './api-list-page.component.html',
  styleUrls: ['./api-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    DaffioApiListComponent,
    AsyncPipe,
  ],
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
      filter(Boolean),
      map((data) => data.index),
    );
  }
}
