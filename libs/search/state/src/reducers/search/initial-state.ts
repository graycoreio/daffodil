import { DaffSearchReducerState } from './reducer.interface';

/**
 * The initial state for the main search state, see {@link DaffSearchReducerState}.
 */
export const daffSearchInitialState: DaffSearchReducerState = {
  loading: false,
  errors: [],
  results: {},
};
