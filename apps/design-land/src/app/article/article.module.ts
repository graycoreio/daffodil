import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandArticleComponent } from './article.component';
import { DesignLandArticleRoutingModule } from './article-routing.module';

import { DaffArticleModule } from '@daffodil/design';
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
