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
 * for indicating different statuses such as info, warning, critical, or success states.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffStatusable [status]="componentStatus">Status content</div>
 * ```
 *
 * @example Implementing it as an Angular host directive
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
 * :host {
 *  &.daff-critical {
 *    background: daff-color($red, 10);
 *    color: daff-color($red, 90);
 *  }
 * }
 * ```
 *
 * The directive applies the following CSS classes to the component based on the status:
 *
 * - `daff-info`: Applied when the status is `info`.
 * - `daff-warn`: Applied when the status is `warn`.
 * - `daff-critical`: Applied when the status is `critical`.
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
      'daff-info': this.status === DaffStatusEnum.Info,
      'daff-warn': this.status === DaffStatusEnum.Warn,
      'daff-critical': this.status === DaffStatusEnum.Critical,
      'daff-success': this.status === DaffStatusEnum.Success,
    };
  }

  /**
   * Sets the status on a component.
   */
  @Input() status: DaffStatus;
}

