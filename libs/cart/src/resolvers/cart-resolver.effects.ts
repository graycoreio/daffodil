import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { 
	DaffCartActionTypes,
	DaffCartLoadSuccess, 
	DaffCartCreate, 
	DaffCartLoadFailure 
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartDriver, DaffCartServiceInterface } from '../drivers/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartNotFoundError } from '../errors/not-found';

/**
 * An effect for resolving the Cart. It will check local state for a cart id, and retrieve the cart if it exists. If a cart
 * of that id does not exist, it will create a new cart.
 */
@Injectable()
export class DaffCartResolverEffects<T extends DaffCart = DaffCart> {
	constructor(
		private actions$: Actions,
		private cartStorage: DaffCartStorageService,
		@Inject(DaffCartDriver) private driver: DaffCartServiceInterface<T>,
	) {}

	@Effect()
	onResolveCart$: Observable<Action> = this.actions$.pipe(
		ofType(DaffCartActionTypes.ResolveCartAction),
		map(() => this.cartStorage.getCartId()),
		switchMap(id => id ? of({ id }) : this.driver.create()),
		switchMap(({ id }) => this.driver.get(id)),
		switchMap(resp => {
			this.cartStorage.setCartId(String(resp.id))
			return [new DaffCartLoadSuccess(resp)]
		}),
		catchError(error => 
			error instanceof DaffCartNotFoundError ? 
				[new DaffCartCreate()] : 
				[new DaffCartLoadFailure('Cart loading has failed')]
		),
	);
}
