import { TestBed } from '@angular/core/testing';
import {
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { DemoCheckoutShippingFormFactory } from './shipping-option-form.factory';

describe('Daffodil Demo | Checkout | Shipping | Shipping Options | Factories | DemoCheckoutShippingFormFactory', () => {

  let shippingOptionFormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      providers: [DemoCheckoutShippingFormFactory],
    });

    shippingOptionFormFactory = TestBed.inject(DemoCheckoutShippingFormFactory);
  });

  it('should be created', () => {
    expect(shippingOptionFormFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: UntypedFormGroup;
    let expectedResult;

    beforeEach(() => {
      expectedResult = { id: '' };
      result = shippingOptionFormFactory.create();
    });

    it('should return expected FormGroup', () => {
      expect(result.value).toEqual(expectedResult);
    });
  });
});
