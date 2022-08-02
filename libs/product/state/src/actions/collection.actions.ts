import { Action } from '@ngrx/store';

import {
  DaffProductFilterRequest,
  DaffProductFilterToggleRequest,
} from '@daffodil/product';

/**
 * An action for replacing the filters for the product collection.
 * All existing filters will be removed and the specified filters will be applied.
 */
export interface DaffProductCollectionReplaceFilters extends Action {
  /**
   * Filters to be set on the product collection.
   */
  readonly filters: DaffProductFilterRequest[];
}

/**
 * An action for applying the specified filters for the product collection.
 */
export interface DaffProductCollectionApplyFilters extends Action {
  /**
   * Filters to be applied to the product collection.
   */
  readonly filters: DaffProductFilterRequest[];
}

/**
 * An action for removing the specified filters for the product collection.
 */
export interface DaffProductCollectionRemoveFilters extends Action {
  /**
   * Filters to be removed from the product collection.
   */
  readonly filters: DaffProductFilterRequest[];
}

/**
 * An action for removing all the filters for the product collection.
 */
export type DaffProductCollectionClearFilters = Action;

/**
 * An action for toggling a filters for the product collection.
 */
export interface DaffProductCollectionToggleFilter extends Action {
  /**
   * Filter to be toggled on the product collection.
   */
  readonly filter: DaffProductFilterToggleRequest;
}
