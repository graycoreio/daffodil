import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoProductTypeEnum,
  MagentoProductStockStatusEnum,
  MagentoConfigurableProduct,
} from '@daffodil/product/driver/magento';
import { MockMagentoCoreProduct } from '@daffodil/product/driver/magento/testing';

export class MockMagentoConfigurableProduct extends MockMagentoCoreProduct implements MagentoConfigurableProduct {

	private priceVariant1 = faker.datatype.number({ min: 1, max: 1000 });
	private discountVariant1 = faker.datatype.number({ min: 0, max: this.priceVariant1 - 1 });
	private priceVariant2 = faker.datatype.number({ min: 1, max: 1000 });
	private discountVariant2 = faker.datatype.number({ min: 0, max: this.priceVariant2 - 1 });
	private priceVariant3 = faker.datatype.number({ min: 1, max: 1000 });
	private discountVariant3 = faker.datatype.number({ min: 0, max: this.priceVariant3 - 1 });
  __typename = MagentoProductTypeEnum.ConfigurableProduct;
	configurable_options = [
	  {
	    attribute_code: 'color',
	    label: 'Color',
	    position: 0,
	    values: [
	      {
	        label: 'Blue',
	        value_index: 0,
	      },
	      {
	        label: 'Yellow',
	        value_index: 1,
	      },
	      {
	        label: 'Red',
	        value_index: 2,
	      },
	    ],
	  },
	];
	variants = [
	  {
	    attributes: [
	      {
	        code: 'color',
	        value_index: 0,
	      },
	    ],
	    product: {
	      __typename: MagentoProductTypeEnum.SimpleProduct,
	      uid: faker.datatype.uuid(),
	      url_key: faker.random.alphaNumeric(16),
	      url_suffix: '.html',
	      name: faker.random.word(),
	      sku: faker.random.alphaNumeric(16),
	      stock_status: MagentoProductStockStatusEnum.InStock,
	      image: {
	        __typename: 'ProductImage',
	        label: faker.random.words(3),
	        url: faker.image.imageUrl(),
	      },
	      thumbnail: {
	        __typename: 'ProductImage',
	        label: faker.random.words(3),
	        url: faker.image.imageUrl(),
	      },
	      price_range: {
	        __typename: 'PriceRange',
	        maximum_price: {
	          __typename: 'ProductPrice',
	          regular_price: {
	            __typename: 'Money',
	            value: this.priceVariant1,
	            currency: null,
	          },
	          discount: {
	            __typename: 'ProductDiscount',
	            amount_off: this.discountVariant1,
	            percent_off: this.discountVariant1/this.priceVariant1,
	          },
	        },
	      },
	    },
	  },
	  {
	    attributes: [
	      {
	        code: 'color',
	        value_index: 1,
	      },
	    ],
	    product: {
	      __typename: MagentoProductTypeEnum.SimpleProduct,
	      uid: faker.datatype.uuid(),
	      url_key: faker.random.alphaNumeric(16),
	      url_suffix: '.html',
	      name: faker.random.word(),
	      sku: faker.random.alphaNumeric(16),
	      stock_status: MagentoProductStockStatusEnum.InStock,
	      image: {
	        __typename: 'ProductImage',
	        label: faker.random.words(3),
	        url: faker.image.imageUrl(),
	      },
	      thumbnail: {
	        __typename: 'ProductImage',
	        label: faker.random.words(3),
	        url: faker.image.imageUrl(),
	      },
	      price_range: {
	        __typename: 'PriceRange',
	        maximum_price: {
	          __typename: 'ProductPrice',
	          regular_price: {
	            __typename: 'Money',
	            value: this.priceVariant2,
	            currency: null,
	          },
	          discount: {
	            amount_off: this.discountVariant2,
	            percent_off: this.discountVariant2/this.priceVariant2,
	          },
	        },
	      },
	    },
	  },
	  {
	    attributes: [
	      {
	        code: 'color',
	        value_index: 2,
	      },
	    ],
	    product: {
	      __typename: MagentoProductTypeEnum.SimpleProduct,
	      uid: faker.datatype.uuid(),
	      url_key: faker.random.alphaNumeric(16),
	      url_suffix: '.html',
	      name: faker.random.word(),
	      sku: faker.random.alphaNumeric(16),
	      stock_status: MagentoProductStockStatusEnum.InStock,
	      image: {
	        __typename: 'ProductImage',
	        label: faker.random.words(3),
	        url: faker.image.imageUrl(),
	      },
	      thumbnail: {
	        __typename: 'ProductImage',
	        label: faker.random.words(3),
	        url: faker.image.imageUrl(),
	      },
	      price_range: {
	        __typename: 'PriceRange',
	        maximum_price: {
	          __typename: 'ProductPrice',
	          regular_price: {
	            __typename: 'Money',
	            value: this.priceVariant3,
	            currency: null,
	          },
	          discount: {
	            amount_off: this.discountVariant3,
	            percent_off: this.discountVariant3/this.priceVariant3,
	          },
	        },
	      },
	    },
	  },
	];
}

/**
 * A factory for creating stub data for {@link MagentoConfigurableProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoConfigurableProductFactory extends DaffModelFactory<MagentoConfigurableProduct> {

  constructor(){
    super(MockMagentoConfigurableProduct);
  }
}
