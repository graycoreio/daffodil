import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandMediaGalleryRoutingModule } from './media-gallery-routing-module';
import { DesignLandMediaGalleryComponent } from './media-gallery.component';

@NgModule({
  declarations: [
    DesignLandMediaGalleryComponent,
  ],
  imports: [
    CommonModule,
    DesignLandMediaGalleryRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
  ],
})
export class DesignLandMediaGalleryModule {

}
