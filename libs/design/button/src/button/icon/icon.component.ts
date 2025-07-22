import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffButtonBaseDirective } from '../button-base.directive';

/**
 * DaffIconButtonComponent is an icon button used with icon fonts.
 *
 * @example Icon button
 * ```html
 * <button daff-icon-button>
 *  <fa-icon [icon]="faPlus"></fa-icon>
 * </button>
 *
 * <a href="/" daff-icon-button>
 *  <fa-icon [icon]="faPlus"></fa-icon>
 * </a>
 * ```
 */
/* eslint-disable quote-props */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[daff-icon-button]' + ',' + 'a[daff-icon-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './icon.component.scss',
  host: {
    'class': 'daff-icon-button',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffIconButtonComponent extends DaffButtonBaseDirective {
}
