import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-ol',
  templateUrl: './article-ol.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffArticleModule],
})
export class ArticleOlComponent {}
