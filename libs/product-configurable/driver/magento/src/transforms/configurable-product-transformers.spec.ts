import { TestBed } from '@angular/core/testing';

import { DaffConfigurableProduct } from '@daffodil/product';
import {
  MagentoConfigurableProduct,
  MagentoConfigurableProductOption,
  MagentoConfigurableProductVariant,
  MagentoConfigurableAttributeOption,
  DaffMagentoSimpleProductTransformers,
} from '@daffodil/product/driver/magento';
import { MagentoConfigurableProductFactory } from '@daffodil/product/driver/magento/testing';
import {
  DaffConfigurableProductFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

import {
  transformOption,
  transformOptionValue,
  transformVariant,
  transformVariantAttributes,
  transformMagentoConfigurableProduct,
} from './configurable-product-transformers';
import daffConfigurableProductData from './spec-data/daff-configurable-product.json';
import magentoConfigurableProductData from './spec-data/magento-configurable-product.json';

describe('DaffMagentoConfigurableProductTransformers', () => {
  const daffConfigurableProduct: DaffConfigurableProduct = new DaffConfigurableProductFactory().create();
  const magentoConfigurableProduct: MagentoConfigurableProduct = new MagentoConfigurableProductFactory().create();
  daffConfigurableProduct.variants[0].image = new DaffProductImageFactory().create();
  daffConfigurableProduct.variants[1].image = new DaffProductImageFactory().create();
  daffConfigurableProduct.variants[2].image = new DaffProductImageFactory().create();
  daffConfigurableProduct.variants[0].image.id = '0';
  daffConfigurableProduct.variants[1].image.id = '0';
  daffConfigurableProduct.variants[2].image.id = '0';
  const mediaUrl = 'mediaUrl';
  delete daffConfigurableProduct.configurableAttributes[0].values[0].swatch;
  delete daffConfigurableProduct.configurableAttributes[0].values[1].swatch;
  delete daffConfigurableProduct.configurableAttributes[0].values[2].swatch;
  let simpleProductService: DaffMagentoSimpleProductTransformers;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    simpleProductService = TestBed.inject(DaffMagentoSimpleProductTransformers);
  });

  describe('transformMagentoConfigurableProduct', () => {

    it('should transform a magento configurable product into a daffodil configurable product', () => {
      expect(transformMagentoConfigurableProduct(simpleProductService.transformMagentoSimpleProduct(magentoConfigurableProductData, mediaUrl), magentoConfigurableProductData)).toEqual(jasmine.objectContaining(daffConfigurableProductData));
    });
  });

  describe('transformOption', () => {

    it('should transform a MagentoConfigurableProductOption to a DaffConfigurableProductAttribute', () => {
      const magentoConfigurableProductOption: MagentoConfigurableProductOption = {
        position: daffConfigurableProduct.configurableAttributes[0].order,
        attribute_code: daffConfigurableProduct.configurableAttributes[0].code,
        label: daffConfigurableProduct.configurableAttributes[0].label,
        values: [
          {
            value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[0].value, 10),
            label: daffConfigurableProduct.configurableAttributes[0].values[0].label,
          },
          {
            value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[1].value, 10),
            label: daffConfigurableProduct.configurableAttributes[0].values[1].label,
          },
          {
            value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[2].value, 10),
            label: daffConfigurableProduct.configurableAttributes[0].values[2].label,
          },
        ],
      };

      expect(transformOption(magentoConfigurableProductOption)).toEqual(daffConfigurableProduct.configurableAttributes[0]);
    });
  });

  describe('transformOptionValue', () => {

    it('should transform a MagentoConfigurableProductOptionsValue into a DaffConfigurableProductOptionValue', () => {
      const magentoConfigurableOptionValue = {
        value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[0].value, 10),
        label: daffConfigurableProduct.configurableAttributes[0].values[0].label,
      };

      expect(transformOptionValue(magentoConfigurableOptionValue)).toEqual(daffConfigurableProduct.configurableAttributes[0].values[0]);
    });
  });

  describe('transformVariant', () => {

    it('should transform a MagentoConfigurableProductVariant into a DaffConfigurableProductVariant', () => {
      const magnetoConfigurableProductVariant: MagentoConfigurableProductVariant = {
        attributes: [
          {
            code: daffConfigurableProduct.configurableAttributes[0].code,
            value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[0].value, 10),
          },
          {
            code: daffConfigurableProduct.configurableAttributes[1].code,
            value_index: parseInt(daffConfigurableProduct.configurableAttributes[1].values[0].value, 10),
          },
          {
            code: daffConfigurableProduct.configurableAttributes[2].code,
            value_index: parseInt(daffConfigurableProduct.configurableAttributes[2].values[0].value, 10),
          },
        ],
        product: {
          ...magentoConfigurableProduct,
          image: {
            url: daffConfigurableProduct.variants[0].image.url,
            label: daffConfigurableProduct.variants[0].image.label,
          },
          price_range: {
            maximum_price: {
              regular_price: {
                value: daffConfigurableProduct.variants[0].price,
                currency: null,
              },
              discount: {
                amount_off: daffConfigurableProduct.variants[0].discount.amount,
                percent_off: daffConfigurableProduct.variants[0].discount.percent,
              },
            },
          },
          sku: daffConfigurableProduct.variants[0].id,
        },
      };

      expect(transformVariant(magnetoConfigurableProductVariant)).toEqual(daffConfigurableProduct.variants[0]);
    });
  });

  describe('transformVariantAttributes', () => {

    it('should transform an array of MagentoConfigurableAttributeOptions into a DaffProductVariantAttributesDictionary', () => {
      const magentoAttributeOptions: MagentoConfigurableAttributeOption[] = [
        {
          code: daffConfigurableProduct.configurableAttributes[0].code,
          value_index: parseInt(daffConfigurableProduct.configurableAttributes[0].values[0].value, 10),
        },
        {
          code: daffConfigurableProduct.configurableAttributes[1].code,
          value_index: parseInt(daffConfigurableProduct.configurableAttributes[1].values[0].value, 10),
        },
        {
          code: daffConfigurableProduct.configurableAttributes[2].code,
          value_index: parseInt(daffConfigurableProduct.configurableAttributes[2].values[0].value, 10),
        },
      ];

      expect(transformVariantAttributes(magentoAttributeOptions)).toEqual(daffConfigurableProduct.variants[0].appliedAttributes);
    });
  });
});
