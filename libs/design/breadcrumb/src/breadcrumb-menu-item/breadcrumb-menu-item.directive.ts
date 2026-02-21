import { FocusableOption } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
} from '@angular/core';

import {
  DAFF_MENU_ITEM_TOKEN,
  DaffMenuService,
} from '@daffodil/design/menu';

/**
 * @docs-private
 *
 * Applied to an `ng-container` that projects breadcrumb item templates into `daff-menu`,
 * allowing breadcrumb items to take on `daff-menu-item` styling and behavior.
 *
 * Provides {@link DAFF_MENU_ITEM_TOKEN} so that `DaffMenuComponent` can discover
 * the component as a menu item. Also adds the `daff-menu-item` class for styling and
 * implements `focus()` for keyboard navigation.
 */
@Directive({
  selector: '[daffBreadcrumbMenuItem]',
  host: {
    class: 'daff-breadcrumb-menu-item',
  },
  providers: [{ provide: DAFF_MENU_ITEM_TOKEN, useExisting: DaffBreadcrumbMenuItemDirective }],
})
export class DaffBreadcrumbMenuItemDirective implements FocusableOption, AfterViewInit, OnDestroy {
  private _focusableElement: HTMLElement | null = null;
  private _clickHandler = () => this._menuService.close();

  constructor(
    private _elementRef: ElementRef,
    private _menuService: DaffMenuService,
  ) {}

  /**
   * @docs-private
   */
  ngAfterViewInit() {
    this._focusableElement = this._findFocusableElement();
    this._focusableElement?.classList.add('daff-menu-item'); // For styling
    this._focusableElement?.addEventListener('click', this._clickHandler);
  }

  focus() {
    this._focusableElement?.focus(); // Allows `FocusKeyManager` to focus on the element
  }

  private _findFocusableElement(): HTMLElement | null {
    let node = this._elementRef.nativeElement.previousElementSibling;
    while (node && node.nodeType !== 1) {
      node = node.nextSibling;
    }
    return node;
  }

  ngOnDestroy() {
    this._focusableElement?.removeEventListener('click', this._clickHandler);
    this._focusableElement?.classList.remove('daff-menu-item');
  }
}
