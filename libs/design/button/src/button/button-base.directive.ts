import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
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
  DaffDisableableDirective,
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
    {
      directive: DaffDisableableDirective,
      inputs: ['disabled'],
    },
  ],
  host: {
    '[class.disabled]': 'disabled',
    '[attr.disabled]': 'disabled ? true : null',
    '[attr.aria-disabled]': 'disabled ? true : null',
    '[attr.tabindex]': 'disabled ? -1 : this.tabindex',
  },
})
export class DaffButtonBaseDirective {

  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective, { static: true }) _prefix: DaffPrefixDirective;

  /**
   * @docs-private
   */
  @ContentChild(DaffSuffixDirective, { static: true }) _suffix: DaffSuffixDirective;

  constructor(
    private size: DaffButtonSizableDirective,
    private disabledDirective: DaffDisableableDirective,
  ) {
    /**
     * Sets the default size of a button to medium.
     */
    this.size.defaultSize = 'md';
  }

  /**
   * Sets the tabindex.
   */
  @Input() tabindex = 0;

  /**
   * The disabled state of the button.
   */
  @Input() get disabled() {
    return this.disabledDirective.disabled;
  }
  set disabled(value: any) {
    this.disabledDirective.disabled = coerceBooleanProperty(value);
  }
}
