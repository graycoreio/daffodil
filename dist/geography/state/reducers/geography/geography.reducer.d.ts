import { DaffGeographyReducerState } from './geography-state.interface';
import { DaffGeographyActions } from '../../actions/public_api';
import { DaffCountry } from '@daffodil/geography';
export declare function daffGeographyReducer<T extends DaffCountry>(state: DaffGeographyReducerState, action: DaffGeographyActions<T>): DaffGeographyReducerState;
