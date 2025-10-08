import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';

import { FakeProduct } from './fake-product';

export const transformFakeProduct = (product: FakeProduct): DaffProduct => ({
  id: product.id.toString(),
  images: [
    {
      id: '1',
      label: product.title,
      url: product.image,
    },
  ],
  name: product.title,
  thumbnail: {
    id: '1',
    label: product.title,
    url: product.image,
  },
  type: DaffProductTypeEnum.Simple,
  url: '/product/' + product.id.toString(),
  price: product.price,
  description: product.description,
  brand: product.category,
  meta_title: product.title,
  meta_description: product.description,
});
