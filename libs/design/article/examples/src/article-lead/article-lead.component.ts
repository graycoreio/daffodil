import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-lead',
  templateUrl: './article-lead.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleLeadComponent {}
