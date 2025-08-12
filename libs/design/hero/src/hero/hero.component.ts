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
 * Hero is a top level container designed to be large and captivating.
 * It should be used only once per page, typically as the first component
 * to introduce the page’s main purpose or message.
 *
 * @example
 * ```html
 * <daff-hero>
 *  <div daffHeroIcon>
 *    <img src="assets/summer-sale-icon.svg" alt="Summer sale icon" />
 *  </div>
 *  <div daffHeroTagline>Limited Time Offer</div>
 *  <h1 daffHeroTitle>Summer Collection Sale</h1>
 *  <p daffHeroSubtitle>Up to 50% off select items through July 31</p>
 *  <div daffHeroBody>
 *    <button daff-button color="secondary">Shop the sale</button>
 *    <button daff-button color="theme">Learn more</button>
 *  </div>
 * </daff-hero>
 * ```
 */
@Component({
  selector: 'daff-hero',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    'class': 'daff-hero',
  },
})
export class DaffHeroComponent {
  constructor(private textAlignable: DaffTextAlignableDirective) {
    this.textAlignable.defaultAlignment = 'left';
  }
}
