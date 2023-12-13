import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import {
  DaffQtyDropdownModule,
  DaffAccordionModule,
  DaffLoadingIconModule,
} from '@daffodil/design';
import { DaffContainerModule } from '@daffodil/design/container';

import { ProductComponent } from './product.component';
import { ImageGalleryModule } from '../../../core/image-gallery/image-gallery.module';

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
