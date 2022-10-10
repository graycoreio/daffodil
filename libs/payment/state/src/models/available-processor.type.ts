import { InjectionToken } from '@angular/core';

import { DaffPaymentRequest } from '@daffodil/payment';
import { DaffPaymentDriverInterface } from '@daffodil/payment/driver';

/**
 * A representation of an available payment processor.
 */
export interface DaffPaymentAvailableProcessor {
  /**
   * The processor kind.
   */
  kind: DaffPaymentRequest['kind'];
  /**
   * The action type string that triggers token generation.
   */
  action: string;
  /**
   * An injection token of the driver that can perform token generation
   * for this specific payment processor.
   */
  driver: InjectionToken<DaffPaymentDriverInterface>;
}
