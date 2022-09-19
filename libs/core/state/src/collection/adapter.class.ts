import { defaultMemoize } from '@ngrx/store';

import {
  daffCollectionBuildMetadataFromRequest,
  DaffCollectionMetadata,
  DaffCollectionRequest,
  DaffFilters,
} from '@daffodil/core';

/**
 * Provides an abstracted way to manage a collection state.
 */
export class DaffCollectionStateAdapter<T extends DaffCollectionMetadata = DaffCollectionMetadata> {
  /**
   * Stores a collection request in state.
   * This is useful when you want to preemptively reduce a request before waiting for a response.
   */
  storeRequest(request: DaffCollectionRequest, state: T): T {
    return {
      ...state,
      ...daffCollectionBuildMetadataFromRequest(request),
    };
  }

  /**
   * Sets the page size.
   */
  setPageSize(size: number, state: T): T {
    return {
      ...state,
      pageSize: size,
      currentPage: 1,
    };
  }

  /**
   * Sets the current page.
   */
  setCurrentPage(page: number, state: T): T {
    return {
      ...state,
      currentPage: page,
    };
  }

  /**
   * Sets the sorting option and direction.
   */
  setSort(option: string, direction: string, state: T): T {
    return {
      ...state,
      appliedSortOption: option,
      appliedSortDirection: direction,
    };
  }

  /**
   * Sets the collection filters.
   */
  setFilters(filters: DaffFilters, state: T): T {
    return {
      ...state,
      currentPage: 1,
      filters: filters || {},
    };
  }

  /**
   * Set the entire collection metadata at once.
   */
  setMetadata(metadata: DaffCollectionMetadata, state: T): T {
    return {
      ...state,
      ids: metadata.ids,
      count: metadata.count,
      currentPage: metadata.currentPage,
      pageSize: metadata.pageSize,
      sortOptions: metadata.sortOptions,
      totalPages: metadata.totalPages,
      appliedSortOption: metadata.appliedSortOption || state.appliedSortOption,
      appliedSortDirection: metadata.appliedSortDirection || state.appliedSortDirection,
      filters: metadata.filters || {},
    };
  }
}

/**
 * Create the adapter for the collection state.
 */
export const getCollectionStateAdapter: <T extends DaffCollectionMetadata = DaffCollectionMetadata>() => DaffCollectionStateAdapter<T>
  = defaultMemoize(() => new DaffCollectionStateAdapter()).memoized;
