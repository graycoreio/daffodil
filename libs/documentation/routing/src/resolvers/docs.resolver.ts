import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import {
  Observable,
  EMPTY,
} from 'rxjs';
import {
  take,
  catchError,
} from 'rxjs/operators';

import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import {
  DaffDoc,
  DaffDocsList,
} from '@daffodil/docs-utils';
import { DaffDocsAssetService } from '@daffodil/documentation';

export const daffDocsResolve = <T extends DaffDoc, V extends DaffDocsList = DaffDocsList>(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> => {
  const router = inject(Router);
  return inject<DaffDocsAssetService<T, V>>(DaffDocsAssetService)
  //remove any route fragment and initial slash from the route.
    .get(daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(state.url)))
    .pipe(
      take(1),
      catchError(() => {
        router.navigate(['/404'], { skipLocationChange: true });
        return EMPTY;
      }),
    );
};
