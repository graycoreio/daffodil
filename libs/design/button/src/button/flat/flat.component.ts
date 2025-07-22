import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffButtonBaseDirective } from '../button-base.directive';

/**
 * DaffFlatButtonComponent is a rectangular contained button no background.
 *
 * @example Flat button
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
/* eslint-disable quote-props */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[daff-flat-button]' + ',' + 'a[daff-flat-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './flat.component.scss',
  host: {
    'class': 'daff-flat-button',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffFlatButtonComponent extends DaffButtonBaseDirective {}
