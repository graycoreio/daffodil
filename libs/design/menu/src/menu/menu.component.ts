/* eslint-disable quote-props */
import {
  ConfigurableFocusTrapFactory,
  ConfigurableFocusTrap,
  FocusKeyManager,
} from '@angular/cdk/a11y';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  ContentChildren,
} from '@angular/core';

import { DaffMenuItemComponent } from '../menu-item/menu-item.component';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-menu',
    'tabindex': '0',
    'role': 'menu',
    '(keydown)': 'handleKeydown($event)',
  },
  imports: [
    DaffMenuItemComponent,
  ],
})
export class DaffMenuComponent implements AfterContentInit, AfterViewInit {
  private _focusTrap: ConfigurableFocusTrap;
  private _keyManager: FocusKeyManager<DaffMenuItemComponent>;

  /**
   * @docs-private
   */
  @ContentChildren(DaffMenuItemComponent) private _items: QueryList<DaffMenuItemComponent>;

  constructor(
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private _elementRef: ElementRef<HTMLElement>,
    private menuService: DaffMenuService,
  ) {}

  /**
   * @docs-private
   *
   * Handle keyboard navigation
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
