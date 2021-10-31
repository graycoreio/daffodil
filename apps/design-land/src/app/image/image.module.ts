import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DaffArticleModule } from '@daffodil/design';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandImageRoutingModule } from './image-routing-module';
import { DesignLandImageComponent } from './image.component';

@NgModule({
  declarations: [
    DesignLandImageComponent,
  ],
  imports: [
    CommonModule,
    DesignLandExampleViewerModule,
    DesignLandImageRoutingModule,
    DaffArticleModule
  ]
})
export class DesignLandImageModule {
  
}
