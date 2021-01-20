import { MemoizedSelector } from '@ngrx/store';
import { DaffAuthFeatureState } from '../reducers/public_api';
import { DaffAuthToken } from '../models/auth-token';
/**
 * Feature State Selector
 */
export declare const getDaffAuthFeatureStateSelector: <T extends DaffAuthToken>() => MemoizedSelector<object, DaffAuthFeatureState<T>, import("@ngrx/store").DefaultProjectorFn<DaffAuthFeatureState<T>>>;
