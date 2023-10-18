import { TestBed } from '@angular/core/testing';
import {
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffPaymentFactory } from '@daffodil/checkout/testing';

import { PaymentInfoFormFactory } from './payment-info-form.factory';

describe('Daffodil Demo | Checkout | Forms | Payment Info Form | Factories | PaymentInfoFormFactory', () => {

  let paymentInfoFormFactory;
  let paymentFactory: DaffPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      providers: [PaymentInfoFormFactory],
    });

    paymentInfoFormFactory = TestBed.inject(PaymentInfoFormFactory);
    paymentFactory = TestBed.inject(DaffPaymentFactory);
  });

  it('should be created', () => {
    expect(paymentInfoFormFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: UntypedFormGroup;
    let paymentInfo;

    describe('when paymentInfo is null', () => {

      beforeEach(() => {
        paymentInfo = null;

        result = paymentInfoFormFactory.create(paymentInfo);
      });

      it('should return the default FormGroup', () => {
        expect(result.value.name).toEqual('');
        expect(result.value.cardnumber).toEqual('');
        expect(result.value.month).toEqual('');
        expect(result.value.year).toEqual('');
        expect(result.value.securitycode).toEqual('');
      });
    });

    describe('when paymentInfo is defined', () => {

      beforeEach(() => {
        paymentInfo = paymentFactory.create();

        result = paymentInfoFormFactory.create(paymentInfo);
      });

      it('should return a FormGroup with the paymentInfo values', () => {
        expect(result.value).toEqual(paymentInfo);
      });
    });
  });
});
