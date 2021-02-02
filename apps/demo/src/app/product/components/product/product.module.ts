import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import {
  DaffQtyDropdownModule,
  DaffAccordionModule,
  DaffContainerModule,
  DaffLoadingIconModule,
} from '@daffodil/design';

import { ImageGalleryModule } from '../../../core/image-gallery/image-gallery.module';
import { ProductComponent } from './product.component';


@NgModule({
  imports: [
    CommonModule,
    ImageGalleryModule,
    DaffLoadingIconModule,
    DaffQtyDropdownModule,
    DaffAccordionModule,
    DaffContainerModule,
  ],
  declarations: [
    ProductComponent,
  ],
  exports: [
    ProductComponent,
  ],
})
export class ProductComponentModule { }
