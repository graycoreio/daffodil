import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContainerModule } from '@daffodil/design';
import { StateProductModule } from '@daffodil/product';

import { DaffLoadingIconModule } from '@daffodil/design';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';
import { ProductGridViewComponent } from './product-grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductGridModule,
    DaffContainerModule,
    StateProductModule
  ],
  declarations: [
    ProductGridViewComponent
  ],
  exports: [
    ProductGridViewComponent
  ]
})
export class ProductGridViewModule { }
