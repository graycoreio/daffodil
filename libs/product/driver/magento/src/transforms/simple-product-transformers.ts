import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffProduct,
  DaffProductImage,
} from '@daffodil/product';

import { DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM } from '../injection-tokens/transforms/product-preview/preview.token';
import { DaffMagentoProductTransform } from '../interfaces/product-preview-transform.type';
import { MagentoProduct } from '../models/magento-product';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct.
 *
 * @param product a magento product
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoSimpleProductTransformers {

  constructor(
    @Inject(DAFF_PRODUCT_MAGENTO_PRODUCT_PREVIEW_TRANSFORM) private productPreviewTransform: DaffMagentoProductTransform,
  ) {}

  transformMagentoSimpleProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
    return {
      ...this.productPreviewTransform(product, mediaUrl),
      ...product.description?.html && { description: product.description?.html },
      ...product.short_description?.html && { short_description: product.short_description?.html },
      ...product.meta_title && { meta_title: product.meta_title },
      ...product.meta_description && { meta_description: product.meta_description },
      ...product.canonical_url && { canonicalUrl: product.canonical_url },
      ...product.media_gallery_entries && { images: transformMediaGalleryEntries(product, mediaUrl) },
    };
  }
}

function transformMediaGalleryEntries(product: MagentoProduct, mediaUrl: string): DaffProductImage[] {
  return product.media_gallery_entries?.map(image => ({
    url: mediaUrl + 'catalog/product' + image.file,
    label: image.label,
    id: image.uid.toString(),
  })) || [];
}
