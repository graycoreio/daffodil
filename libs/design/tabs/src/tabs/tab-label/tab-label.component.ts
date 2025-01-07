import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffPrefixable,
  DaffSuffixable,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

/**
 * DaffTabLabelComponent is used to display the label of a tab panel. Labels may optionally contain a `daffPrefix` or `daffSuffix` to add icons or badges.
 *
 * @example Basic structure of tab label
 * ```html
 * <daff-tab-label>
 *  <div daffPrefix></div>
 *  Label
 *  <div daffSuffix></div
 * </daff-tab-Label>
 * ```
 */
@Component({
  standalone: true,
  selector: 'daff-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrl: './tab-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
  ],
})
export class DaffTabLabelComponent implements DaffPrefixable, DaffSuffixable {
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective) _suffix: DaffSuffixDirective;
}
