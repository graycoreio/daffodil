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
 * DaffButtonComponent is a rectangular contained button with background color.
 *
 * @example Basic button
 * ```html
 * <button daff-button>
 *  <div daffPrefix></div>
 *  Button
 *  <div daffSuffix></div>
 * </button>
 *
 * <a href="/" daff-button>
 *  <div daffPrefix></div>
 *  Linked button
 *  <div daffSuffix></div>
 * </a>
 * ```
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
        'button[daff-button]' + ',' +
        'a[daff-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffPrefixSuffixModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffButtonComponent extends DaffButtonBaseDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-button') class = true;
}
