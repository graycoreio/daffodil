import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARTICLE_EXAMPLES } from './examples';
import { DaffArticleModule } from '@daffodil/design';

@NgModule({
  declarations: [
    ...ARTICLE_EXAMPLES
  ],
  imports: [
    CommonModule,
    DaffArticleModule
  ],
  entryComponents: [
    ...ARTICLE_EXAMPLES
  ]
})
export class ArticleExamplesModule { }
