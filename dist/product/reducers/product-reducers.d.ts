import { daffProductGridReducer } from './product-grid/product-grid.reducer';
import { daffProductReducer } from './product/product.reducer';
import { daffBestSellersReducer } from './best-sellers/best-sellers.reducer';
import { daffProductEntitiesReducer } from './product-entities/product-entities.reducer';
import { daffConfigurableProductEntitiesReducer } from './configurable-product-entities/configurable-product-entities.reducer';
import { daffCompositeProductEntitiesReducer } from './composite-product-entities/composite-product-entities.reducer';
/**
 * Returns state values from all product related reducers.
 */
export declare const daffProductReducers: {
    products: typeof daffProductEntitiesReducer;
    productGrid: typeof daffProductGridReducer;
    product: typeof daffProductReducer;
    bestSellers: typeof daffBestSellersReducer;
    configurableProductAttributes: typeof daffConfigurableProductEntitiesReducer;
    compositeProductOptions: typeof daffCompositeProductEntitiesReducer;
};
