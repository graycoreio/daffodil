import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffContainerModule } from '@daffodil/design';
import { StateProductModule } from '@daffodil/state';

import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';
import { ProductGridViewComponent } from './product-grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    LoadingIconModule,
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
