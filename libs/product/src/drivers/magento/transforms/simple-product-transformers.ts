import { DaffProduct, DaffProductTypeEnum } from '../../../models/product';
import { MagentoProduct } from '../models/magento-product';

/**
 * Transforms the magento MagentoProduct from the magento product query into a DaffProduct. 
 * @param product a magento product
 */
export function transformMagentoSimpleProduct(product: MagentoProduct, mediaUrl: string): DaffProduct {
	return {
		type: DaffProductTypeEnum.Simple,
		id: product.sku,
		url: product.url_key,
		name: product.name,
		price: getPrice(product),
		images: [
			{ url: product.image.url, id: '0', label: product.image.label},
			...transformMediaGalleryEntries(product, mediaUrl)
		],
		description: product.description.html
	}
}

/**
 * A function for null checking an object.
 */
function getPrice(product: MagentoProduct): string {
	return !product.price_range || 
		!product.price_range.maximum_price || 
		!product.price_range.maximum_price.regular_price || 
		!!product.price_range.maximum_price.regular_price.value !== null
	? product.price_range.maximum_price.regular_price.value.toString() : '';
}

function transformMediaGalleryEntries(product: MagentoProduct, mediaUrl: string) {
	return product.media_gallery_entries ? product.media_gallery_entries.map(image => {
		return {
			url: mediaUrl + 'catalog/product' + image.file,
			label: image.label,
			id: image.id.toString()
		}
	}) : []
}
