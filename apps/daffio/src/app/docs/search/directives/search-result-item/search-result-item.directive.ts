import { Highlightable } from '@angular/cdk/a11y';
import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffioDocsSearchResultItem]',
})

export class DaffioDocsSearchResultItemDirective implements Highlightable {
  @HostBinding('attr.role') role = 'option';

  private _isActive = false;

  @HostBinding('class.active') get isActive() {
    return this._isActive;
  };

  setActiveStyles() {
    this._isActive = true;
  };

  setInactiveStyles() {
    this._isActive = false;
  }
}
