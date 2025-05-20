import { faker } from '@faker-js/faker';

import {
  MagentoProductRoute,
  MagentoUrlRewriteEntityTypeEnum,
} from '../../src';

export const createMagentoProductRoute = (partial: Partial<MagentoProductRoute> = {}): MagentoProductRoute => ({
  ...{
    uid: faker.string.sample(8),
    canonical_url: faker.string.sample(16),
    meta_description: '',
    name: faker.commerce.product(),
    meta_title: null,
    review_count: faker.number.int({ min: 0, max: 100000 }),
    rating_summary: faker.number.int({ min: 0, max: 100 }),
    redirect_code: 0,
    relative_url: faker.string.sample(16),
    type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
    sku: faker.string.sample(8),
    __typename: 'SimpleProduct',
    stock_status: faker.helpers.arrayElement(['IN_STOCK','OUT_OF_STOCK']),
    image: faker.helpers.arrayElement([null, { url: 'testimage.jpg' }]),
    price_range: {
      maximum_price: {
        final_price: {
          value: parseFloat(faker.commerce.price({ min: 20.99, max: 25.99 })),
          currency: 'USD',
        },
        regular_price: {
          value: parseFloat(faker.commerce.price({ min: 30.99, max: 35.99 })),
          currency: 'USD',
        },
      },
      minimum_price: {
        final_price: {
          value: parseFloat(faker.commerce.price({ min: 15.99, max: 20.99 })),
          currency: 'USD',
        },
        regular_price: {
          value: parseFloat(faker.commerce.price({ min: 25.99, max: 30.99 })),
          currency: 'USD',
        },
      },
    },
  },
  ...partial,
});
