import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffQtyDropdownModule, DaffAccordionModule, DaffContainerModule } from '@daffodil/design';

import { LoadingIconModule } from '../../../core/loading-icon/loading-icon.module';
import { ImageGalleryModule } from '../../../core/image-gallery/image-gallery.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    ImageGalleryModule,
    LoadingIconModule,
    DaffQtyDropdownModule,
    DaffAccordionModule,
    DaffContainerModule
  ],
  declarations: [
    ProductComponent
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductComponentModule { }
