/* eslint-disable quote-props */
import { FocusableOption } from '@angular/cdk/a11y';
import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  ElementRef,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

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
  styleUrls: ['./menu-item.component.scss'],
  host: {
    'class': 'daff-menu-item',
    'role': 'menuitem',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffMenuItemComponent implements FocusableOption {
  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  /**
   * Focus the menu item.
   */
  focus() {
    this._elementRef.nativeElement.focus();
  }
}
