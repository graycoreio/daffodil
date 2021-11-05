import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-blockquote',
  templateUrl: './article-blockquote.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleBlockquoteComponent {}
