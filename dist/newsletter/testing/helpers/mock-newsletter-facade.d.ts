import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { DaffNewsletterFacadeInterface } from '@daffodil/newsletter';
export declare class MockDaffNewsletterFacade implements DaffNewsletterFacadeInterface {
    success$: BehaviorSubject<boolean>;
    error$: BehaviorSubject<string>;
    loading$: BehaviorSubject<boolean>;
    dispatch(action: Action): void;
}
