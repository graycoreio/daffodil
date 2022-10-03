import { NgModule } from '@angular/core';

import {
  DaffMediaGalleryModule,
  DaffImageModule,
} from '@daffodil/design';

import { SkeletonMediaGalleryComponent } from './skeleton-media-gallery.component';

@NgModule({
  declarations: [
    SkeletonMediaGalleryComponent,
  ],
  exports: [
    SkeletonMediaGalleryComponent,
  ],
  imports: [
    DaffImageModule,
    DaffMediaGalleryModule,
  ],
  providers: [],
})
export class SkeletonMediaGalleryModule { }
