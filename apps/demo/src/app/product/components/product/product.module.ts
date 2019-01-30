import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ImageGalleryModule } from '../../../core/image-gallery/image-gallery.module';
import { ProductComponent } from './product.component';

import { DaffQtyDropdownModule, 
  DaffLinkModule,
  DaffAccordionModule, 
  DaffContainerModule, 
  DaffLoadingIconModule } from '@daffodil/design';

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
