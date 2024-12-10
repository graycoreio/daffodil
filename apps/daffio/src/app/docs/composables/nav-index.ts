import { inject } from '@angular/core';
import {
  switchMap,
  filter,
  map,
  Observable,
} from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

export const useDaffioNavList = <T extends DaffDocsNavList = DaffDocsNavList>() => {
  const route = inject(DaffRouterActivatedRoute);
  const list: Observable<T> = route.route$.pipe(
    switchMap((r) => r.data),
    filter(Boolean),
    map((data) => data.index),
  );

  return {
    list,
  };
};
