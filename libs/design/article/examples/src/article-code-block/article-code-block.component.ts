import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-code-block',
  templateUrl: './article-code-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCodeBlockComponent {}
