import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '../factories/product.factory';
import { DaffProductImageFactory } from '../factories/product-image.factory';
/**
 * An in-memory service that stubs out the backend services for getting products.
 *
 * @Param productFactory: DaffProductFactory instance
 * @Param productImageFactory: DaffProductImageFactory instance
 * @Param products: An array of Products
 */
export declare class DaffInMemoryBackendProductService implements InMemoryDbService {
    private productFactory;
    private productImageFactory;
    products: DaffProduct[];
    constructor(productFactory: DaffProductFactory, productImageFactory: DaffProductImageFactory);
    /**
     * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
     *
     * @param url initial url
     * @param utils utility to parse url
     * @returns ParsedRequestUrl
     */
    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl;
    /**
     * Creates a fake database of products for the product inmemory backend service.
     *
     * @returns A fake database of an array of products
     */
    createDb(): any;
    /**
     * Returns products based on the url given.
     *
     * @param reqInfo request object
     * @returns An http response object
     */
    get(reqInfo: any): any;
}
