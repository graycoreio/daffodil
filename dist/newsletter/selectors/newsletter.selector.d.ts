import { MemoizedSelector } from '@ngrx/store';
import { DaffNewsletterState } from '../reducers/newsletter.reducer';
export interface State {
    newsletter: DaffNewsletterState;
}
/**
 * Child key of feature state
 */
export declare const selectDaffNewsletterLoading: MemoizedSelector<State, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const selectDaffNewsletterError: MemoizedSelector<State, string, import("@ngrx/store").DefaultProjectorFn<string>>;
export declare const selectDaffNewsletterSuccess: MemoizedSelector<State, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
