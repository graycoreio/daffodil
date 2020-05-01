export { DaffProductFactory } from './factories/product.factory';
export { DaffCompositeProductFactory } from './factories/composite-product.factory';
export { DaffProductImageFactory } from './factories/product-image.factory';
export { DaffInMemoryBackendProductService } from './inmemory-backend/product.service';
export { DaffTestingProductService } from './drivers/testing/product.service';
export { DaffInMemoryProductService } from './drivers/in-memory/product.service';
export { DaffProductInMemoryDriverModule } from './drivers/in-memory/product-driver.module';
export { DaffProductTestingDriverModule } from './drivers/testing/product-driver.module';
export { MockDaffProductFacade } from './helpers/mock-product-facade';
export { DaffProductTestingModule } from './helpers/product-testing.module';

export * from './factories/magento/public_api';
