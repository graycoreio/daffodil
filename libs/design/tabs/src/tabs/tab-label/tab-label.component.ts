import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
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
    DaffPrefixDirective,
    DaffSuffixDirective,
  ],
})
export class DaffTabLabelComponent {
  /**
   * @docs-private
   */
  _prefix = contentChild(DaffPrefixDirective);

  /**
   * @docs-private
   */
  _suffix = contentChild(DaffSuffixDirective);
}
