import { faker } from '@faker-js/faker';

import {
  MagentoCategoryRoute,
  MagentoUrlRewriteEntityTypeEnum,
} from '../../src';

export const createMagentoCategoryRoute = (partial: Partial<MagentoCategoryRoute> = {}): MagentoCategoryRoute =>  ({
  ...{
    redirect_code: 0,
    relative_url: faker.string.sample(16),
    type: MagentoUrlRewriteEntityTypeEnum.CATEGORY,
    products: {
      items: [],
    },
  },
  ...partial,
});
