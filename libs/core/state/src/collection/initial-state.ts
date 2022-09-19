import { DaffCollectionMetadata } from '@daffodil/core';

export const daffCollectionReducerInitialState: DaffCollectionMetadata = {
  count: 0,
  appliedSortOption: null,
  appliedSortDirection: null,
  currentPage: null,
  pageSize: null,
  totalPages: null,
  sortOptions: {
    default: null,
    options: [],
  },
  ids: [],
  filters: {},
};
