import { DaffCategoryFilter } from '@daffodil/category';

export const computeAppliedFilters = (filters: DaffCategoryFilter[]) => filters.map(
  (filter: DaffCategoryFilter) => ({
    ...filter,
    //TODO(damienwebdev): revisit `filter.options.filter` in Typescript 4.0 for generic narrowing of union types.
    options: (<any[]>filter.options).filter((option: DaffCategoryFilter['options'][number]) => option.applied) ?? [],
  }),
).filter((filter: DaffCategoryFilter) => filter.options.length);
