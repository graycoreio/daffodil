import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateProductModule } from '@daffodil/product';
import { DaffLoadingIconModule } from '@daffodil/design';

import { ProductGridModule } from '../product-grid/product-grid.module';
import { BestSellersComponent } from './best-sellers.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductGridModule,
    StateProductModule
  ],
  declarations: [
    BestSellersComponent
  ],
  exports: [
    BestSellersComponent
  ]
})
export class BestSellersModule { }
