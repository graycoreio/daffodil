import { MagentoConfigurableProduct, MagentoConfigurableProductOption, MagentoConfigurableProductOptionsValue, MagentoConfigurableProductVariant, MagentoConfigurableAttributeOption } from '../models/configurable-product';
import { DaffConfigurableProduct, DaffConfigurableProductAttribute, DaffConfigurableProductOptionValue, DaffConfigurableProductVariant, DaffProductVariantAttributesDictionary } from '../../../models/configurable-product';
/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 * @param response the response from a magento product query.
 */
export declare function transformMagentoConfigurableProduct(product: MagentoConfigurableProduct, mediaUrl: string): DaffConfigurableProduct;
export declare function transformOption(option: MagentoConfigurableProductOption): DaffConfigurableProductAttribute;
export declare function transformOptionValue(value: MagentoConfigurableProductOptionsValue): DaffConfigurableProductOptionValue;
export declare function transformVariant(variant: MagentoConfigurableProductVariant): DaffConfigurableProductVariant;
export declare function transformVariantAttributes(attributes: MagentoConfigurableAttributeOption[]): DaffProductVariantAttributesDictionary;
