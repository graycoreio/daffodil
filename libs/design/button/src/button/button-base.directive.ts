import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ElementRef,
  HostBinding,
  Renderer2,
  Input,
  Directive,
} from '@angular/core';

import {
  DaffPrefixable,
  DaffSuffixable,
  daffPrefixableMixin,
  daffSuffixableMixin,
  DaffArticleEncapsulatedDirective,
  DaffStatusableDirective,
  DaffColorableDirective,
} from '@daffodil/design';

import { DaffButtonSizableDirective } from './button-sizable.directive';

/**
 * An _elementRef and an instance of renderer2 are needed for the button mixins
 */
class DaffButtonBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffButtonBase = daffPrefixableMixin(daffSuffixableMixin((DaffButtonBase)));

@Directive({
  selector: '[daffButtonBase]',
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffButtonSizableDirective,
      inputs: ['size'],
    },
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  standalone: true,
})
export class DaffButtonBaseDirective
  extends _daffButtonBase
  implements DaffPrefixable, DaffSuffixable {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private size: DaffButtonSizableDirective,
  ) {
    super(elementRef, renderer);

    /**
     * Sets the default size of a button to medium.
     */
    this.size.defaultSize = 'md';
  }

  /**
   * @docs-private
   */
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled;
  }

  @Input() loading = false;

  /**
   * Set the `tabindex` to 0.
   */
  @Input() tabindex = 0;

  _disabled = false;

  /**
   * The disabled state of the button.
   */
  @Input() get disabled() {
    return this._disabled || this.loading;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  @HostBinding('attr.disabled') get disabledAttribute() {
    return this.disabled ? true : null;
  }

  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled ? true : null;
  }

  /**
   * Set the `tabindex` to -1 if the button is disabled.
   */
  @HostBinding('attr.tabindex') get disabledTabIndex() {
    return this.disabled ? -1 : this.tabindex;
  }
}
