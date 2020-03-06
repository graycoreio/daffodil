import { ProductNode } from './product-node';

export interface MagentoGetProductQueryResponse {
	products: MagentoGetProductQueryProducts;
	storeConfig: MagentoGetProductQueryStoreConfig;
}

export interface MagentoGetProductQueryProducts {
	items: ProductNode[];
}

export interface MagentoGetProductQueryStoreConfig {
	secure_base_media_url: string;
}
