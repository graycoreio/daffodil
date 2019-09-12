import { QueryOptions } from "apollo-client";

/**
 * Interface that must be implemented by Product query managers.
 */
export interface DaffProductQueryManagerInterface {
    /**
     * Get a single product by identifier.
     * @param identifier product identifier
     */
    getAProductQuery(identifier: string): QueryOptions;
    /**
     * Get all products.
     */
    getAllProductsQuery() : QueryOptions;
}