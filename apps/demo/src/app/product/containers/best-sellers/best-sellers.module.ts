import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design';
import { DaffProductStateModule } from '@daffodil/product/state';

import { BestSellersComponent } from './best-sellers.component';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductGridModule,
    DaffProductStateModule,
  ],
  declarations: [
    BestSellersComponent,
  ],
  exports: [
    BestSellersComponent,
  ],
})
export class BestSellersModule { }
