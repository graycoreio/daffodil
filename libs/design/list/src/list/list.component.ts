import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

/* eslint-disable quote-props */
/**
 * A standard list used for grouping generic content.
 *
 * @example
 * ```html
 * <daff-list>
 *  <daff-list-item>List item</daff-list-item>
 *  <daff-list-item>List item</daff-list-item>
 * </daff-list>
 * ```
 */
@Component({
  selector: 'daff-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list.component.scss'],
  host: {
    'class': 'daff-list',
    'role': 'list',
  },
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffListComponent { }
