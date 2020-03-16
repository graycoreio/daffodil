import { DaffCategoryActionTypes, DaffCategoryActions } from '../../actions/category.actions';
import { CategoryReducerState } from './category-reducer-state.interface';
import { DaffToggledCategoryFilterRequest, DaffCategoryFilterRequest, DaffCategoryFilterEqualRequest } from '../../models/requests/filter-request';
import { DaffCategoryFilterType } from '../../models/category-filter';

const initialState: CategoryReducerState = {
  categoryPageConfigurationState: {
    id: null,
    applied_filters: [],
    applied_sort_option: null,
    applied_sort_direction: null,
    current_page: null,
    page_size: null,
    total_pages: null,
    filters: [],
		sort_options: [],
		total_products: null,
		product_ids: []
  },
	categoryLoading: false,
	productsLoading: false,
  errors: []
};

export function categoryReducer(state = initialState, action: DaffCategoryActions): CategoryReducerState {
  switch (action.type) {
    // This reducer must assume the call will be successful, and immediately set the applied filters to state, because the 
    // GetCategory magento call doesn't return currently applied filters. If there is a bug where the wrong filters are somehow
    // applied by Magento, then this will result in a bug. Until Magento returns applied filters with a category call, this is
    // unavoidable.
    case DaffCategoryActionTypes.CategoryLoadAction:
			if(!action.request.applied_filters) action.request.applied_filters = [];
      return { 
        ...state, 
				categoryLoading: true,
				productsLoading: true,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          ...action.request
        }
			};
		case DaffCategoryActionTypes.ChangeCategoryPageSizeAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					page_size: action.pageSize
				}
			};
		case DaffCategoryActionTypes.ChangeCategoryCurrentPageAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					current_page: action.currentPage
				}
			};
		case DaffCategoryActionTypes.ChangeCategorySortingOptionAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					applied_sort_option: action.sort.option,
					applied_sort_direction: action.sort.direction
				}
			};
		case DaffCategoryActionTypes.ChangeCategoryFiltersAction:
			return { 
				...state, 
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					applied_filters: action.filters
				}
			};
		case DaffCategoryActionTypes.ToggleCategoryFilterAction:
			return {
				...state,
				productsLoading: true,
				categoryPageConfigurationState: {
					...state.categoryPageConfigurationState,
					applied_filters: toggleCategoryFilter(action.filter, state.categoryPageConfigurationState.applied_filters)
				}
			}
    // This reducer cannot spread over state, because this would wipe out the applied filters on state. Applied filters are not
    // set here for reasons stated above.
    case DaffCategoryActionTypes.CategoryLoadSuccessAction:
      return { 
        ...state, 
				categoryLoading: false,
				productsLoading: false,
        categoryPageConfigurationState: {
          ...state.categoryPageConfigurationState,
          id: action.response.categoryPageConfigurationState.id,
          current_page: action.response.categoryPageConfigurationState.current_page,
          page_size: action.response.categoryPageConfigurationState.page_size,
          filters: action.response.categoryPageConfigurationState.filters,
          sort_options: action.response.categoryPageConfigurationState.sort_options,
					total_pages: action.response.categoryPageConfigurationState.total_pages,
					total_products: action.response.categoryPageConfigurationState.total_products,
					product_ids: action.response.categoryPageConfigurationState.product_ids
        }
      };
    case DaffCategoryActionTypes.CategoryLoadFailureAction:
      return {
        ...state,
				categoryLoading: false,
				productsLoading: false,
        errors: [action.errorMessage]
      };
    default:
      return state;
  }
}

function toggleCategoryFilter(
	toggledFilter: DaffToggledCategoryFilterRequest, 
	appliedFilters: DaffCategoryFilterRequest[]
): DaffCategoryFilterRequest[] {
	return isFilterApplied(toggledFilter, appliedFilters)
		? removeFilter(toggledFilter, appliedFilters)
		: addFilter(toggledFilter, appliedFilters)
}

function isFilterApplied(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
	switch(toggledFilter.type) {
		case(DaffCategoryFilterType.Match) :
			return isMatchFilterApplied(toggledFilter, appliedFilters);
		default :
			return isEqualOrRangeFilterApplied(toggledFilter, appliedFilters);
	}
}

function isMatchFilterApplied(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
	return !!appliedFilters.filter(filter => filter.name === toggledFilter.name).length;
}

function isEqualOrRangeFilterApplied(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
	const filterMatchingName = appliedFilters.filter(filter => filter.name === toggledFilter.name);
	if(filterMatchingName.length) {
		return !!(<DaffCategoryFilterEqualRequest>filterMatchingName[0]).value.filter(filterValue => filterValue === toggledFilter.value).length;
	} else return false;
}

function removeFilter(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
	: DaffCategoryFilterRequest[] {
	switch(toggledFilter.type) {
		case(DaffCategoryFilterType.Match) :
			return removeMatchFilter(toggledFilter.name, appliedFilters);
		default :
			return removeEqualOrRangeFilter(toggledFilter, appliedFilters);
	}
}

function removeMatchFilter(filterName: string, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
	return appliedFilters.filter(filter => filter.name !== filterName)
}

function removeEqualOrRangeFilter(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): DaffCategoryFilterRequest[] {
	return appliedFilters.map(appliedFilter => {
		if(appliedFilter.name === toggledFilter.name) {
			appliedFilter.value = (<DaffCategoryFilterEqualRequest>appliedFilter).value.filter(value => value !== toggledFilter.value);
		}
		return appliedFilter;
	}).filter(filter => filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0)
}

function addFilter(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
	: DaffCategoryFilterRequest[] {
	return toggledFilter.type === DaffCategoryFilterType.Match ?
		addMatchFilter(toggledFilter, appliedFilters) :
		addEqualOrRangeFilter(toggledFilter, appliedFilters);
}

function addMatchFilter(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
: DaffCategoryFilterRequest[] {
	return appliedFilters.concat([{
		name: toggledFilter.name,
		label: toggledFilter.label,
		value: toggledFilter.value,
		type: DaffCategoryFilterType.Match
	}]);
}

function addEqualOrRangeFilter(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
: DaffCategoryFilterRequest[] {
	return toggledFilterNameExists(toggledFilter, appliedFilters) ?
		addToExistingFilter(toggledFilter, appliedFilters) :
		addNewEqualOrRangeFilter(toggledFilter, appliedFilters);
}

function toggledFilterNameExists(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[]): boolean {
	return appliedFilters && !!appliedFilters.find(filter => filter.name === toggledFilter.name)
}

function addToExistingFilter(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
: DaffCategoryFilterRequest[] {
	return appliedFilters.map(filter => {
		if(filter.name === toggledFilter.name) {
			(<DaffCategoryFilterEqualRequest>filter).value.push(toggledFilter.value)
		}

		return filter;
	});
}

function addNewEqualOrRangeFilter(toggledFilter: DaffToggledCategoryFilterRequest, appliedFilters: DaffCategoryFilterRequest[])
: DaffCategoryFilterRequest[] {
	const newFilter: DaffCategoryFilterRequest = {
		name: toggledFilter.name,
		label: toggledFilter.label,
		value: [toggledFilter.value],
		type: null
	}
	
	if(toggledFilter.type === DaffCategoryFilterType.Equal) {
		newFilter.type = DaffCategoryFilterType.Equal;
	} else {
		newFilter.type = DaffCategoryFilterType.Range;
	}

	return appliedFilters.concat([newFilter]);
}
