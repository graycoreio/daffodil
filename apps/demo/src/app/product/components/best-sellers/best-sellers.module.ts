import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffProductModule } from '@daffodil/product';
import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductGridModule } from '../product-grid/product-grid.module';
import { BestSellersComponent } from './best-sellers.component';

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
