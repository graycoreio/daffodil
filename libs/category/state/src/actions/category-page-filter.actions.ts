import { Action } from '@ngrx/store';

import {
  DaffCategoryFilterRequest,
  DaffToggleCategoryFilterRequest,
} from '@daffodil/category';

export enum DaffCategoryPageFilterActionTypes {
  CategoryPageChangeFiltersAction = '[@daffodil/category] Category Page Change Filters Action',
  CategoryPageToggleFilterAction = '[@daffodil/category] Category Page Toggle Filter Action'
}

/**
 * An action for changing the filters for the selected category.
 *
 * @param filters - Filters to be applied to the selected category.
 */
export class DaffCategoryPageChangeFilters implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageChangeFiltersAction;

  constructor(public filters: DaffCategoryFilterRequest[]) { }
}

/**
 * An action for toggling a filters for the selected category.
 *
 * @param filter - Filter to be toggle on the selected category.
 */
export class DaffCategoryPageToggleFilter implements Action {
  readonly type = DaffCategoryPageFilterActionTypes.CategoryPageToggleFilterAction;

  constructor(public filter: DaffToggleCategoryFilterRequest) { }
}

export type DaffCategoryPageFilterActions =
  | DaffCategoryPageChangeFilters
  | DaffCategoryPageToggleFilter;
