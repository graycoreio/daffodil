import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ShippingOptionFormService } from './shipping-option-form.service';
import { ShippingOptionFormFactory } from '../factories/shipping-option-form.factory';

describe('Daffodil Demo | Checkout | Shipping | Shipping Options | Services | ShippingOptionFormService', () => {
  let shippingOptionsService: ShippingOptionFormService;
  let shippingOptionFormFactory: ShippingOptionFormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        ShippingOptionFormService,
        ShippingOptionFormFactory
      ]
    });
    shippingOptionsService = TestBed.get(ShippingOptionFormService);
    shippingOptionFormFactory = TestBed.get(ShippingOptionFormFactory);
  });

  it('should be created', () => {
    expect(shippingOptionsService).toBeTruthy();
  });

  describe('getShippingOptionFormGroup', () => {
      
    it('should return shippingOptionForm', () => {
      expect(shippingOptionsService.getShippingOptionFormGroup().value).toEqual(shippingOptionFormFactory.create().value);
    });
  });
});
