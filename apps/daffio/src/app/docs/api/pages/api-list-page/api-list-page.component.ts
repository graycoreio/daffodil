import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioDocsIndexService } from '../../../services/index.service';
import { DaffioApiReference } from '../../models/api-reference';

@Component({
  selector: '<daffio-api-list-page>',
  templateUrl: './api-list-page.component.html',
  styleUrls: ['./api-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioApiListPageComponent implements OnInit {
  /**
   * A list of references for API documents.
   */
  apiList$: Observable<DaffioApiReference>;

  constructor(
    private index: DaffioDocsIndexService<DaffioApiReference>,
  ) { }

  ngOnInit() {
    this.apiList$ = this.index.getList();
  }
}
