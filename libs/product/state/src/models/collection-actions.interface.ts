import { Action } from '@ngrx/store';

import {
  DaffProductCollectionApplyFilters,
  DaffProductCollectionChangeCurrentPage,
  DaffProductCollectionChangePageSize,
  DaffProductCollectionChangeSortingOption,
  DaffProductCollectionClearFilters,
  DaffProductCollectionRemoveFilters,
  DaffProductCollectionReplaceFilters,
  DaffProductCollectionToggleFilter,
} from '../actions/public_api';

/**
 * A collection of the product collection action types.
 */
export interface DaffProductCollectionActionKinds {
  replaceFilters: DaffProductCollectionReplaceFilters;
  applyFilters: DaffProductCollectionApplyFilters;
  removeFilters: DaffProductCollectionRemoveFilters;
  clearFilters: DaffProductCollectionClearFilters;
  toggleFilter: DaffProductCollectionToggleFilter;
  changeSize: DaffProductCollectionChangePageSize;
  changePage: DaffProductCollectionChangeCurrentPage;
  changeSort: DaffProductCollectionChangeSortingOption;
  success: Action;
  failure: Action;
  load: Action;
};

/**
 * A union of all the product collection action types.
 */
export type DaffProductCollectionActions<T extends DaffProductCollectionActionKinds = DaffProductCollectionActionKinds> =
  | T['replaceFilters']
  | T['applyFilters']
  | T['removeFilters']
  | T['clearFilters']
  | T['toggleFilter']
  | T['changeSize']
  | T['changePage']
  | T['changeSort']
  | T['success']
  | T['failure']
  | T['load'];
