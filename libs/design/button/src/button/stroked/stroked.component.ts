import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import { DaffSpinnerComponent } from '@daffodil/design/spinner';

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

  selector: 'button[daff-stroked-button]' + ',' + 'a[daff-stroked-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './stroked.component.scss',
  host: {
    'class': 'daff-stroked-button',
    '[class.elevated]': 'elevated',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSpinnerComponent,
  ],
})
export class DaffStrokedButtonComponent extends DaffButtonBaseDirective {
  /**
   * Whether or not the button displays a shadow.
   */
  elevated = input(false);
}
