import { FocusableOption } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Directive,
  ElementRef,
} from '@angular/core';

import { DAFF_MENU_ITEM_TOKEN } from '@daffodil/design/menu';

/**
 * @docs-private
 *
 * Directive that provides {@link DAFF_MENU_ITEM_TOKEN} so that breadcrumb items
 * rendered inside a menu are discoverable by the menu's FocusKeyManager.
 */
@Directive({
  selector: '[daffBreadcrumbMenuItem]',
  host: {
    class: 'daff-taco',
  },
  providers: [{ provide: DAFF_MENU_ITEM_TOKEN, useExisting: DaffBreadcrumbMenuItemDirective }],
})
export class DaffBreadcrumbMenuItemDirective implements FocusableOption, AfterViewInit {
  private _focusableElement: HTMLElement | null = null;

  constructor(private _elementRef: ElementRef) {}

  /**
   * @docs-private
   */
  ngAfterViewInit() {
    this._focusableElement = this._findFocusableElement();
    this._focusableElement?.classList.add('daff-menu-item');
  }

  focus() {
    this._focusableElement?.focus();
  }

  private _findFocusableElement(): HTMLElement | null {
    let node = this._elementRef.nativeElement.previousElementSibling;
    while (node && node.nodeType !== 1) {
      node = node.nextSibling;
    }
    return node;
  }
}
