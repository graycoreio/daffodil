import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandMediaGalleryRoutingModule } from './media-gallery-routing-module';
import { DesignLandMediaGalleryComponent } from './media-gallery.component';

@NgModule({
  declarations: [
    DesignLandMediaGalleryComponent,
  ],
  imports: [
    CommonModule,
    DesignLandMediaGalleryRoutingModule,
    DaffDocsExampleViewerContainer,

    DaffArticleModule,
  ],
})
export class DesignLandMediaGalleryModule {

}
