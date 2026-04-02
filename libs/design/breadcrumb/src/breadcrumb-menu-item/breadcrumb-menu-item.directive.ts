import { FocusableOption } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Directive,
  EmbeddedViewRef,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';

import {
  provideDaffMenuItemToken,
  DaffMenuService,
} from '@daffodil/design/menu';

/**
 * @docs-private
 *
 * Applied to an `ng-container` that projects breadcrumb item templates into `daff-menu`,
 * allowing breadcrumb items to take on `daff-menu-item` styling and behavior.
 */
@Directive({
  selector: '[daffBreadcrumbMenuItem]',
  providers: [provideDaffMenuItemToken(DaffBreadcrumbMenuItemDirective)],
})
export class DaffBreadcrumbMenuItemDirective implements FocusableOption, AfterViewInit, OnDestroy {
  private _focusableElement: HTMLElement | null = null;
  private _clickHandler = () => this._menuService.close();

  constructor(
    private _viewContainerRef: ViewContainerRef,
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
    const view = <EmbeddedViewRef<unknown>>this._viewContainerRef.get(0);
    return view?.rootNodes.find((n): n is HTMLElement => n.nodeType === Node.ELEMENT_NODE) ?? null;
  }

  ngOnDestroy() {
    this._focusableElement?.removeEventListener('click', this._clickHandler);
    this._focusableElement?.classList.remove('daff-menu-item');
  }
}
