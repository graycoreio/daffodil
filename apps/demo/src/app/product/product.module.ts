import { NgModule } from '@angular/core';

import { ProductGridViewModule } from './pages/product-grid-view/product-grid-view.module';
import { ProductViewModule } from './pages/product-view/product-view.module';
import { BestSellersModule } from './containers/best-sellers/best-sellers.module';

@NgModule({
  imports: [
    ProductGridViewModule,
    ProductViewModule,
    BestSellersModule
  ],
  exports: [
    ProductGridViewModule,
    ProductViewModule,
    BestSellersModule
  ]
})
export class ProductModule { }
