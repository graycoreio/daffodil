import {
  Injectable,
  Inject,
} from '@angular/core';

import { sample } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaymentResponse } from '@daffodil/payment';

import { DAFF_PAYMENT_RESPONSE_KIND_FACTORIES } from '../injection-tokens/factories/kind.token';
import { MockPaymentResponse } from './payment-response.factory';

/**
 * Factory for creating DaffPaymentResponses.
 * This will create a payment response of random kind.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentResponseKindFactory extends DaffModelFactory<DaffPaymentResponse> {
  constructor(
    @Inject(DAFF_PAYMENT_RESPONSE_KIND_FACTORIES) private kindFactories: DaffModelFactory<DaffPaymentResponse>[],
  ) {
    super(MockPaymentResponse);
  }

  private get _randomFactory(): DaffModelFactory<DaffPaymentResponse> {
    return sample(this.kindFactories);
  }

  /**
   * Creates a payment result of random kind.
   */
  create(partial = {}): DaffPaymentResponse {
    return this._randomFactory.create(partial);
  }
}
