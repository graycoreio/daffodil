import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
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

import { daffUriTruncateQueryFragment } from '@daffodil/core/routing';

import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';
import { DaffioDocsService } from '../services/docs.service';

@Injectable({
  providedIn: 'root',
})
export class DocsResolver<T extends DaffioDoc, V extends DaffioGuideList> implements Resolve<T> {

  constructor(private docService: DaffioDocsService<T, V>, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    return this.docService
    //remove any route fragment and initial slash from the route.
      .get(daffUriTruncateQueryFragment(state.url))
      .pipe(
        take(1),
        catchError(() => {
          this.router.navigate(['/404']);
          return EMPTY;
        }),
      );
  }
}
