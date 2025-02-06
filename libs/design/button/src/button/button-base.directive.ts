import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  HostBinding,
  Input,
  Directive,
  ContentChild,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffStatusableDirective,
  DaffColorableDirective,
  DaffPrefixDirective,
  DaffSuffixDirective,
} from '@daffodil/design';

import { DaffButtonSizableDirective } from './button-sizable.directive';

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
export class DaffButtonBaseDirective {

  @ContentChild(DaffPrefixDirective, { static: true })
  _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective, { static: true })
  _suffix: DaffSuffixDirective;

  constructor(
    private size: DaffButtonSizableDirective,
  ) {
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
   * Sets the tabindex. Defaults to 0.
   */
  @Input() tabindex = 0;

  private _disabled = false;

  /**
   * The disabled state of the button.
   */
  @Input() get disabled() {
    return this._disabled || this.loading;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.disabled') get disabledAttribute() {
    return this.disabled ? true : null;
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled ? true : null;
  }

  /**
   * @docs-private
   *
   * Set the `tabindex` to -1 if the button is disabled.
   */
  @HostBinding('attr.tabindex') get tabIndexAttribute() {
    return this.disabled ? -1 : this.tabindex;
  }
}
