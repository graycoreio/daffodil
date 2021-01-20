import { DaffProductDiscount } from './product';
export interface DaffProductPrices {
    discountedPrice: number;
    discount: DaffProductDiscount;
    originalPrice: number;
}
export interface DaffPriceRange {
    maxPrice: DaffProductPrices;
    minPrice: DaffProductPrices;
}
