import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffButtonBaseDirective } from '../button-base.directive';

/**
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
  /* eslint-disable-next-line @angular-eslint/component-selector */
  selector: 'button[daff-underline-button]' + ',' + 'a[daff-underline-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './underline.component.scss',
  host: {
    'class': 'daff-underline-button',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffUnderlineButtonComponent extends DaffButtonBaseDirective {}
