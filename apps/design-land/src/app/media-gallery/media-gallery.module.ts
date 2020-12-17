import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaGalleryComponent } from './media-gallery.component';

import { DaffMediaGalleryModule, DaffImageModule } from '@daffodil/design';
import { DesignLandMediaGalleryRoutingModule } from './media-gallery-routing-module';


@NgModule({
  declarations: [
    MediaGalleryComponent
  ],
  imports: [
    CommonModule,
    DesignLandMediaGalleryRoutingModule,

    DaffMediaGalleryModule,
    DaffImageModule
  ]
})
export class MediaGalleryModule { }
