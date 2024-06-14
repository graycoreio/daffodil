import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffAuthorizeNetCreditCardFactory } from '@daffodil/authorizenet/testing';

import { PaymentInfoFormFactory } from './payment-info-form.factory';
import { PaymentInfoFormGroup } from '../models/payment-form.type';

describe('@daffodil/demo | PaymentInfoFormFactory', () => {

  let formFactory: PaymentInfoFormFactory;
  let paymentFactory: DaffAuthorizeNetCreditCardFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      providers: [PaymentInfoFormFactory],
    });

    formFactory = TestBed.inject(PaymentInfoFormFactory);
    paymentFactory = TestBed.inject(DaffAuthorizeNetCreditCardFactory);
  });

  it('should be created', () => {
    expect(formFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: PaymentInfoFormGroup;
    let paymentInfo;

    describe('when paymentInfo is null', () => {

      beforeEach(() => {
        paymentInfo = null;

        result = formFactory.create(paymentInfo);
      });

      it('should return the default FormGroup', () => {
        expect(result.value.cardnumber).toEqual('');
        expect(result.value.month).toEqual('');
        expect(result.value.year).toEqual('');
        expect(result.value.securitycode).toEqual('');
      });
    });

    describe('when paymentInfo is defined', () => {

      beforeEach(() => {
        paymentInfo = paymentFactory.create();

        result = formFactory.create(paymentInfo);
      });

      it('should return a FormGroup with the paymentInfo values', () => {
        expect(result.value).toEqual(paymentInfo);
      });
    });
  });
});
