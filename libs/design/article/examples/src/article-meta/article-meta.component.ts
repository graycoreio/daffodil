import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'article-meta',
  templateUrl: './article-meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleMetaComponent {}
