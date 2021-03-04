import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design';
import { DaffProductStateModule } from '@daffodil/product/state';

import { ProductGridModule } from '../../components/product-grid/product-grid.module';
import { BestSellersComponent } from './best-sellers.component';

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
