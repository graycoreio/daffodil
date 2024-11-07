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
 * DaffFlatButtonComponent is a rectangular contained button no background.
 *
 * ## Usage
 * ```html
 * <button daff-flat-button>
 *  <div daffPrefix></div>
 *  Flat Button
 *  <div daffSuffix></div>
 * </button>
 *
 * <a href="/" daff-flat-button>
 *  <div daffPrefix></div>
 *  Linked flat button
 *  <div daffSuffix></div>
 * </a>
 * ```
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
    'button[daff-flat-button]' + ',' +
    'a[daff-flat-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './flat.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffPrefixSuffixModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffFlatButtonComponent
  extends DaffButtonBaseDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-flat-button') class = true;
}
