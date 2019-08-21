import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageGalleryComponent } from './image-gallery.component';

import { DaffImageGalleryModule } from '@daffodil/design';
import { DesignLandImageGalleryRoutingModule } from './image-gallery-routing-module';


@NgModule({
  declarations: [
    ImageGalleryComponent
  ],
  imports: [
    CommonModule,
    DesignLandImageGalleryRoutingModule,

    DaffImageGalleryModule

  ]
})
export class ImageGalleryModule { }
