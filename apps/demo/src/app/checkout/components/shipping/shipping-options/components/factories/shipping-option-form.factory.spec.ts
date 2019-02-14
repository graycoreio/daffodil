import { TestBed } from '@angular/core/testing';

import { ShippingOptionFormFactory } from './shipping-option-form.factory';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('Daffodil Demo | Checkout | Shipping | Shipping Options | Factories | ShippingOptionFormFactory', () => {
  
  let shippingOptionFormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [ShippingOptionFormFactory]
    });

    shippingOptionFormFactory = TestBed.get(ShippingOptionFormFactory);
  });

  it('should be created', () => {
    expect(shippingOptionFormFactory).toBeTruthy();
  });

  describe('create', () => {
    
    let result: FormGroup;
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
