import { Action } from '@ngrx/store';

import {
  DaffProductFilterRequest,
  DaffProductFilterToggleRequest,
} from '@daffodil/product';

/**
 * The possible types of category page filter actions.
 */
export enum DaffCategoryPageFilterActionTypes {
  CategoryPageChangeFiltersAction = '[@daffodil/category] Category Page Change Filters Action',
  CategoryPageReplaceFiltersAction = '[@daffodil/category] Category Page Replace Filters Action',
  CategoryPageApplyFiltersAction = '[@daffodil/category] Category Page Apply Filters Action',
  CategoryPageRemoveFiltersAction = '[@daffodil/category] Category Page Remove Filters Action',
  CategoryPageClearFiltersAction = '[@daffodil/category] Category Page Clear Filters Action',
  CategoryPageToggleFilterAction = '[@daffodil/category] Category Page Toggle Filter Action'
}

/**
 * An action for changing the filters for the current category.
 *
 * @param filters - Filters to be changed on the current category.
 * @deprecated use {@link DaffCategoryPageReplaceFilters} or {@link DaffCategoryPageApplyFilters}
 */
export class DaffCategoryPageChangeFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) { }
}

/**
 * An action for replacing the filters for the current category.
 * All existing filters will be removed and the specified filters will be applied.
 *
 * @param filters - Filters to be set on the current category.
 */
export class DaffCategoryPageReplaceFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) { }
}

/**
 * An action for applying the specified filters for the current category.
 *
 * @param filters - Filters to be applied to the current category.
 */
export class DaffCategoryPageApplyFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) { }
}

/**
 * An action for removing the specified filters for the current category.
 *
 * @param filters - Filters to be removed from the current category.
 */
export class DaffCategoryPageRemoveFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction;

  constructor(public filters: DaffProductFilterRequest[]) { }
}

/**
 * An action for removing all the filters for the current category.
 */
export class DaffCategoryPageClearFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction;
}

/**
 * An action for toggling a filters for the current category.
 *
 * @param filter - Filter to be toggled on the current category.
 */
export class DaffCategoryPageToggleFilter implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction;

  constructor(public filter: DaffProductFilterToggleRequest) { }
}

export type DaffCategoryPageFilterActions =
  | DaffCategoryPageChangeFilters
  | DaffCategoryPageReplaceFilters
  | DaffCategoryPageApplyFilters
  | DaffCategoryPageRemoveFilters
  | DaffCategoryPageClearFilters
  | DaffCategoryPageToggleFilter;
