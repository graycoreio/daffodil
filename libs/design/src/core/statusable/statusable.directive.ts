import {
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

import {
  DaffStatus,
  DaffStatusEnum,
  DaffStatusable,
} from './statusable';

/**
 * The `DaffStatusableDirective` allows a component to conditionally apply status-specific
 * styles by setting CSS classes based on the specified status. This directive is useful
 * for indicating different statuses such as warnings, errors, or success states.
 *
 * ## Example
 *
 * ```html
 * <div daffStatusable [status]="componentStatus">Status content</div>
 * ```
 *
 * ## Styles
 *
 * The directive applies the following CSS classes based on the status:
 *
 * - `daff-warn`: Applied when the status is `Warn`.
 * - `daff-danger`: Applied when the status is `Danger`.
 * - `daff-success`: Applied when the status is `Success`.
 */
@Directive({
  selector: '[daffStatusable]',
  standalone: true,
})
export class DaffStatusableDirective implements DaffStatusable {

  /**
   * Dynamically sets the CSS classes based on the status.
   * @docs-private
   */
  @HostBinding('class') get class() {
    return {
      'daff-warn': this.status === DaffStatusEnum.Warn,
      'daff-danger': this.status === DaffStatusEnum.Danger,
      'daff-success': this.status === DaffStatusEnum.Success,
    };
  }

  /**
   * Sets the status on a component.
   */
  @Input() status: DaffStatus;
}

