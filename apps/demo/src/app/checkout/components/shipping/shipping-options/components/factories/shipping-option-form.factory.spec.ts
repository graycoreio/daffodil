import { TestBed } from '@angular/core/testing';
import {
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { ShippingOptionFormFactory } from './shipping-option-form.factory';

describe('Daffodil Demo | Checkout | Shipping | Shipping Options | Factories | ShippingOptionFormFactory', () => {

  let shippingOptionFormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      providers: [ShippingOptionFormFactory],
    });

    shippingOptionFormFactory = TestBed.inject(ShippingOptionFormFactory);
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
