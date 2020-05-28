import { Injectable } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DaffCartActionTypes, DaffCartLoadSuccess } from '../../actions/public_api';

/**
 * This "resolver" isn't strictly an "angular resolver", because Daffodil isn't meant to touch actual routes for an app.
 * Instead, this service should be used in conjunction with an angular routing resolver to guard against routing to a 
 * certain page (usually the checkout page) when the cart is empty.
 */
@Injectable()
export class DaffEmptyCartResolver {
  constructor(private dispatcher: ActionsSubject) {}

  isCartEmpty(): Observable<boolean> {
    return this.dispatcher.pipe(
      filter(action => action.type === DaffCartActionTypes.CartLoadSuccessAction),
			map((action: DaffCartLoadSuccess) => !action.payload || !action.payload.items ?
				true :
				action.payload.items.length === 0
			)
    );
  }
}
