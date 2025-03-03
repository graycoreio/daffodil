import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { DaffDoc } from '@daffodil/docs-utils';

@Injectable()
export class DaffioDocsTocService {
  toc$ = this.route.data.pipe(
    map((data: {doc?: DaffDoc}) => data.doc?.tableOfContents || []),
  );

  constructor(
    private route: ActivatedRoute,
  ) {}
}
