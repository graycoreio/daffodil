import { Observable } from 'rxjs';
import { DaffProduct, DaffProductServiceInterface } from '@daffodil/product';
import { DaffProductFactory } from '../../factories/product.factory';
import { DaffProductImageFactory } from '../../factories/product-image.factory';
/**
 * The product testing driver to mock the backend product service.
 *
 * @param productFactory - A DaffProductFactory instance
 * @param productImageFactory - A DaffProductImageFactory instance
 */
export declare class DaffTestingProductService implements DaffProductServiceInterface {
    private productFactory;
    private productImageFactory;
    constructor(productFactory: DaffProductFactory, productImageFactory: DaffProductImageFactory);
    /**
     * Get all products as DaffProduct[].
     *
     * @returns An Observable of Product[]
     */
    getAll(): Observable<DaffProduct[]>;
    /**
     * Get all best selling products.
     *
     * @returns An Observable of Product[]
     */
    getBestSellers(): Observable<DaffProduct[]>;
    /**
     * Get product by ID
     *
     * @param productId product ID
     * @returns An Observable of a Product
     */
    get(productId: string): Observable<DaffProduct>;
}
