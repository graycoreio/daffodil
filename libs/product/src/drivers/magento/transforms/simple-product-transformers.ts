import { DaffProduct, DaffProductTypeEnum } from '../../../models/product';
import { getDiscount, getDiscountedPrice, getPrice } from '../helpers/null-checkers';
import { MagentoProduct, MagentoProductStockStatusEnum } from '../models/magento-product';

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
		price: {
			originalPrice: getPrice(product),
			discount: getDiscount(product),
			discountedPrice: getDiscountedPrice(product)
		},
		in_stock: product.stock_status === MagentoProductStockStatusEnum.InStock,
		images: [
			{ url: product.image.url, id: '0', label: product.image.label},
			...transformMediaGalleryEntries(product, mediaUrl)
		],
		description: product.description.html
	}
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
