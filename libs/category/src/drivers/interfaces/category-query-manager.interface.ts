import { QueryOptions } from "apollo-client";

export interface DaffCategoryQueryManagerInterface {
  getACategoryQuery(identifier: any): QueryOptions;
}
