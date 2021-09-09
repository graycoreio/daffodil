import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffConfigurableProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import { MockProduct } from '@daffodil/product/testing';

/**
 * Mocked DaffConfigurableProduct object.
 */
export class MockConfigurableProduct extends MockProduct implements DaffConfigurableProduct {
	private stubPriceVariant1 = faker.datatype.number({ min: 1, max: 1500 });
	private stubDiscountVariant1 = faker.datatype.number({ min: 0, max: this.stubPriceVariant1 - 1 });
	private stubPriceVariant2 = faker.datatype.number({ min: 1, max: 1500 });
	private stubDiscountVariant2 = faker.datatype.number({ min: 0, max: this.stubPriceVariant2 - 1 });
	private stubPriceVariant3 = faker.datatype.number({ min: 1, max: 1500 });
	private stubDiscountVariant3 = faker.datatype.number({ min: 0, max: this.stubPriceVariant3 - 1 });

	type = DaffProductTypeEnum.Configurable;
	configurableAttributes = [
	  {
	    code: 'color',
	    label: 'Color',
	    order: 0,
	    values: [
	      {
	        value: '0',
	        label: 'Blue',
	        swatch: {
	          value: '#0000FF',
	          thumbnail: null,
	        },
	      },
	      {
	        value: '1',
	        label: 'Yellow',
	        swatch: {
	          value: '#FFFF00',
	          thumbnail: null,
	        },
	      },
	      {
	        value: '2',
	        label: 'Red',
	        swatch: {
	          value: '#FF0000',
	          thumbnail: null,
	        },
	      },
	    ],
	  },
	  {
	    code: 'size',
	    label: 'Size',
	    order: 1,
	    values: [
	      {
	        value: '0',
	        label: 'Small',
	        swatch: null,
	      },
	      {
	        value: '1',
	        label: 'Medium',
	        swatch: null,
	      },
	      {
	        value: '2',
	        label: 'Large',
	        swatch: null,
	      },
	    ],
	  },
	  {
	    code: 'material',
	    label: 'Material',
	    order: 2,
	    values: [
	      {
	        value: '0',
	        label: 'Cotton',
	        swatch: null,
	      },
	      {
	        value: '1',
	        label: 'Polyester',
	        swatch: null,
	      },
	      {
	        value: '2',
	        label: 'Spandex',
	        swatch: null,
	      },
	    ],
	  },
	];
	variants = [
	  {
	    appliedAttributes: {
	      color: '0',
	      size: '0',
	      material: '0',
	    },
	    price: this.stubPriceVariant1,
	    discount: {
	      amount: this.stubDiscountVariant1,
	      percent: Math.floor((this.stubDiscountVariant1/this.stubPriceVariant1) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '0',
	      size: '1',
	      material: '0',
	    },
	    price: this.stubPriceVariant1,
	    discount: {
	      amount: this.stubDiscountVariant1,
	      percent: Math.floor((this.stubDiscountVariant1/this.stubPriceVariant1) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '0',
	      size: '1',
	      material: '2',
	    },
	    price: this.stubPriceVariant3,
	    discount: {
	      amount: this.stubDiscountVariant3,
	      percent: Math.floor((this.stubDiscountVariant3/this.stubPriceVariant3) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '0',
	      size: '2',
	      material: '0',
	    },
	    price: this.stubPriceVariant1,
	    discount: {
	      amount: this.stubDiscountVariant1,
	      percent: Math.floor((this.stubDiscountVariant1/this.stubPriceVariant1) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '1',
	      size: '0',
	      material: '0',
	    },
	    price: this.stubPriceVariant1,
	    discount: {
	      amount: this.stubDiscountVariant1,
	      percent: Math.floor((this.stubDiscountVariant1/this.stubPriceVariant1) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '1',
	      size: '0',
	      material: '2',
	    },
	    price: this.stubPriceVariant3,
	    discount: {
	      amount: this.stubDiscountVariant3,
	      percent: Math.floor((this.stubDiscountVariant3/this.stubPriceVariant3) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '1',
	      size: '2',
	      material: '0',
	    },
	    price: this.stubPriceVariant1,
	    discount: {
	      amount: this.stubDiscountVariant1,
	      percent: Math.floor((this.stubDiscountVariant1/this.stubPriceVariant1) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '1',
	      size: '2',
	      material: '1',
	    },
	    price: this.stubPriceVariant2,
	    discount: {
	      amount: this.stubDiscountVariant2,
	      percent: Math.floor((this.stubDiscountVariant2/this.stubPriceVariant2) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '2',
	      size: '0',
	      material: '0',
	    },
	    price: this.stubPriceVariant3,
	    discount: {
	      amount: this.stubDiscountVariant3,
	      percent: Math.floor((this.stubDiscountVariant3/this.stubPriceVariant3) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	  {
	    appliedAttributes: {
	      color: '2',
	      size: '2',
	      material: '0',
	    },
	    price: this.stubPriceVariant1,
	    discount: {
	      amount: this.stubDiscountVariant1,
	      percent: Math.floor((this.stubDiscountVariant1/this.stubPriceVariant1) * 100),
	    },
	    id: faker.datatype.uuid(),
	    in_stock: true,
	  },
	];
}

/**
 * Factory for creating DaffConfigurableProducts.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffConfigurableProductFactory extends DaffModelFactory<DaffConfigurableProduct>{
  constructor(){
    super(MockConfigurableProduct);
  }
}
