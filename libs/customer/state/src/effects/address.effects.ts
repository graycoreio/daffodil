import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
} from 'rxjs/operators';

import { DaffError } from '@daffodil/core';
import { ErrorTransformer } from '@daffodil/core/state';
import {
  DaffCustomerAddress,
  DAFF_CUSTOMER_ERROR_MATCHER,
} from '@daffodil/customer';
import {
  DaffCustomerAddressDriver,
  DaffCustomerAddressDriverInterface,
} from '@daffodil/customer/driver';

import {
  DaffCustomerAddressActionTypes,
  DaffCustomerAddressLoad,
  DaffCustomerAddressLoadSuccess,
  DaffCustomerAddressLoadFailure,
  DaffCustomerAddressUpdate,
  DaffCustomerAddressUpdateSuccess,
  DaffCustomerAddressUpdateFailure,
  DaffCustomerAddressAdd,
  DaffCustomerAddressAddFailure,
  DaffCustomerAddressAddSuccess,
  DaffCustomerAddressDelete,
  DaffCustomerAddressDeleteFailure,
  DaffCustomerAddressDeleteSuccess,
  DaffCustomerAddressList,
  DaffCustomerAddressListFailure,
  DaffCustomerAddressListSuccess,
} from '../actions/address.actions';

@Injectable()
export class DaffCustomerAddressEffects<
  T extends DaffCustomerAddress = DaffCustomerAddress,
> {
  constructor(
    private actions$: Actions,
    @Inject(DaffCustomerAddressDriver) private driver: DaffCustomerAddressDriverInterface<T>,
    @Inject(DAFF_CUSTOMER_ERROR_MATCHER) private errorMatcher: ErrorTransformer,
  ) {}

  list$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerAddressActionTypes.AddressListAction),
    switchMap((action: DaffCustomerAddressList) =>
      this.driver.list().pipe(
        map(resp => new DaffCustomerAddressListSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerAddressListFailure(this.errorMatcher(error)))),
      ),
    ),
  ));

  /**
   * An effect for loading a customer address.
   */
  get$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerAddressActionTypes.AddressLoadAction),
    switchMap((action: DaffCustomerAddressLoad) =>
      this.driver.get(action.addressId).pipe(
        map(resp => new DaffCustomerAddressLoadSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerAddressLoadFailure(this.errorMatcher(error), action.addressId))),
      ),
    ),
  ));

  /**
   * An effect for updating a customer address.
   */
  update$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerAddressActionTypes.AddressUpdateAction),
    switchMap((action: DaffCustomerAddressUpdate<T>) =>
      this.driver.update(action.address).pipe(
        map(resp => new DaffCustomerAddressUpdateSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerAddressUpdateFailure(this.errorMatcher(error), action.address.id))),
      ),
    ),
  ));

  /**
   * An effect for adding a new customer address.
   */
  add$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerAddressActionTypes.AddressAddAction),
    switchMap((action: DaffCustomerAddressAdd<T>) =>
      this.driver.add(action.address).pipe(
        map(resp => new DaffCustomerAddressAddSuccess<T>(resp)),
        catchError((error: DaffError) => of(new DaffCustomerAddressAddFailure(this.errorMatcher(error), action.placeholderId))),
      ),
    ),
  ));

  /**
   * An effect for adding a new customer address.
   */
  delete$ = createEffect(() => this.actions$.pipe(
    ofType(DaffCustomerAddressActionTypes.AddressDeleteAction),
    switchMap((action: DaffCustomerAddressDelete) =>
      this.driver.delete(action.addressId).pipe(
        map(resp => new DaffCustomerAddressDeleteSuccess(resp)),
        catchError((error: DaffError) => of(new DaffCustomerAddressDeleteFailure(this.errorMatcher(error), action.addressId))),
      ),
    ),
  ));
}
