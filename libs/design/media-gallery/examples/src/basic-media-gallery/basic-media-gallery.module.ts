import { NgModule } from '@angular/core';

import {
  DaffMediaGalleryModule,
  DaffImageModule,
} from '@daffodil/design';

import { BasicMediaGalleryComponent } from './basic-media-gallery.component';

@NgModule({
  declarations: [
    BasicMediaGalleryComponent,
  ],
  exports: [
    BasicMediaGalleryComponent,
  ],
  imports: [
    DaffImageModule,
    DaffMediaGalleryModule,
  ],
  providers: [],
})
export class BasicMediaGalleryModule { }
