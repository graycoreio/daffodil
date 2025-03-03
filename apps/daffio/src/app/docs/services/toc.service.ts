import { Injectable } from '@angular/core';
import {
  map,
  switchMap,
} from 'rxjs';

import { DaffDoc } from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

@Injectable()
export class DaffioDocsTocService {
  toc$ = this.route.route$.pipe(
    switchMap((route) => route.data),
    map((data) => (<DaffDoc>data.doc)?.tableOfContents || []),
  );

  constructor(
    private route: DaffRouterActivatedRoute,
  ) {}
}
