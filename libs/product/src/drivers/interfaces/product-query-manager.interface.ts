import { QueryOptions } from "apollo-client";

export interface DaffProductQueryManagerInterface {
    getAProductQuery(identifier: string): QueryOptions;
    getAllProductsQuery() : QueryOptions;
}