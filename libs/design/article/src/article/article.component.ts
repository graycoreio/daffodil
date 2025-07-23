/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

/**
 * A component for creating articles within your page.
 */
@Component({
  selector: 'daff-article',
  template: '<ng-content></ng-content>',
  styleUrls: ['./article.component.scss'],
  host: {
    'class': 'daff-article',
    'role': 'article',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffArticleComponent {}
