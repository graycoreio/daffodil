import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandImageRoutingModule } from './image-routing-module';
import { DesignLandImageComponent } from './image.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandImageComponent,
  ],
  imports: [
    CommonModule,
    DesignLandExampleViewerModule,
    DesignLandImageRoutingModule,
    DaffArticleModule,
  ],
})
export class DesignLandImageModule { }
