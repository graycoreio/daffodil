import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconModule } from '@daffodil/design';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffProductStateModule } from '@daffodil/product/state';

import { ProductGridViewComponent } from './product-grid-view.component';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';

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
