import { BehaviorSubject } from 'rxjs';
import { DaffProduct, DaffProductFacadeInterface } from '@daffodil/product';
export declare class MockDaffProductFacade implements DaffProductFacadeInterface {
    loading$: BehaviorSubject<boolean>;
    /**
     * @deprecated use getProduct instead.
     */
    product$: BehaviorSubject<DaffProduct>;
    getProduct(id: string): BehaviorSubject<DaffProduct>;
    getPrice(id: string): BehaviorSubject<number>;
    hasDiscount(id: string): BehaviorSubject<boolean>;
    getDiscountAmount(id: string): BehaviorSubject<number>;
    getDiscountedPrice(id: string): BehaviorSubject<number>;
    getDiscountPercent(id: string): BehaviorSubject<number>;
    isOutOfStock(id: string): BehaviorSubject<boolean>;
    dispatch(action: any): void;
}
