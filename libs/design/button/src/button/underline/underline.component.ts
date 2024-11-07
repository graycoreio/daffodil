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
 * DaffUnderlineButtonComponent is a borderless button with a custom underline style.
 *
 * ## Usage
 * ```html
 * <button daff-underline-button>
 *  <div daffPrefix></div>
 *  Underline Button
 *  <div daffSuffix></div>
 * </button>
 *
 * <a href="/" daff-underline-button>
 *  <div daffPrefix></div>
 *  Linked underline button
 *  <div daffSuffix></div>
 * </a>
 * ```
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
    'button[daff-underline-button]' + ',' +
    'a[daff-underline-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './underline.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffPrefixSuffixModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffUnderlineButtonComponent
  extends DaffButtonBaseDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-underline-button') class = true;
}
