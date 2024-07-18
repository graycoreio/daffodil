import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-headings',
  templateUrl: './article-headings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleHeadingsComponent {}
