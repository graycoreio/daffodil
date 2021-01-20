import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { DaffConfigurableProductFacadeInterface, DaffConfigurableProductVariant } from '@daffodil/product';
export declare class MockDaffConfigurableProductFacade implements DaffConfigurableProductFacadeInterface {
    getAllAttributes(id: string): BehaviorSubject<Dictionary<string[]>>;
    getAllVariants(id: string): BehaviorSubject<DaffConfigurableProductVariant[]>;
    getAppliedAttributes(id: string): BehaviorSubject<Dictionary<string>>;
    getMinimumPrice(id: string): BehaviorSubject<number>;
    getMaximumPrice(id: string): BehaviorSubject<number>;
    getMinimumDiscountedPrice(id: string): BehaviorSubject<number>;
    getMaximumDiscountedPrice(id: string): BehaviorSubject<number>;
    getMinimumPercentDiscount(id: string): BehaviorSubject<number>;
    getMaximumPercentDiscount(id: string): BehaviorSubject<number>;
    isPriceRanged(id: string): BehaviorSubject<boolean>;
    hasDiscount(id: string): BehaviorSubject<boolean>;
    getSelectableAttributes(id: string): BehaviorSubject<Dictionary<string[]>>;
    getMatchingVariants(id: string): BehaviorSubject<DaffConfigurableProductVariant[]>;
    dispatch(action: any): void;
}
