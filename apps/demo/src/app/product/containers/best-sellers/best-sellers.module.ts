import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductModule } from '@daffodil/product';
import { DaffLoadingIconModule } from '@daffodil/design';

import { BestSellersComponent } from './best-sellers.component';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductGridModule,
    DaffProductModule
  ],
  declarations: [
    BestSellersComponent
  ],
  exports: [
    BestSellersComponent
  ]
})
export class BestSellersModule { }
