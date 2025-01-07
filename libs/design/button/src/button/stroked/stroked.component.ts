import { NgIf } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

import { DaffButtonBaseDirective } from '../button-base.directive';

/**
 * DaffStrokedButtonComponent is a rectangular outlined button with no background color.
 *
 * @example Stroked button
 * ```html
 * <button daff-stroked-button>
 *  <div daffPrefix></div>
 *  Stroked Button
 *  <div daffSuffix></div>
 * </button>
 *
 * <a href="/" daff-stroked-button>
 *  <div daffPrefix></div>
 *  Linked stroked button
 *  <div daffSuffix></div>
 * </a>
 * ```
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
    'button[daff-stroked-button]' + ',' +
    'a[daff-stroked-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './stroked.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffPrefixSuffixModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffStrokedButtonComponent
  extends DaffButtonBaseDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-stroked-button') class = true;
}
