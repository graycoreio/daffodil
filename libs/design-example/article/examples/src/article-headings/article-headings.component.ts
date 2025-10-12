import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-headings',
  templateUrl: './article-headings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_ARTICLE_COMPONENTS,
  ],
})
export class ArticleHeadingsComponent {}
