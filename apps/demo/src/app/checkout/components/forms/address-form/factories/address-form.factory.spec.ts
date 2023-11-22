import { TestBed } from '@angular/core/testing';
import {
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { AddressFormFactory } from './address-form.factory';

describe('@daffodil/demo | AddressFormFactory', () => {

  let addressFormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      providers: [AddressFormFactory],
    });

    addressFormFactory = TestBed.inject(AddressFormFactory);
  });

  it('should be created', () => {
    expect(addressFormFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: UntypedFormGroup;
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
          state: '',
          country: '',
          postcode: '',
          telephone: '',
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
          country: 'another state',
          postcode: 'postcode',
          telephone: 'telephone',
        };

        result = addressFormFactory.create(address);
      });

      it('should return the expected FormGroup', () => {
        expect(result.value).toEqual(address);
      });
    });
  });
});
