import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleComponent } from './article/article.component';
import { DaffArticleMetaDirective } from './article-meta/article-meta.directive';

/**
 * @deprecated in favor of {@link DAFF_ARTICLE_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffArticleComponent,
    DaffArticleMetaDirective,
  ],
  exports: [
    DaffArticleComponent,
    DaffArticleMetaDirective,
  ],
})
export class DaffArticleModule { }
