/* eslint-disable quote-props */
import {
  ConfigurableFocusTrapFactory,
  ConfigurableFocusTrap,
  FocusKeyManager,
  FocusableOption,
} from '@angular/cdk/a11y';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  QueryList,
  ContentChildren,
  ViewEncapsulation,
} from '@angular/core';

import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../config/menu-config';
import { DaffMenuItemComponent } from '../menu-item/menu-item.component';
import { DAFF_MENU_ITEM_TOKEN } from '../menu-item/menu-item.token';
import { DaffMenuService } from '../services/menu.service';

/**
 * The floating panel that contains menu items.
 *
 * @example
 * ```html
 * <daff-menu>
 *  <button daff-menu-item>
 *    <fa-icon [icon]="faEdit" daffPrefix></fa-icon>
 *      Edit
 *    </button>
 *    <button daff-menu-item>
 *      <fa-icon [icon]="faTrash" daffPrefix></fa-icon>
 *      Delete
 *    </button>
 *    <a href="/settings" daff-menu-item>
 *      <fa-icon [icon]="faCog" daffPrefix></fa-icon>
 *      Settings
 *    </a>
 * </daff-menu>
 * ```
 */
@Component({
  selector: 'daff-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.None, // Required to allow breadcrumb items to take on `.daff-menu-item` styles
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-menu',
    'tabindex': '0',
    'role': 'menu',
    '[id]': 'config.menuId',
    '(keydown)': 'handleKeydown($event)',
  },
  imports: [
    DaffMenuItemComponent,
  ],
})
export class DaffMenuComponent implements AfterContentInit, AfterViewInit {
  private _focusTrap: ConfigurableFocusTrap;
  private _keyManager: FocusKeyManager<unknown>;
  /**
   * @docs-private
   *
   * Content children that provide `DAFF_MENU_ITEM_TOKEN` are treated as menu items.
   * This includes both `daff-menu-item` components and any custom directives that also provide the token.
   */
  @ContentChildren(DAFF_MENU_ITEM_TOKEN) private _items: QueryList<FocusableOption>;

  constructor(
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private _elementRef: ElementRef<HTMLElement>,
    private menuService: DaffMenuService,

    /**
     * @docs-private
     */
    @Inject(DAFF_MENU_CONFIG) public readonly config: DaffMenuConfig,
  ) {}

  /**
   * @docs-private
   *
   * Handles keyboard navigation.
   */
  handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.menuService.close();
        break;
      case 'ArrowDown':
      case 'ArrowUp':
      case 'Home':
      case 'End':
        event.preventDefault();
        this._keyManager.onKeydown(event);
        break;
    }
  }

  /**
   * @docs-private
   */
  ngAfterContentInit() {
    this._focusTrap = this._focusTrapFactory.create(
      this._elementRef.nativeElement,
    );

    this._keyManager = new FocusKeyManager(this._items)
      .withWrap()
      .withHomeAndEnd();
  }

  /**
   * @docs-private
   */
  ngAfterViewInit() {
    // Set focus to the first menu item when menu opens
    if (this._items.length > 0) {
      this._keyManager.setFirstItemActive();
      this._keyManager.setActiveItem(0);
    }
  }
}
