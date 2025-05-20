import { faker } from '@faker-js/faker';

import {
  MagentoProductRoute,
  MagentoUrlRewriteEntityTypeEnum,
} from '../../src';

export const createMagentoProductRoute = (partial: Partial<MagentoProductRoute> = {}): MagentoProductRoute => ({
  ...{
    uid: faker.datatype.string(8),
    canonical_url: faker.datatype.string(16),
    meta_description: '',
    name: faker.commerce.product(),
    meta_title: null,
    review_count: faker.number.int({ min: 0, max: 100000 }),
    rating_summary: faker.number.int({ min: 0, max: 100 }),
    redirect_code: 0,
    relative_url: faker.datatype.string(16),
    type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
    sku: faker.datatype.string(8),
    __typename: 'SimpleProduct',
    stock_status: faker.helpers.arrayElement(['IN_STOCK','OUT_OF_STOCK']),
    image: faker.helpers.arrayElement([null, { url: 'testimage.jpg' }]),
    price_range: {
      maximum_price: {
        final_price: {
          value: parseFloat(faker.commerce.price(20.99, 25.99)),
          currency: 'USD',
        },
        regular_price: {
          value: parseFloat(faker.commerce.price(30.99, 35.99)),
          currency: 'USD',
        },
      },
      minimum_price: {
        final_price: {
          value: parseFloat(faker.commerce.price(15.99, 20.99)),
          currency: 'USD',
        },
        regular_price: {
          value: parseFloat(faker.commerce.price(25.99, 30.99)),
          currency: 'USD',
        },
      },
    },
  },
  ...partial,
});
