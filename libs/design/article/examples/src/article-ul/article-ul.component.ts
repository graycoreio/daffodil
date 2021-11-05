import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-ul',
  templateUrl: './article-ul.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleUlComponent {}
