import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

import { DesignLandTagRoutingModule } from './tag-routing.modules';
import { DesignLandTagComponent } from './tag.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandTagComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandTagRoutingModule,
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandTagModule {

}
