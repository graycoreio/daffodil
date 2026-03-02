import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffSpinnerComponent } from '@daffodil/design/spinner';

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

  selector: 'button[daff-icon-button]' + ',' + 'a[daff-icon-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './icon.component.scss',
  host: {
    'class': 'daff-icon-button',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSpinnerComponent,
  ],
})
export class DaffIconButtonComponent extends DaffButtonBaseDirective {
}
