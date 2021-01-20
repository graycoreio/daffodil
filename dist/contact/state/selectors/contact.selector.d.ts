import { MemoizedSelector } from '@ngrx/store';
import { DaffContactState } from '../reducers/contact.reducer';
export interface DaffContactFeatureState {
    contact: DaffContactState;
}
export declare const selectContactFeatureState: MemoizedSelector<DaffContactFeatureState, DaffContactState>;
export declare const selectDaffContactLoading: MemoizedSelector<DaffContactFeatureState, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const selectDaffContactSuccess: MemoizedSelector<DaffContactFeatureState, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const selectDaffContactError: MemoizedSelector<DaffContactFeatureState, string[], import("@ngrx/store").DefaultProjectorFn<string[]>>;
