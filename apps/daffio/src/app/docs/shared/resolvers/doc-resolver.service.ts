import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  Router,
} from '@angular/router';
import {
  Observable,
  of,
  EMPTY,
} from 'rxjs';
import {
  take,
  mergeMap,
  catchError,
  tap,
} from 'rxjs/operators';

import { DaffioDoc } from '../models/doc';
import { DaffioGuideList } from '../models/guide-list';
import { DaffioDocService } from '../services/docs.service';

@Injectable({
  providedIn: 'root',
})
export class DocResolver<T extends DaffioDoc, V extends DaffioGuideList> implements Resolve<T> {

  constructor(private docService: DaffioDocService<T, V>, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    return this.docService
      .get(state.url.substring(1))
      .pipe(
        take(1),
        catchError(() => {
          this.router.navigate(['/404']);
          return EMPTY;
        }),
      );
  }
}
