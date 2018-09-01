import { TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AddressFormFactory } from './address-form.factory';

describe('Foundation Demo | Checkout | Forms | Address Form | Factories | AddressFormFactory', () => {
  
  let addressFormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [AddressFormFactory]
    });

    addressFormFactory = TestBed.get(AddressFormFactory);
  });

  it('should be created', () => {
    expect(addressFormFactory).toBeTruthy();
  });

  describe('create', () => {
    
    let result: FormGroup;
    let expectedResult;

    beforeEach(() => {
      expectedResult = {
        firstname: '',
        lastname: '',
        street: '',
        city: '',
        state: 'State',
        postcode: '',
        telephone: ''
      };

      result = addressFormFactory.create();
    });

    it('should return the expected FormGroup', () => {
      expect(result.value).toEqual(expectedResult);
    });
  });
});
