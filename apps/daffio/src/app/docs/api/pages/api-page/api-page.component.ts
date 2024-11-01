import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffApiDoc } from '@daffodil/docs-utils';

interface ApiResolverData {
  doc: DaffApiDoc;
}

@Component({
  templateUrl: './api-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioApiPageComponent implements OnInit {

  doc$: Observable<DaffApiDoc>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.doc$ = this.route.data.pipe(map((data: ApiResolverData) => data.doc));
  }
}
