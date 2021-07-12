import { Injectable } from '@angular/core';
import {
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

import { DaffioApiReference } from '../models/api-reference';
import { DaffioApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DaffioApiListResolver implements Resolve<DaffioApiReference> {

  constructor(private apiService: DaffioApiService, private router: Router) { }

  resolve(): Observable<any> | Promise<any> | any {
    return this.apiService
      .list()
      .pipe(
        take(1),
        catchError(() => {
          this.router.navigate(['/404']);
          return EMPTY;
        }),
      );
  }
}
