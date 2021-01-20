import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffContactServiceInterface } from '@daffodil/contact/driver';
export declare class DaffContactEffects<T, V> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffContactServiceInterface<T, V>);
    trySubmission$: Observable<Action>;
    private submitContact;
}
