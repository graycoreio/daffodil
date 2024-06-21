import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleComponent } from './article/article.component';
import { DaffArticleMetaDirective } from './article-meta/article-meta.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffArticleComponent,
    DaffArticleMetaDirective,
  ],
  exports: [
    DaffArticleComponent,
    DaffArticleMetaDirective,
  ],
})
export class DaffArticleModule { }
