import { DaffProductImage } from './product-image';
export declare enum DaffProductTypeEnum {
    Simple = "simple",
    Composite = "composite",
    Configurable = "configurable"
}
/**
 * An interface for a product usable by the @daffodil/product library.
 */
export interface DaffProduct {
    id: string;
    type?: DaffProductTypeEnum;
    url?: string;
    price?: number;
    discount?: DaffProductDiscount;
    name?: string;
    brand?: string;
    description?: string;
    images: DaffProductImage[];
    in_stock?: boolean;
}
/**
 * The discount for a product.
 */
export interface DaffProductDiscount {
    amount: number;
    percent: number;
}
