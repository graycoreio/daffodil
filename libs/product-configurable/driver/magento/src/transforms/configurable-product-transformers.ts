import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffProductTypeEnum,
  DaffProduct,
} from '@daffodil/product';
import {
  DaffConfigurableProduct,
  DaffConfigurableProductAttribute,
  DaffConfigurableProductOptionValue,
} from '@daffodil/product-configurable';

import { DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM } from '../injection-tokens/transforms/variant/token';
import { MagentoConfigurableProductVariantTransform } from '../interfaces/public_api';
import {
  MagentoConfigurableProduct,
  MagentoConfigurableProductOption,
  MagentoConfigurableProductOptionsValue,
} from '../models/configurable-product';

@Injectable()
export class MagentoConfigurableProductTransformer {
  constructor(
    @Inject(DAFF_PRODUCT_CONFIGURABLE_MAGENTO_VARIANT_TRANSFORM) private variantTransform: MagentoConfigurableProductVariantTransform,
  ) {}

  /**
   * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
   *
   * @param response the response from a magento product query.
   */
  transform(
    daffProduct: DaffProduct,
    { configurable_options, variants }: MagentoConfigurableProduct,
  ): DaffConfigurableProduct {
    return {
      ...daffProduct,
      type: DaffProductTypeEnum.Configurable,
      configurableAttributes: configurable_options.map(transformOption),
      variants: variants.map((variant) => this.variantTransform(variant)),
    };
  }
}

export function transformOption(option: MagentoConfigurableProductOption): DaffConfigurableProductAttribute {
  return {
    order: option.position,
    code: option.attribute_code,
    label: option.label,
    values: option.values.map(transformOptionValue),
  };
}

export function transformOptionValue(value: MagentoConfigurableProductOptionsValue): DaffConfigurableProductOptionValue {
  return {
    value: value.value_index.toString(),
    label: value.label,
  };
}
