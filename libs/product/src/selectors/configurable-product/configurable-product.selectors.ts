import { createSelector, MemoizedSelectorWithProps } from '@ngrx/store';

import { DaffProductTypeEnum } from '../../models/product';
import { Dictionary } from '@ngrx/entity';
import { getDaffConfigurableProductEntitiesSelectors } from '../configurable-product-entities/configurable-product-entities.selectors';
import { getDaffProductEntitiesSelectors } from '../product-entities/product-entities.selectors';
import { DaffConfigurableProductVariant, DaffConfigurableProduct, DaffProductVariantAttributesDictionary, DaffConfigurableProductAttribute } from '../../models/configurable-product';

export interface DaffConfigurableProductMemoizedSelectors {
	selectMatchingConfigurableProductVariants: MemoizedSelectorWithProps<object, object, DaffConfigurableProductVariant[]>;
	selectConfigurableProductPrice: MemoizedSelectorWithProps<object, object, string>;
	selectUndeterminedConfigurableProductAttributes: MemoizedSelectorWithProps<object, object, Dictionary<string[]>>;
}

const createConfigurableProductSelectors = (): DaffConfigurableProductMemoizedSelectors => {

	const {
		selectConfigurableProductAppliedAttributes,
		selectConfigurableProductAppliedAttributesEntitiesState
	} = getDaffConfigurableProductEntitiesSelectors();

	const {
		selectProductEntities
	} = getDaffProductEntitiesSelectors();

	/**
	 * Selector for the variants of the product that match the currently applied attributes.
	 */
	const selectMatchingConfigurableProductVariants = createSelector(
		selectProductEntities,
		selectConfigurableProductAppliedAttributesEntitiesState,
		(products, appliedAttributesEntities, props) => {
			const product: DaffConfigurableProduct = products[props.id];
			if(!product || product.type !== DaffProductTypeEnum.Configurable) {
				return [];
			}
			const appliedAttributes = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
			return product.variants.filter(variant => isVariantAvailable(product.configurableAttributes, appliedAttributes, variant))
		}
	);

	/**
	 * Selector for the range of price for current configuration of the configurable product.
	 */
	const selectConfigurableProductPrice = createSelector(
		selectProductEntities,
		selectConfigurableProductAppliedAttributesEntitiesState,
		(products, appliedAttributesEntities, props) => {
			const matchingVariants: DaffConfigurableProductVariant[] = selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id });
			if(matchingVariants.length === 1) return matchingVariants[0].price.toString();
			else return getMinimumPrice(matchingVariants) + '-' + getMaximumPrice(matchingVariants);
		}
	);

	/**
	 * Selector for undetermined configurable product attributes derived from the remaining variants.
	 * The remaining variants of the product are derived from the currently applied attributes.
	 */
	const selectUndeterminedConfigurableProductAttributes = createSelector(
		selectProductEntities,
		selectConfigurableProductAppliedAttributesEntitiesState,
		(products, appliedAttributesEntities, props) => {
			const product: DaffConfigurableProduct = products[props.id];
			if(product.type !== DaffProductTypeEnum.Configurable) {
				return {};
			}
			const appliedAttributes: Dictionary<string> = selectConfigurableProductAppliedAttributes.projector(appliedAttributesEntities, { id: props.id });
			const matchingVariants: DaffConfigurableProductVariant[] = selectMatchingConfigurableProductVariants.projector(products, appliedAttributesEntities, { id: props.id });
			const unselectedAttributes = product.configurableAttributes
				.filter(option => !appliedAttributes[option.code]);
			
			const undeterminedAttributes = {};
			unselectedAttributes.forEach((attribute) => {
				undeterminedAttributes[attribute.code] = [];
				matchingVariants.forEach(variant => {
					if(!isVariantAttributeMarkedAsUndetermined(undeterminedAttributes[attribute.code], variant.appliedAttributes[attribute.code])) {
						undeterminedAttributes[attribute.code].push(variant.appliedAttributes[attribute.code]);
					}
				})
			})

			return undeterminedAttributes;
		}
	);

	return { 
		selectConfigurableProductPrice,
		selectMatchingConfigurableProductVariants,
		selectUndeterminedConfigurableProductAttributes
	}
}

export const getDaffConfigurableProductSelectors = (() => {
	let cache;
	return (): DaffConfigurableProductMemoizedSelectors => cache = cache 
		? cache 
		: createConfigurableProductSelectors();
})();

function isVariantAvailable(
	configurableAttributes: DaffConfigurableProductAttribute[],
	appliedAttributes: DaffProductVariantAttributesDictionary, 
	variant: DaffConfigurableProductVariant
): boolean {
	return configurableAttributes.reduce((acc, option) => 
		acc && !(isAttributeApplied(option.code, appliedAttributes) && !doesAppliedAttributeMatchVariantAttribute(appliedAttributes[option.code], variant.appliedAttributes[option.code])),
		true
	)
}

function isAttributeApplied(attributeCode: string, appliedAttributes: DaffProductVariantAttributesDictionary): boolean {
	return !!appliedAttributes[attributeCode];
}

function doesAppliedAttributeMatchVariantAttribute(appliedAttribute: string, variantAttribute: string): boolean {
	return variantAttribute === appliedAttribute
}

function getMinimumPrice(variants: DaffConfigurableProductVariant[]): string {
	return variants.reduce(
		(acc, variant) => {
			const price = variant.price;
			return price < acc ? price : acc;
		},
		variants[0].price
	).toString();
}

function getMaximumPrice(variants: DaffConfigurableProductVariant[]): string {
	return variants.reduce(
		(acc, variant) => {
			const price = variant.price
			return price > acc ? price : acc;
		},
		variants[0].price
	).toString();
}

function isVariantAttributeMarkedAsUndetermined(attributeArray: string[], variantValue: string) {
	return attributeArray.indexOf(variantValue) > -1
}
