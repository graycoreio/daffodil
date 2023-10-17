import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { ARTICLE_EXAMPLES } from './examples';

@NgModule({
  declarations: [
    ...ARTICLE_EXAMPLES,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
  ],
})
export class ArticleExamplesModule { }
