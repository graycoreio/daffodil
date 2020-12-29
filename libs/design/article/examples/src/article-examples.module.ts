import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffArticleModule } from '@daffodil/design';

import { ARTICLE_EXAMPLES } from './examples';

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
