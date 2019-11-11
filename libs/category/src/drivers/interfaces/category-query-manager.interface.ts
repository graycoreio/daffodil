import { QueryOptions } from 'apollo-client';

export interface DaffCategoryQueryManagerInterface {
  getACategoryQuery(
    identifier: string | number,
    currentPage: number,
    pageSize: number
  ): QueryOptions;
}
