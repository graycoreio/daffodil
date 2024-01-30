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

import { DaffioDoc } from '../models/doc';
import { DaffioPackagesList } from '../models/packages-list';
import { DaffioDocsService } from '../services/docs.service';

@Injectable({
  providedIn: 'root',
})
export class DocsResolver<T extends DaffioDoc, V extends DaffioPackagesList>  {

  constructor(private docService: DaffioDocsService<T, V>, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    return this.docService
    //remove any route fragment and initial slash from the route.
      .get(daffUriTruncateLeadingSlash(daffUriTruncateQueryFragment(state.url)))
      .pipe(
        take(1),
        catchError(() => {
          this.router.navigate(['/404']);
          return EMPTY;
        }),
      );
  }
}
