import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-link',
  templateUrl: './article-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleLinkComponent {}
