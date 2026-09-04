import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffSpinnerComponent } from '@daffodil/design/spinner';

import { DaffButtonBaseDirective } from '../button-base.directive';

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 *
 * DaffUnderlineButtonComponent is a borderless button with a custom underline style.
 *
 * @example Underline button
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
/* eslint-disable quote-props */
@Component({
  selector: 'button[daff-underline-button]' + ',' + 'a[daff-underline-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './underline.component.scss',
  host: {
    'class': 'daff-underline-button',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSpinnerComponent,
  ],
})
export class DaffUnderlineButtonComponent extends DaffButtonBaseDirective {}
