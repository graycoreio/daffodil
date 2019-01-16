import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { ProductGridModule } from '../product-grid/product-grid.module';
import { BestSellersComponent } from './best-sellers.component';
import { StateProductModule } from '@daffodil/state';

@NgModule({
  imports: [
    CommonModule,
    LoadingIconModule,
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
