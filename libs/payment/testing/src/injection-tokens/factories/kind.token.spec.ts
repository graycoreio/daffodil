import {
  Type,
  Injectable,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';


import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaymentResponse } from '@daffodil/payment';
import { MockPaymentResponse } from '@daffodil/payment/testing';

import {
  daffProvidePaymentResponseKindFactories,
  DAFF_PAYMENT_RESPONSE_KIND_FACTORIES,
} from './kind.token';

class TestMockPaymentResponse extends MockPaymentResponse {}

@Injectable({
  providedIn: 'root',
})
class TestPaymentResponseFactory extends DaffModelFactory<DaffPaymentResponse> {
  constructor() {
    super(TestMockPaymentResponse);
  }
}

describe('@daffodil/payment/testing | daffProvidePaymentResponseKindFactories', () => {
  let factories: Type<DaffModelFactory<DaffPaymentResponse>>[];
  let result: DaffModelFactory<DaffPaymentResponse>[];

  beforeEach(() => {
    factories = [
      TestPaymentResponseFactory,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvidePaymentResponseKindFactories(...factories),
      ],
    });

    result = TestBed.inject(DAFF_PAYMENT_RESPONSE_KIND_FACTORIES);
  });

  it('should provide the factories to the token', () => {
    factories.forEach(factory => {
      expect(result).toContain(jasmine.any(factory));
    });
  });
});
