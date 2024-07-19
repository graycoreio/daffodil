import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandImageRoutingModule } from './image-routing-module';
import { DesignLandImageComponent } from './image.component';

@NgModule({
  declarations: [
    DesignLandImageComponent,
  ],
  imports: [
    CommonModule,
    DaffDocsExampleViewerContainer,
    DesignLandImageRoutingModule,
    DaffArticleModule,
  ],
})
export class DesignLandImageModule { }
