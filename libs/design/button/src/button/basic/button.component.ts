import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

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
/* eslint-disable quote-props */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[daff-button]' + ',' + 'a[daff-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './button.component.scss',
  host: {
    'class': 'daff-button',
    '[class.elevated]': 'elevated',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffButtonComponent extends DaffButtonBaseDirective {
  /**
   * Whether or not the button displays a shadow.
   */
  @Input() elevated = false;
}
