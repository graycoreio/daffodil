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
 * `DaffStatusableDirective` allows a component to conditionally apply status-specific
 * styles by setting CSS classes based on the specified status. This directive is useful
 * for indicating different statuses such as warning, danger, or success states.
 *
 * ## Usage
 *
 * ### Implementing it as an attribute directive
 *
 * ```html
 * <div daffStatusable [status]="componentStatus">Status content</div>
 * ```
 *
 * ### Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  standalone: true,
 *  selector: 'custom-component',
 *  template: 'custom-component.html',
 *  hostDirectives: [
 *    {
 *      directive: DaffStatusableDirective,
 *      inputs: ['status'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 *
 * ```scss
 * .custom-component {
 *
 *  &.daff-danger {
 *    background: daff-color($red, 10);
 *    color: daff-color($red, 90);
 *  }
 * }
 * ```
 * ## Styles
 *
 * The directive applies the following CSS classes based on the status:
 *
 * - `daff-warn`: Applied when the status is `warn`.
 * - `daff-danger`: Applied when the status is `danger`.
 * - `daff-success`: Applied when the status is `success`.
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

