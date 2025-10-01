import { TestBed } from '@angular/core/testing';

import { DaffMagentoSimpleProductTransformers } from '@daffodil/product/driver/magento';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  MagentoConfigurableProduct,
  MagentoConfigurableProductVariant,
  MagentoConfigurableAttributeOption,
} from '@daffodil/product-configurable/driver/magento';
import { MagentoConfigurableProductFactory } from '@daffodil/product-configurable/driver/magento/testing';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

import {
  transformVariant,
  transformVariantAttributes,
} from './variant';

describe('DaffMagentoConfigurableProductTransformers', () => {
  let imageFactory: DaffProductImageFactory;
  let configurableProductFactory: DaffConfigurableProductFactory;
  let magentoConfigurableProductFactory: MagentoConfigurableProductFactory;
  let daffConfigurableProduct: DaffConfigurableProduct;
  let magentoConfigurableProduct: MagentoConfigurableProduct;
  const mediaUrl = 'mediaUrl';
  let simpleProductService: DaffMagentoSimpleProductTransformers;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    simpleProductService = TestBed.inject(DaffMagentoSimpleProductTransformers);
    imageFactory = TestBed.inject(DaffProductImageFactory);
    configurableProductFactory = TestBed.inject(DaffConfigurableProductFactory);
    magentoConfigurableProductFactory = TestBed.inject(MagentoConfigurableProductFactory);

    daffConfigurableProduct = configurableProductFactory.create();
    magentoConfigurableProduct = magentoConfigurableProductFactory.create();
    daffConfigurableProduct.variants[0].image = imageFactory.create();
    daffConfigurableProduct.variants[1].image = imageFactory.create();
    daffConfigurableProduct.variants[2].image = imageFactory.create();
    daffConfigurableProduct.variants[0].image.id = '0';
    daffConfigurableProduct.variants[1].image.id = '0';
    daffConfigurableProduct.variants[2].image.id = '0';
    delete daffConfigurableProduct.configurableAttributes[0].values[0].swatch;
    delete daffConfigurableProduct.configurableAttributes[0].values[1].swatch;
    delete daffConfigurableProduct.configurableAttributes[0].values[2].swatch;
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
