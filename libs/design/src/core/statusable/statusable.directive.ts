import {
  Directive,
  Input,
  isDevMode,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffStatus,
  DaffStatusEnum,
  DaffStatusable,
} from './statusable';

const statusValues = (status: string) => (<any>Object).values(DaffStatusEnum).includes(status);

const validateStatus = (status: string) => {
  if(isDevMode()) {
    if (status !== undefined && !statusValues(status)) {
      console.warn(
        `'${status}' is not a valid value of the status property.\n\n` +
      `The available values are: info, warn, critical, or success.`,
      );
    }
  }
};

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
  host: {
    '[class.daff-info]': 'status === "info"',
    '[class.daff-warn]': 'status === "warn"',
    '[class.daff-critical]': 'status === "critical"',
    '[class.daff-success]': 'status === "success"',
  },
})
export class DaffStatusableDirective implements DaffStatusable, OnChanges, OnInit {
  /**
   * Sets the status on a component.
   */
  @Input() status: DaffStatus;

  /**
   * Sets a default status.
   *
   * @example
   * ```ts
   * constructor(private statusDirective: DaffStatusableDirective) {
   *  this.statusDirective.defaultStatus = 'info';
   * }
   * ```
   */
  defaultStatus: DaffStatus;

  /**
   * @docs-private
   */
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.status.currentValue) {
      this.status = this.defaultStatus;
    }
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    validateStatus(this.status);

    if (this.defaultStatus && !this.status) {
      this.status = this.defaultStatus;
    }
  }
}

