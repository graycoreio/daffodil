import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { DaffAcceptJsLoadingService, DaffAuthorizeNetTokenRequest } from '@daffodil/authorizenet';
import { DaffAuthorizeNetService } from '@daffodil/authorizenet/driver';
export declare class DaffAuthorizeNetEffects<T extends DaffAuthorizeNetTokenRequest = DaffAuthorizeNetTokenRequest> {
    private actions$;
    private driver;
    private authorizeNetPaymentId;
    private errorMatcher;
    private acceptJsLoadingService;
    constructor(actions$: Actions, driver: DaffAuthorizeNetService<T>, authorizeNetPaymentId: string, errorMatcher: Function, acceptJsLoadingService: DaffAcceptJsLoadingService);
    updatePayment$: Observable<any>;
    updatePaymentSuccessSubstream$: Observable<any>;
    updatePaymentFailureSubstream$: Observable<any>;
    loadAcceptJs$: (maxTries?: number, ms?: number) => Observable<any>;
}
