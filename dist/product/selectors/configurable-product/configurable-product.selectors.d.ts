import { MemoizedSelectorWithProps } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffConfigurableProductVariant } from '../../models/configurable-product';
export interface DaffConfigurableProductMemoizedSelectors {
    selectAllConfigurableProductAttributes: MemoizedSelectorWithProps<object, object, Dictionary<string[]>>;
    selectAllConfigurableProductVariants: MemoizedSelectorWithProps<object, object, DaffConfigurableProductVariant[]>;
    selectMatchingConfigurableProductVariants: MemoizedSelectorWithProps<object, object, DaffConfigurableProductVariant[]>;
    selectConfigurableProductPrices: MemoizedSelectorWithProps<object, object, number[]>;
    selectConfigurableProductDiscountedPrices: MemoizedSelectorWithProps<object, object, number[]>;
    selectConfigurableProductPercentDiscounts: MemoizedSelectorWithProps<object, object, number[]>;
    selectConfigurableProductHasDiscount: MemoizedSelectorWithProps<object, object, boolean>;
    selectConfigurableProductMinimumPrice: MemoizedSelectorWithProps<object, object, number>;
    selectConfigurableProductMaximumPrice: MemoizedSelectorWithProps<object, object, number>;
    selectConfigurableProductMinimumDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
    selectConfigurableProductMaximumDiscountedPrice: MemoizedSelectorWithProps<object, object, number>;
    selectConfigurableProductMinimumPercentDiscount: MemoizedSelectorWithProps<object, object, number>;
    selectConfigurableProductMaximumPercentDiscount: MemoizedSelectorWithProps<object, object, number>;
    isConfigurablePriceRanged: MemoizedSelectorWithProps<object, object, boolean>;
    selectSelectableConfigurableProductAttributes: MemoizedSelectorWithProps<object, object, Dictionary<string[]>>;
}
export declare const getDaffConfigurableProductSelectors: () => DaffConfigurableProductMemoizedSelectors;
