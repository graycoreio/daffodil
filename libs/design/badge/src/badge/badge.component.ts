import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  ViewEncapsulation,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorableDirective,
  DaffPrefixDirective,
  DaffStatusableDirective,
} from '@daffodil/design';

import {
  DaffBadgeAppearance,
  DaffBadgeAppearanceEnum,
} from './badge-appearance';
import { DaffBadgeSizableDirective } from './badge-sizable.directive';

/**
 * DaffBadgeComponent is a compact visual label or indicator used to
 * convey status or display short pieces of information.
 *
 * @example
 * ```html
 *  <daff-badge color="primary" appearance="outlined">
 *   <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
 *   Verified
 *  </daff-badge>
 * ```
 */

@Component({
  selector: 'daff-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
    {
      directive: DaffBadgeSizableDirective,
      inputs: ['size'],
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-badge',
    '[class.outlined]': 'appearance() === "outlined"',
    '[class.filled]': 'appearance() === "filled"',
  },
})
export class DaffBadgeComponent {
  /**
   * @docs-private
   */
  _prefix = contentChild(DaffPrefixDirective);

  /**
   * The visual style of the badge. Defaults to `filled`.
   */
  appearance = input(DaffBadgeAppearanceEnum.Filled, {
    transform: (value: DaffBadgeAppearance | '' | null | undefined) =>
      value || DaffBadgeAppearanceEnum.Filled,
  });

  constructor(
    private sizableDirective: DaffBadgeSizableDirective,
    private colorableDirective: DaffColorableDirective,
  ) {
    this.sizableDirective.defaultSize = 'md';
    this.colorableDirective.defaultColor = 'light';
  }
}
