import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  filter,
  map,
  Observable,
} from 'rxjs';

import { DaffDocsNavList } from '@daffodil/docs-utils';

export const useDaffioNavList = <T extends DaffDocsNavList = DaffDocsNavList>() => {
  const route = inject(ActivatedRoute);
  const list: Observable<T> = route.data.pipe(
    filter(Boolean),
    map((data) => data.index),
  );

  return {
    list,
  };
};
