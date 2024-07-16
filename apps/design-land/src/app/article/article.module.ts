import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsExampleViewerContainer } from '@daffodil/docs-components';

import { DesignLandArticleRoutingModule } from './article-routing.module';
import { DesignLandArticleComponent } from './article.component';

@NgModule({
  declarations: [
    DesignLandArticleComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandArticleRoutingModule,
    DaffDocsExampleViewerContainer,
  ],
})
export class DesignLandArticleModule {

}
