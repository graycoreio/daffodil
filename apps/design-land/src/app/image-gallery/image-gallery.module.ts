import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageGalleryModule } from '@daffodil/design';

import { DesignLandImageGalleryRoutingModule } from './image-gallery-routing-module';
import { DesignLandImageGalleryComponent } from './image-gallery.component';


@NgModule({
  declarations: [
    DesignLandImageGalleryComponent,
  ],
  imports: [
    CommonModule,
    DesignLandImageGalleryRoutingModule,

    DaffImageGalleryModule,

  ],
})
export class DesignLandImageGalleryModule { }
