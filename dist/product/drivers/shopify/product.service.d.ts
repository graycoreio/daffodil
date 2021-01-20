import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffProduct } from '../../models/product';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
interface ProductNode {
    id: string;
    title?: string;
    price?: string;
}
/**
 * GraphQL query object for getting all products.
 */
export declare const GetAllProductsQuery: import("graphql").DocumentNode;
/**
 * GraphQL query object for getting a product by ID.
 */
export declare const GetAProduct: import("graphql").DocumentNode;
/**
 * Transforms a ProductNode into a different object.
 *
 * @param node - ProductNode object
 * @returns A Product object
 */
export declare const DaffShopifyProductTransformer: (node: ProductNode) => DaffProduct;
/**
 * A service for getting DaffProducts from apollo shopify product requests.
 *
 * @Param apollo
 */
export declare class DaffShopifyProductService implements DaffProductServiceInterface {
    private apollo;
    defaultLength: number;
    constructor(apollo: Apollo);
    /**
     * A query for retrieving all Products as an Observable<DaffProduct[]>.
     *
     * @returns Observable<Product[]>
     */
    getAll(): Observable<DaffProduct[]>;
    getBestSellers(): Observable<DaffProduct[]>;
    /**
     * A query for retrieving a particular product as an Observable<DaffProduct>.
     *
     * @param productId - A product ID
     * @returns Observable<Product>
     */
    get(productId: string): Observable<DaffProduct>;
}
export {};
