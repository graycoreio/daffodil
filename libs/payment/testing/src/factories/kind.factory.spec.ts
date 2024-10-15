import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaymentResponse } from '@daffodil/payment';
import {
  MockPaymentResponse,
  provideDaffPaymentResponseKindFactories,
} from '@daffodil/payment/testing';

import { DaffPaymentResponseKindFactory } from './kind.factory';

class TestMockPaymentResponse extends MockPaymentResponse {
  extraField = 'extraField';
}

@Injectable({
  providedIn: 'root',
})
class TestPaymentResponseFactory extends DaffModelFactory<DaffPaymentResponse> {
  constructor() {
    super(TestMockPaymentResponse);
  }
}

describe('@daffodil/payment/testing | DaffPaymentResponseKindFactory', () => {
  let paymentResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffPaymentResponseKindFactory,
        ...provideDaffPaymentResponseKindFactories(
          TestPaymentResponseFactory,
        ),
      ],
    });

    paymentResponseFactory = TestBed.inject(DaffPaymentResponseKindFactory);
  });

  it('should be created', () => {
    expect(paymentResponseFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffPaymentResponse;

    beforeEach(() => {
      result = paymentResponseFactory.create();
    });

    it('should include extra factory types', () => {
      expect((<TestMockPaymentResponse>result).extraField).toBeDefined();
    });
  });
});
