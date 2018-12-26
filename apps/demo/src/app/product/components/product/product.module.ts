import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffQtyDropdownModule, DaffAccordionModule, DaffContainerModule, DaffLoadingIconModule } from '@daffodil/design';

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
    DaffLoadingIconModule,
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
