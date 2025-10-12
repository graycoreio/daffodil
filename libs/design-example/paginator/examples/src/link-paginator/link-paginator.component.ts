import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Observable,
  map,
} from 'rxjs';

import { DAFF_PAGINATOR_COMPONENTS } from '@daffodil/design/paginator';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'link-paginator',
  templateUrl: './link-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_PAGINATOR_COMPONENTS,
    AsyncPipe,
  ],
})
export class LinkPaginatorComponent {
  numberOfPages = 15;
  // TODO: don't hardcode this, pass it in design land
  url = '/paginator';
  queryParam = 'currentPage';

  get currentPage$(): Observable<number> {
    return this.route.queryParamMap.pipe(
      map((qps) => Number(qps.get(this.queryParam))),
    );
  }

  constructor(
    private route: ActivatedRoute,
  ) {}
}
