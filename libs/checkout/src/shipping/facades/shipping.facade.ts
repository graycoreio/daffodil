import { Injectable } from '@angular/core';
import {
  Store,
  select,
  Action,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffAddress } from '@daffodil/core';
import { DaffStoreFacade } from '@daffodil/core/state';

import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
import {
  selectShippingAddress,
  selectShippingOptionId,
  selectIsShippingAddressValid,
} from '../selectors/shipping.selectors';
import { DaffShippingModule } from '../shipping.module';

/**
 * A facade for accessing state for shipping information.
 */
@Injectable({
  providedIn: DaffShippingModule,
})
export class DaffShippingFacade implements DaffStoreFacade<Action> {
  /**
   * The shipping address for the customer.
   */
  shippingAddress$: Observable<DaffAddress>;
  /**
   * The selected shipping option id.
   */
  selectedShippingOptionId$: Observable<string>;
  /**
   * Is the shipping address valid.
   */
  isShippingAddressValid$: Observable<boolean>;

  constructor(private store: Store<DaffShippingReducersState>) {
    this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
    this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
    this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
  }

  /**
   * Dispatches the given action.
   *
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
