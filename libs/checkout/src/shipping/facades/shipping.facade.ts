import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select, Action } from '@ngrx/store';

import { DaffStoreFacade, DaffAddress } from '@daffodil/core';

import { DaffShippingModule } from '../shipping.module';
import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
import { selectShippingAddress, selectShippingOptionId, selectIsShippingAddressValid } from '../selectors/shipping.selectors';

/**
 * A facade for accessing state for shipping information.
 */
@Injectable({
  providedIn: DaffShippingModule
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
   * @param action action to dispatch.
   */
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
