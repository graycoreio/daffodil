import {
  Action,
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '../store/facade';
import { DaffOperationStateSelectors } from './selectors';
import { DaffOperationState } from './state';

/**
 * A facade for an operation state.
 */
export interface DaffOperationStateFacadeInterface<
  TState extends DaffOperationState = DaffOperationState
> extends DaffStoreFacade<Action> {
  /**
   * The loading state enum.
   */
  loadingState$: Observable<TState['loading']>;
  /**
   * Whether the operation state is in any of the loading states.
   */
  loading$: Observable<boolean>;
  /**
   * Whether the operation state is resolving.
   */
  resolving$: Observable<boolean>;
  /**
   * Whether the operation state is mutating.
   */
  mutating$: Observable<boolean>;
  /**
   * The errors in the operation state.
   */
  errors$: Observable<TState['errors']>;
  /**
   * Whether the operation state has any errors.
   * If so, it should be considered to be in an "error" state.
   */
  hasErrors$: Observable<boolean>;
}

/**
 * @inheritdoc
 */
export abstract class DaffOperationStateFacade<
  TRootState,
  TState extends DaffOperationState = DaffOperationState,
  TSelectors extends DaffOperationStateSelectors<TRootState, TState> = DaffOperationStateSelectors<TRootState, TState>
> implements DaffOperationStateFacadeInterface<TState> {
  loadingState$: Observable<TState['loading']>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  errors$: Observable<TState['errors']>;
  hasErrors$: Observable<boolean>;

  constructor(
    protected store: Store<TRootState>,
    protected selectors: TSelectors,
  ) {
    this.loadingState$ = this.store.pipe(select(this.selectors.selectLoadingState));
    this.loading$ = this.store.pipe(select(this.selectors.selectLoading));
    this.resolving$ = this.store.pipe(select(this.selectors.selectResolving));
    this.mutating$ = this.store.pipe(select(this.selectors.selectMutating));
    this.errors$ = this.store.pipe(select(this.selectors.selectErrors));
    this.hasErrors$ = this.store.pipe(select(this.selectors.selectHasErrors));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
