import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

/* eslint-disable quote-props */
/**
 * A navigation list intended for use with anchor elements (`<a>`).
 *
 * @example
 * ```html
 * <daff-nav-list aria-label="Sidebar links">
 *  <a href="/" daff-list-item></a>
 *  <a href="/" daff-list-item></a>
 * </daff-nav-list>
 * ```
 */
@Component({
  selector: 'daff-nav-list',
  template: '<ng-content></ng-content>',
  styleUrl: './nav-list.component.scss',
  host: {
    'class': 'daff-nav-list',
    'role': 'navigation',
  },
  hostDirectives: [
    {
      directive: DaffArticleEncapsulatedDirective,
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffNavListComponent {}
