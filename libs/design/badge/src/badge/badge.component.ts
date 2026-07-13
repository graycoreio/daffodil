import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  input,
  ViewEncapsulation,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorableDirective,
  DaffPrefixDirective,
  DaffStatusableDirective,
} from '@daffodil/design';

import { DaffBadgeAppearance } from './badge-appearance';
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
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  /**
   * The visual style of the badge.
   */
  appearance = input<DaffBadgeAppearance>('filled');

  constructor(
    private sizableDirective: DaffBadgeSizableDirective,
    private colorableDirective: DaffColorableDirective,
  ) {
    this.sizableDirective.defaultSize = 'md';
    this.colorableDirective.defaultColor = 'light';
  }
}
