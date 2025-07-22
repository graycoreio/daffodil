import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

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
/* eslint-disable quote-props */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[daff-stroked-button]' + ',' + 'a[daff-stroked-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './stroked.component.scss',
  host: {
    'class': 'daff-stroked-button',
    '[class.elevated]': 'elevated',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffStrokedButtonComponent extends DaffButtonBaseDirective {
  /**
   * Whether or not the button displays a shadow.
   */
  @Input() elevated = false;
}
