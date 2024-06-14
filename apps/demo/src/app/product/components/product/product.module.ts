import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffFormFieldModule,
  DaffQuantityFieldModule,
} from '@daffodil/design';
import { DaffAccordionModule } from '@daffodil/design/accordion';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { ProductComponent } from './product.component';
import { ImageGalleryModule } from '../../../core/image-gallery/image-gallery.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageGalleryModule,
    DaffLoadingIconModule,
    DaffAccordionModule,
    DaffContainerModule,
    DaffFormFieldModule,
    DaffQuantityFieldModule,
  ],
  declarations: [
    ProductComponent,
  ],
  exports: [
    ProductComponent,
  ],
})
export class ProductComponentModule { }
