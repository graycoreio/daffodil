import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffProductCustomAttributeDriver,
  DaffProductCustomAttributeServiceInterface,
} from '@daffodil/product/driver';

import {
  DaffProductCustomAttributesActionTypes,
  DaffProductCustomAttributesListFailure,
  DaffProductCustomAttributesListSuccess,
} from './actions';
import { DAFF_PRODUCT_ERROR_MATCHER } from '../injection-tokens/public_api';

@Injectable()
export class DaffProductCustomAttributesEffects {
  constructor(
    private actions$: Actions,
    @Inject(DaffProductCustomAttributeDriver) private driver: DaffProductCustomAttributeServiceInterface,
    @Inject(DAFF_PRODUCT_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  /**
   * An effect for listing the product custom attributes.
   */
  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffProductCustomAttributesActionTypes.List),
    switchMap(() =>
      this.driver.list().pipe(
        map(resp => new DaffProductCustomAttributesListSuccess(resp)),
        catchError((error: DaffError) => of(new DaffProductCustomAttributesListFailure(this.errorMatcher(error)))),
      ),
    ),
  ));
}
