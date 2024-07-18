import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-ol',
  templateUrl: './article-ol.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleOlComponent {}
