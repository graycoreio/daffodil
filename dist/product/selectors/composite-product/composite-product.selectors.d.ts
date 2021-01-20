import { MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffPriceRange } from '../../models/prices';
import { DaffCompositeConfigurationItem } from '../../models/composite-configuration-item';
export interface DaffCompositeProductMemoizedSelectors {
    /**
     * Get a DaffPriceRange for a composite product based on the configuration provided excluding unselected, optional item prices.
     */
    selectCompositeProductRequiredItemPricesForConfiguration: MemoizedSelectorWithProps<object, {
        id: string;
        configuration?: Dictionary<DaffCompositeConfigurationItem>;
    }, DaffPriceRange>;
    /**
     * Get the broadest possible DaffPriceRange for a composite product based on the configuration provided including optional item prices.
     */
    selectCompositeProductOptionalItemPricesForConfiguration: MemoizedSelectorWithProps<object, {
        id: string;
        configuration?: Dictionary<DaffCompositeConfigurationItem>;
    }, DaffPriceRange>;
    /**
     * Get the DaffPriceRange for a composite product based on the current configuration of selected item options in redux state and
     * excluding unselected, optional item prices.
     */
    selectCompositeProductPricesAsCurrentlyConfigured: MemoizedSelectorWithProps<object, {
        id: string;
    }, DaffPriceRange>;
}
export declare const getDaffCompositeProductSelectors: () => DaffCompositeProductMemoizedSelectors;
