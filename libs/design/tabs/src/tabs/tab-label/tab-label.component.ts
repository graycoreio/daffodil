import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
} from '@daffodil/design';

/**
 * Tab label is the clicakble label that activates its corresponding tab panel. Labels can contain text, icons, or both.
 *
 * @example
 * ```html
 * <daff-tab-label>
 *  <div daffPrefix></div>
 *  Label
 *  <div daffSuffix></div
 * </daff-tab-Label>
 * ```
 */
@Component({
  selector: 'daff-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrl: './tab-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    DaffPrefixDirective,
    DaffSuffixDirective,
  ],
})
export class DaffTabLabelComponent {
  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  /**
   * @docs-private
   */
  @ContentChild(DaffSuffixDirective) _suffix: DaffSuffixDirective;
}
