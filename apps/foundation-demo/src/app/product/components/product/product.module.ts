import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { ImageGalleryModule } from '../../../core/image-gallery/image-gallery.module';
import { ProductComponent } from './product.component';

import {
  DaffQtyDropdownModule,
  DaffAccordionModule,
  DaffContainerModule,
  DaffLinkModule
} from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    ImageGalleryModule,
    LoadingIconModule,
    DaffQtyDropdownModule,
    DaffAccordionModule,
    DaffContainerModule,
    DaffLinkModule
  ],
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductComponentModule { }
