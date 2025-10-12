import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-blockquote',
  templateUrl: './article-blockquote.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_ARTICLE_COMPONENTS,
  ],
})
export class ArticleBlockquoteComponent {}
