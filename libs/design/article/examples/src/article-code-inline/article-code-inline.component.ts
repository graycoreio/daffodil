import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-code-inline',
  templateUrl: './article-code-inline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCodeInlineComponent {}
