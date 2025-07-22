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

  private _disabled = false;

  /**
   * The disabled state of the button.
   */
  @Input() get disabled() {
    return this._disabled;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }
}
