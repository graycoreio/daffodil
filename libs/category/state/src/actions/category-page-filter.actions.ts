import { Action } from '@ngrx/store';

import {
  DaffCategoryFilterRequest,
  DaffToggleCategoryFilterRequest,
} from '@daffodil/category';

export enum DaffCategoryPageFilterActionTypes {
  CategoryPageChangeFiltersAction = '[@daffodil/category] Category Page Change Filters Action',
  CategoryPageReplaceFiltersAction = '[@daffodil/category] Category Page Replace Filters Action',
  CategoryPageApplyFiltersAction = '[@daffodil/category] Category Page Apply Filters Action',
  CategoryPageRemoveFiltersAction = '[@daffodil/category] Category Page Remove Filters Action',
  CategoryPageClearFiltersAction = '[@daffodil/category] Category Page Clear Filters Action',
  CategoryPageToggleFilterAction = '[@daffodil/category] Category Page Toggle Filter Action'
}

/**
 * An action for changing the filters for the selected category.
 *
 * @param filters - Filters to be changed to the selected category.
 * @deprecated use {@link DaffCategoryPageReplaceFilters} or {@link DaffCategoryPageApplyFilters}
 */
export class DaffCategoryPageChangeFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction;

  constructor(public filters: DaffCategoryFilterRequest[]) { }
}

/**
 * An action for replacing the filters for the selected category.
 * All existing filters will be removed and the specified filters will be applied.
 *
 * @param filters - Filters to be set to the selected category.
 */
export class DaffCategoryPageReplaceFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageReplaceFiltersAction;

  constructor(public filters: DaffCategoryFilterRequest[]) { }
}

/**
 * An action for applying the specified filters for the selected category.
 *
 * @param filters - Filters to be applied to the selected category.
 */
export class DaffCategoryPageApplyFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageApplyFiltersAction;

  constructor(public filters: DaffCategoryFilterRequest[]) { }
}

/**
 * An action for removing the specified filters for the selected category.
 *
 * @param filters - Filters to be removed from the selected category.
 */
export class DaffCategoryPageRemoveFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageRemoveFiltersAction;

  constructor(public filters: DaffCategoryFilterRequest[]) { }
}

/**
 * An action for removing all the filters for the selected category.
 */
export class DaffCategoryPageClearFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageClearFiltersAction;
}

/**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggled on the selected category.
 */
export class DaffCategoryPageToggleFilter implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction;

  constructor(public filter: DaffToggleCategoryFilterRequest) { }
}

export type DaffCategoryPageFilterActions =
  | DaffCategoryPageChangeFilters
  | DaffCategoryPageReplaceFilters
  | DaffCategoryPageApplyFilters
  | DaffCategoryPageRemoveFilters
  | DaffCategoryPageClearFilters
  | DaffCategoryPageToggleFilter;
