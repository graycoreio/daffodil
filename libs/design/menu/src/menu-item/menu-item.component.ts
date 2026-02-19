/* eslint-disable quote-props */
import { FocusableOption } from '@angular/cdk/a11y';
import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  ElementRef,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

import { DAFF_MENU_ITEM_TOKEN } from './menu-item.token';
import { DaffMenuService } from '../services/menu.service';

/**
 * Individual clickable items within the menu. Applied to `<button>` or `<a>` elements.
 *
 * @example
 * ```
 * <a daff-menu-item href="/">Settings</a>
 * <button daff-menu-item href="/">Settings</button>
 * ```
 */
@Component({
  selector:
    'a[daff-menu-item]' + ',' +
    'button[daff-menu-item]',
  templateUrl: './menu-item.component.html',
  host: {
    'class': 'daff-menu-item',
    'role': 'menuitem',
    '(click)': 'onClick()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: DAFF_MENU_ITEM_TOKEN, useExisting: DaffMenuItemComponent }],
})

export class DaffMenuItemComponent implements FocusableOption {
  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _menuService: DaffMenuService,
  ) {}

  /**
   * @docs-private
   */
  onClick() {
    this._menuService.close();
  }

  /**
   * Focus the menu item.
   */
  focus() {
    this._elementRef.nativeElement.focus();
  }
}
