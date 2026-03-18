import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {
  switchMap,
  combineLatest,
  map,
  take,
  catchError,
  of,
} from 'rxjs';

import {
  daffUriTruncateLeadingSlash,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';
import {
  DaffApiDoc,
  daffDocsApiArrayToDict,
  DaffPackageGuideDoc,
} from '@daffodil/docs-utils';

import { DaffioDocsService } from '../../services/docs.service';

export const daffioDocsDesignComponentDocResolver: ResolveFn<DaffPackageGuideDoc> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const docService = inject(DaffioDocsService);
  const router = inject(Router);

  return docService
  //remove any route fragment and initial slash from the route.
    .get<DaffPackageGuideDoc>(daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(state.url)))
    .pipe(
      switchMap((packageDoc) =>
        combineLatest(packageDoc.symbols.map((d) => docService.get<DaffApiDoc>(d))).pipe(
          map((apiDocs) => ({
            ...packageDoc,
            api: daffDocsApiArrayToDict(apiDocs),
          })),
        ),
      ),
      take(1),
      catchError((err) => of(new RedirectCommand(router.parseUrl('/404'), { skipLocationChange: true }))),
    );
};
