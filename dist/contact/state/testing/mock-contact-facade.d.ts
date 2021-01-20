import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { DaffContactFacadeInterface } from '@daffodil/contact/state';
export declare class MockDaffContactFacade implements DaffContactFacadeInterface {
    success$: BehaviorSubject<boolean>;
    error$: BehaviorSubject<string[]>;
    loading$: BehaviorSubject<boolean>;
    dispatch(action: Action): void;
}
