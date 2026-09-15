/* eslint-disable quote-props */
import {
  FocusKeyManager,
  FocusableOption,
  FocusOrigin,
} from '@angular/cdk/a11y';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  Inject,
  Injector,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  filter,
  map,
  merge,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';

import { DaffMenuPanel } from './menu-panel';
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
  // Required to allow breadcrumb items to take on `.daff-menu-item` styles
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-menu',
    'role': 'menu',
    'aria-orientation': 'vertical',
    '[id]': 'config.menuId',
    '(keydown)': 'handleKeydown($event)',
    '(focusin)': 'setHasFocus(true)',
    '(focusout)': 'setHasFocus(false)',
  },
  imports: [
    DaffMenuItemComponent,
  ],
})
export class DaffMenuComponent implements AfterContentInit, OnDestroy, DaffMenuPanel {
  private _keyManager: FocusKeyManager<FocusableOption>;
  private _destroyed$ = new Subject<void>();

  /**
   * The item of the menu whose submenu opened most recently.
   */
  private _triggerItem: DaffMenuItemComponent | null = null;

  /**
   * @docs-private
   *
   * Content children that provide `DAFF_MENU_ITEM_TOKEN` are treated as menu items.
   */
  private _items = contentChildren(DAFF_MENU_ITEM_TOKEN);

  /**
   * The items that can open a submenu.
   */
  private _submenuItems = contentChildren(DaffMenuItemComponent);

  constructor(
    public menuService: DaffMenuService,
    private _injector: Injector,

    /**
     * @docs-private
     */
    @Inject(DAFF_MENU_CONFIG) public readonly config: DaffMenuConfig,
  ) {}

  /**
   * @docs-private
   *
   * Reports whether this menu holds focus. Open menus close once focus leaves them all.
   */
  setHasFocus(hasFocus: boolean) {
    this.menuService.menuStack.setHasFocus(hasFocus);
  }

  /**
   * Moves focus to the first item in the menu.
   */
  focusFirstItem(origin: FocusOrigin = 'program') {
    if (this._items().length > 0) {
      this._keyManager.setFocusOrigin(origin);
      this._keyManager.setFirstItemActive();
    }
  }

  /**
   * Points the menu's keyboard navigation at the given item without moving focus.
   */
  setActiveMenuItem(item: FocusableOption) {
    this._keyManager?.updateActiveItem(item);
  }

  /**
   * @docs-private
   */
  handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.menuService.close();
        break;
      case 'Tab':
        this.menuService.closeAll();
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
    this._keyManager = new FocusKeyManager<FocusableOption>(this._items, this._injector)
      .withWrap()
      .withHomeAndEnd();

    this._watchSubmenus();
    this.menuService.registerPanel(this);
  }

  /**
   * @docs-private
   */
  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  /**
   * Tracks which item's submenu is open, and points the keyboard back at that item once the submenu.
   */
  private _watchSubmenus() {
    toObservable(this._submenuItems, { injector: this._injector }).pipe(
      switchMap((items) => merge(
        ...items.filter((item) => !!item.submenu).map((item) => item.submenu.open$.pipe(
          filter((open) => open),
          map(() => item),
        )),
      )),
      takeUntil(this._destroyed$),
    ).subscribe((item) => {
      this._triggerItem = item;
    });

    this.menuService.menuStack.closed.pipe(
      takeUntil(this._destroyed$),
    ).subscribe(({ item, focusParentTrigger }) => {
      if (focusParentTrigger && this._triggerItem && item === this._triggerItem.submenu) {
        this.setActiveMenuItem(this._triggerItem);
      }
    });
  }
}
