import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import { DaffProductStateModule } from '@daffodil/product/state';
import { DaffRelatedProductStateModule } from '@daffodil/related-products/state';
import { DaffUpsellProductStateModule } from '@daffodil/upsell-products/state';

import { BestSellersComponent } from './best-sellers.component';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductGridModule,
    DaffProductStateModule,
    DaffRelatedProductStateModule,
    DaffUpsellProductStateModule,
  ],
  declarations: [
    BestSellersComponent,
  ],
  exports: [
    BestSellersComponent,
  ],
})
export class BestSellersModule { }
