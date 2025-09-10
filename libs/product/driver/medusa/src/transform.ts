import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';

import { MedusaProduct } from './types/medusa-product';

/**
 * Transforms a MedusaProduct into a DaffProduct.
 *
 * @param medusaProduct - The Medusa product to transform
 * @returns A DaffProduct with standardized format
 */
export const transformMedusaProduct = (medusaProduct: MedusaProduct): DaffProduct => ({
  id: medusaProduct.id,
  type: DaffProductTypeEnum.Simple,
  name: medusaProduct.title,
  url: medusaProduct.handle || '',
  price: medusaProduct.variants?.[0]?.prices?.[0]?.amount || 0,
  discount: {
    amount: 0,
    percent: 0,
  },
  images: medusaProduct.images?.map(image => ({
    id: image.id,
    url: image.url,
    label: medusaProduct.title,
  })) || [],
  thumbnail: {
    id: 'thumbnail',
    url: medusaProduct?.thumbnail ?? '',
    label: medusaProduct.title,
  },
  description: medusaProduct.description || '',
  short_description: medusaProduct.description?.substring(0, 100) || '',
  meta_title: medusaProduct.title,
  meta_description: medusaProduct.description || '',
  in_stock: medusaProduct.variants?.some(variant =>
    variant.inventory_quantity === undefined || variant.inventory_quantity > 0,
  ) ?? true,
});
