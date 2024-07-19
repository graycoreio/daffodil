import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-ul',
  templateUrl: './article-ul.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffArticleModule],
})
export class ArticleUlComponent {}
