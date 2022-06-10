import { defaultMemoize } from '@ngrx/store';

import {
  DaffProductCollectionMetadata,
  DaffProductCollectionRequest,
  DaffProductFilter,
} from '@daffodil/product';

import { buildMetadataFromRequest } from './pure/build-metadata-from-request';
import { DaffProductCollectionReducerState } from './state.interface';

export const daffProductCollectionReducerInitialState: DaffProductCollectionReducerState = {
  total_products: 0,
  applied_sort_option: null,
  applied_sort_direction: null,
  current_page: null,
  page_size: null,
  total_pages: null,
  filters: {},
  sort_options: {
    default: null,
    options: [],
  },
};

/**
 * Provides an abstracted way to manage a product collection state.
 */
export class DaffProductCollectionStateAdapter<T extends DaffProductCollectionReducerState = DaffProductCollectionReducerState> {
  /**
   * Stores a product collection request in state.
   * This is useful when you want to preemptively reduce a request before waiting for a response.
   */
  storeRequest(request: DaffProductCollectionRequest, state: T): T {
    return {
      ...state,
      ...buildMetadataFromRequest(request),
    };
  }

  /**
   * Sets the page size.
   */
  setPageSize(size: number, state: T): T {
    return {
      ...state,
      page_size: size,
    };
  }

  /**
   * Sets the current page.
   */
  setCurrentPage(page: number, state: T): T {
    return {
      ...state,
      current_page: page,
    };
  }

  /**
   * Sets the sorting option and direction.
   */
  setSort(option: string, direction: string, state: T): T {
    return {
      ...state,
      applied_sort_option: option,
      applied_sort_direction: direction,
    };
  }

  /**
   * Sets the product collection filters.
   */
  setFilters(filters: Record<string, DaffProductFilter>, state: T): T {
    return {
      ...state,
      filters,
    };
  }

  /**
   * Set the entire product collection metadata at once.
   */
  setMetadata(metadata: DaffProductCollectionMetadata, state: T): T {
    return {
      ...state,
      total_products: metadata.total_products,
      current_page: metadata.current_page,
      page_size: metadata.page_size,
      filters: metadata.filters,
      sort_options: metadata.sort_options,
      total_pages: metadata.total_pages,
      applied_sort_option: metadata.applied_sort_option || state.applied_sort_option,
      applied_sort_direction: metadata.applied_sort_direction || state.applied_sort_direction,
    };
  }
}

/**
 * Create the adapter for the product collection state.
 */
export const getProductCollectionStateAdapter: () => DaffProductCollectionStateAdapter = defaultMemoize(() => new DaffProductCollectionStateAdapter()).memoized;
