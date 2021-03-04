import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffContainerModule,
  DaffLoadingIconModule,
} from '@daffodil/design';
import { DaffProductStateModule } from '@daffodil/product/state';

import { ProductGridModule } from '../../components/product-grid/product-grid.module';
import { ProductGridViewComponent } from './product-grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ProductGridModule,
    DaffContainerModule,
    DaffProductStateModule,
  ],
  declarations: [
    ProductGridViewComponent,
  ],
  exports: [
    ProductGridViewComponent,
  ],
})
export class ProductGridViewModule { }
