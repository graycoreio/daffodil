import { Inject, Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { 
	DaffPaypalActionTypes, 
	DaffGeneratePaypalExpressToken, 
	DaffGeneratePaypalExpressTokenSuccess,
	DaffGeneratePaypalExpressTokenFailure 
} from '../actions/paypal.actions';
import { DaffPaypalServiceInterface } from '../drivers/interfaces/paypal-service.interface';
import { DaffPaypalDriver } from '../drivers/injection-tokens/paypal-driver.token';
import { DaffPaypalTokenRequest } from '../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';

@Injectable()
export class DaffPaypalEffects<T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse>{

  constructor(
    private actions$: Actions,
    @Inject(DaffPaypalDriver) private driver: DaffPaypalServiceInterface<T, V>) { }

  generatePaypalExpressToken$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DaffPaypalActionTypes.GeneratePaypalExpressTokenAction),
    switchMap((action: DaffGeneratePaypalExpressToken<T>) => {
			return this.driver.generateToken(action.payload).pipe(
				map((resp: V) => {
					return new DaffGeneratePaypalExpressTokenSuccess(resp);
				}),
				catchError(error => {
					return of(new DaffGeneratePaypalExpressTokenFailure('Failed to retrieve token'));
				})
			)
		})
	));
}