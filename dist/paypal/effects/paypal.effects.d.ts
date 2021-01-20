import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DaffPaypalServiceInterface } from '../drivers/interfaces/paypal-service.interface';
import { DaffPaypalTokenRequest } from '../models/paypal-token-request';
import { DaffPaypalTokenResponse } from '../models/paypal-token-response';
export declare class DaffPaypalEffects<T extends DaffPaypalTokenRequest, V extends DaffPaypalTokenResponse> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffPaypalServiceInterface<T, V>);
    generatePaypalExpressToken$: Observable<Action>;
}
