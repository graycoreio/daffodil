export { Product } from './models/product';
export { ProductImage } from './models/product-image';

import * as fromProduct from './reducers/index';
export { fromProduct };
export { ProductGridContainer } from './containers/product-grid/product-grid.component';
export { BestSellersContainer } from './containers/best-sellers/best-sellers.component';

export { StateProductModule } from './product.module';

export { DaffShopifyProductService } from './drivers/shopify/product.service';
export { DaffProductServiceInterface } from './drivers/interfaces/product-service.interface';
