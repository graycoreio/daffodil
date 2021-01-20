import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { DaffPaypalFacadeInterface, DaffPaypalTokenResponse } from '@daffodil/paypal';
export declare class MockDaffPaypalFacade implements DaffPaypalFacadeInterface {
    loading$: BehaviorSubject<boolean>;
    paypalTokenResponse$: BehaviorSubject<DaffPaypalTokenResponse>;
    paypalToken$: BehaviorSubject<string>;
    paypalStartUrl$: BehaviorSubject<string>;
    paypalEditUrl$: BehaviorSubject<string>;
    error$: BehaviorSubject<string>;
    dispatch(action: Action): void;
}
