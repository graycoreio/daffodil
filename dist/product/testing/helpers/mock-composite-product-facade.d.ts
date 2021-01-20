import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { DaffCompositeProductFacadeInterface, DaffCompositeProductItemOption, DaffCompositeProduct, DaffCompositeProductItem, DaffPriceRange, DaffCompositeConfigurationItem } from '@daffodil/product';
export declare class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
    getRequiredItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange>;
    getOptionalItemPricesForConfiguration(id: string, configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange>;
    getPricesAsCurrentlyConfigured(id: string): BehaviorSubject<DaffPriceRange>;
    getAppliedOptions(id: string): BehaviorSubject<Dictionary<DaffCompositeProductItemOption>>;
    isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): BehaviorSubject<boolean>;
    dispatch(action: any): void;
    hasDiscount(priceRange: DaffPriceRange): boolean;
    hasPriceRange(priceRange: DaffPriceRange): boolean;
}
