import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-code-inline',
  templateUrl: './article-code-inline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffArticleModule],
})
export class ArticleCodeInlineComponent {}
