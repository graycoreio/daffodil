import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffProduct, DaffProductServiceInterface } from '@daffodil/product';
/**
 * The product inmemory driver to mock the product backend service.
 *
 * @Param HttpClient
 */
export declare class DaffInMemoryProductService implements DaffProductServiceInterface {
    private http;
    url: string;
    constructor(http: HttpClient);
    /**
     * Gets all products.
     *
     * @returns An Observable of DaffProduct[]
     */
    getAll(): Observable<DaffProduct[]>;
    /**
     * Gets all best selling products.
     *
     * @returns An Observable of DaffProduct[]
     */
    getBestSellers(): Observable<DaffProduct[]>;
    /**
     * Get a product by ID.
     *
     * @param productId string - product ID
     * @returns An Observable of a DaffProduct
     */
    get(productId: string): Observable<DaffProduct>;
}
