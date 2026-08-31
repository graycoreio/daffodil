/* eslint-disable quote-props */
import {
  FocusableOption,
  FocusMonitor,
  FocusOrigin,
} from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

import { provideDaffMenuItemToken } from './menu-item.token';
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
  providers: [provideDaffMenuItemToken(DaffMenuItemComponent)],
})

export class DaffMenuItemComponent implements FocusableOption, AfterViewInit, OnDestroy {
  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _menuService: DaffMenuService,
    private _focusMonitor: FocusMonitor,
  ) {}

  /**
   * @docs-private
   *
   * Monitoring the item is what lets `focus` mark it as keyboard focused.
   */
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, false);
  }

  /**
   * @docs-private
   */
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  /**
   * @docs-private
   */
  onClick() {
    this._menuService.close();
  }

  /**
   * Focus the menu item. The item only takes on focus styling when `origin` is `keyboard`.
   */
  focus(origin?: FocusOrigin, options?: FocusOptions) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
}
