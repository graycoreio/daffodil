import { NgModule } from '@angular/core';

import { DaffMediaGalleryModule } from '@daffodil/design';
import { DaffImageModule } from '@daffodil/design/image';

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
