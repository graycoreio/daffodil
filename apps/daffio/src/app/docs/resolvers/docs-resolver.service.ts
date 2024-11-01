import { Injectable } from '@angular/core';
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
import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsService } from '../services/docs.service';

@Injectable({
  providedIn: 'root',
})
export class DocsResolver<T extends DaffDoc = DaffDoc>  {

  constructor(private docService: DaffioDocsService<T>, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    return this.docService
    //remove any route fragment and initial slash from the route.
      .get(daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(state.url)))
      .pipe(
        take(1),
        catchError(() => {
          this.router.navigate(['/404'], { skipLocationChange: true });
          return EMPTY;
        }),
      );
  }
}
