import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandArticleRoutingModule } from './article-routing.module';
import { DesignLandArticleComponent } from './article.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandArticleComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandArticleRoutingModule,
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandArticleModule {

}
