import {
  Directive,
  model,
} from '@angular/core';

/**
 * Enforces consistent use of the disabled property.
 */
@Directive({
  selector: '[daffDisableable]',
  host: {
    '[class.daff-disabled]': 'disabled()',
  },
})
export class DaffDisableableDirective {
  /**
   * Whether the component is disabled.
   */
  disabled = model(false);
}
