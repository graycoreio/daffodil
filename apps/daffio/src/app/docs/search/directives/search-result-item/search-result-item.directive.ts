import { Highlightable } from '@angular/cdk/a11y';
import {
  contentChild,
  Directive,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';

@Directive({
  selector: '[daffioDocsSearchResultItem]',
  host: {
    role: 'option',
    '[class.active]': '_isActive()',
  },
})

export class DaffioDocsSearchResultItemDirective implements Highlightable {
  private _isActive = signal(false);

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  routerLink = contentChild(RouterLink);

  private _router = inject(Router);

  setActiveStyles() {
    this._isActive.set(true);
    this.elementRef.nativeElement.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    });
  };

  setInactiveStyles() {
    this._isActive.set(false);
  }

  navigate() {
    this._router.navigateByUrl(this.routerLink().urlTree);
  }
}
