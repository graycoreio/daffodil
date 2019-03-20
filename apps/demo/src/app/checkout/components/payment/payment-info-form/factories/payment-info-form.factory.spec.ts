import { TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { PaymentInfoFormFactory } from './payment-info-form.factory';
import { DaffPaymentFactory } from '@daffodil/core/testing';

describe('Daffodil Demo | Checkout | Forms | Payment Info Form | Factories | PaymentInfoFormFactory', () => {
  
  let paymentInfoFormFactory;
  let paymentFactory: DaffPaymentFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [PaymentInfoFormFactory]
    });

    paymentInfoFormFactory = TestBed.get(PaymentInfoFormFactory);
    paymentFactory = TestBed.get(DaffPaymentFactory);
  });

  it('should be created', () => {
    expect(paymentInfoFormFactory).toBeTruthy();
  });

  describe('create', () => {
    
    let result: FormGroup;
    let expectedResult;
    let paymentInfo;

    describe('when paymentInfo is null', () => {
      
      beforeEach(() => {
        paymentInfo = null;
        expectedResult = paymentFactory.create({
          name: '',
          cardnumber: '',
          month: '',
          year: '',
          securitycode: ''
        });
  
        result = paymentInfoFormFactory.create(paymentInfo);
      });
  
      it('should return the default FormGroup', () => {
        expect(result.value).toEqual(expectedResult);
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
