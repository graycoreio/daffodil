import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContainerModule } from '@daffodil/design';
import { DaffProductModule } from '@daffodil/product';

import { DaffLoadingIconModule } from '@daffodil/design';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';
import { ProductGridViewComponent } from './product-grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductGridModule,
    DaffContainerModule,
    DaffProductModule
  ],
  declarations: [
    ProductGridViewComponent
  ],
  exports: [
    ProductGridViewComponent
  ]
})
export class ProductGridViewModule { }
