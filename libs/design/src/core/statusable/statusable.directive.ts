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
 * Enforces consistent use of {@link DaffStatus} on a component by applying
 * status-specific CSS classes and validating the status in dev mode.
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
   * The status of the component.
   */
  @Input() status: DaffStatus;

  /**
   * The default status used when no status is set.
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

