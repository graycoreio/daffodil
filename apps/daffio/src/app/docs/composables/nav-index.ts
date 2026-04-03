import { inject } from '@angular/core';
import {
  filter,
  map,
  Observable,
} from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';
import { DaffRouterDataService } from '@daffodil/router';

export const useDaffioNavList = <T extends DaffDocsNavList = DaffDocsNavList>() => {
  const routerData = inject(DaffRouterDataService);
  const list: Observable<T> = routerData.data$.pipe(
    filter(Boolean),
    map((data) => data.index),
    filter(Boolean),
  );

  return {
    list,
  };
};
