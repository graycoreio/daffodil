/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  DaffColorableDirective,
  DaffCompactableDirective,
  DaffArticleEncapsulatedDirective,
  DaffManageContainerLayoutDirective,
  DaffTextAlignableDirective,
} from '@daffodil/design';

/**
 * Callout is a versatile, pre-styled container used to highlight
 * key pieces of content in a visually distinct way.
 *
 * @example
 * ```html
 * <daff-callout>
 *   <div daffCalloutIcon></div>
 *   <div daffCalloutTagline></div>
 *   <h2 daffCalloutTitle></h2>
 *   <p daffCalloutSubtitle></p>
 *   <div daffCalloutBody></div>
 * </daff-callout>
 * ```
 */
@Component({
  selector: 'daff-callout',
  template: '<ng-content></ng-content>',
  styleUrls: ['./callout.component.scss'],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    { directive: DaffManageContainerLayoutDirective },
    {
      directive: DaffTextAlignableDirective,
      inputs: ['textAlignment'],
    },
    {
      directive: DaffCompactableDirective,
      inputs: ['compact'],
    },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  host: {
    'class': 'daff-callout',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DaffCalloutComponent {
  constructor(private textAlignable: DaffTextAlignableDirective) {
    this.textAlignable.defaultAlignment = 'left';
  }
}
