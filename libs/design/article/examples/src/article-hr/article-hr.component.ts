import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-hr',
  templateUrl: './article-hr.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleHrComponent {}
