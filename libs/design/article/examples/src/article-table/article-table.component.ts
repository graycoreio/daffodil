import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-table',
  templateUrl: './article-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleTableComponent {}
