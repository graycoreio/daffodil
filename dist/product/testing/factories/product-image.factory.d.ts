import { DaffProductImage } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * Mocked DaffProductImage object.
 */
export declare class MockProductImage implements DaffProductImage {
    id: any;
    url: string;
    label: any;
}
/**
 * A factory for creating DaffProductImage.
 */
export declare class DaffProductImageFactory extends DaffModelFactory<DaffProductImage> {
    constructor();
}
