import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { DaffProduct } from '../../models/product';
/**
 * A service for making magento apollo queries for products of type, DaffProduct.
 */
export declare class DaffMagentoProductService implements DaffProductServiceInterface {
    private apollo;
    constructor(apollo: Apollo);
    /**
     * Get an Observable of a DaffProduct by id.
     * @param productId a product Id
     */
    get(productId: string): Observable<DaffProduct>;
    /**
     * Get an Observable of an array of DaffProducts.
     */
    getAll(): Observable<DaffProduct[]>;
    getBestSellers(): Observable<DaffProduct[]>;
}
