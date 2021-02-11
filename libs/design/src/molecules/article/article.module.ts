import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffArticleComponent } from './article/article.component';
import { DaffArticleTitleDirective } from './article-title/article-title.directive';
import { DaffArticleLeadDirective } from './article-lead/article-lead.directive';
import { DaffArticleMetaDirective } from './article-meta/article-meta.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
		DaffArticleComponent,
		DaffArticleTitleDirective,
    DaffArticleLeadDirective,
    DaffArticleMetaDirective,
  ],
  exports: [
		DaffArticleComponent,
		DaffArticleTitleDirective,
    DaffArticleLeadDirective,
    DaffArticleMetaDirective
  ]
})
export class DaffArticleModule { }
