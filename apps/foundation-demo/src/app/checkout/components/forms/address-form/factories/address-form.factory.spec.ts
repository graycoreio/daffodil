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
    let address;

    describe('when address is null', () => {
      
      beforeEach(() => {
        address = null;
        expectedResult = {
          firstname: '',
          lastname: '',
          street: '',
          city: '',
          state: 'State',
          postcode: '',
          telephone: ''
        };
  
        result = addressFormFactory.create(address);
      });
  
      it('should return the expected FormGroup', () => {
        expect(result.value).toEqual(expectedResult);
      });
    });

    describe('when address is defined', () => {
      
      beforeEach(() => {
        address = {
          firstname: 'firstname',
          lastname: 'lastname',
          street: 'street',
          city: 'city',
          state: 'another state',
          postcode: 'postcode',
          telephone: 'telephone'
        };
  
        result = addressFormFactory.create(address);
      });
  
      it('should return the expected FormGroup', () => {
        expect(result.value).toEqual(address);
      });
    });
  });
});
