import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleComponent } from './article/article.component';
import { DaffArticleLeadDirective } from './article-lead/article-lead.directive';
import { DaffArticleMetaDirective } from './article-meta/article-meta.directive';
import { DaffArticleTitleDirective } from './article-title/article-title.directive';

@NgModule({
  imports: [
    CommonModule,
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
    DaffArticleMetaDirective,
  ],
})
export class DaffArticleModule { }
