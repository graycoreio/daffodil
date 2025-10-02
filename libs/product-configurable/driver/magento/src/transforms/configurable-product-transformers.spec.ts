import { TestBed } from '@angular/core/testing';

import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffMagentoSimpleProductTransformers } from '@daffodil/product/driver/magento';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import {
  MagentoConfigurableProduct,
  MagentoConfigurableProductOption,
} from '@daffodil/product-configurable/driver/magento';
import { MagentoConfigurableProductFactory } from '@daffodil/product-configurable/driver/magento/testing';
import { DaffConfigurableProductFactory } from '@daffodil/product-configurable/testing';

import {
  transformOption,
  transformOptionValue,
  MagentoConfigurableProductTransformer,
} from './configurable-product-transformers';

describe('@daffodil/product-configurable/driver/magento | MagentoConfigurableProductTransformer', () => {
  let service: MagentoConfigurableProductTransformer;
  let imageFactory: DaffProductImageFactory;
  let configurableProductFactory: DaffConfigurableProductFactory;
  let magentoConfigurableProductFactory: MagentoConfigurableProductFactory;
  let daffConfigurableProduct: DaffConfigurableProduct;
  let magentoConfigurableProduct: MagentoConfigurableProduct;
  const mediaUrl = 'mediaUrl';
  let simpleProductService: DaffMagentoSimpleProductTransformers;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MagentoConfigurableProductTransformer,
      ],
    });

    service = TestBed.inject(MagentoConfigurableProductTransformer);
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

  describe('transformMagentoConfigurableProduct', () => {

    it('should transform a magento configurable product into a daffodil configurable product', () => {
      const result = service.transform(simpleProductService.transformMagentoSimpleProduct(magentoConfigurableProduct, mediaUrl), magentoConfigurableProduct);
      expect(result.type).toEqual(DaffProductTypeEnum.Configurable);
      expect(result.configurableAttributes).toBeDefined();
      expect(result.variants).toBeDefined();
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
});
