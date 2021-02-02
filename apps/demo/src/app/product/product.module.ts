import { NgModule } from '@angular/core';

import { BestSellersModule } from './containers/best-sellers/best-sellers.module';
import { ProductGridViewModule } from './pages/product-grid-view/product-grid-view.module';
import { ProductViewModule } from './pages/product-view/product-view.module';

@NgModule({
  imports: [
    ProductGridViewModule,
    ProductViewModule,
    BestSellersModule,
  ],
  exports: [
    ProductGridViewModule,
    ProductViewModule,
    BestSellersModule,
  ],
})
export class ProductModule { }
