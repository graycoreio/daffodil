import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCartAddress } from '@daffodil/cart';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DemoCheckoutAddressFormFactory } from './address-form.factory';
import { DemoCheckoutAddressFormGroup } from '../models/address-form.type';

describe('@daffodil/demo | DemoCheckoutAddressFormFactory', () => {
  let formFactory: DemoCheckoutAddressFormFactory;
  let addressFactory: DaffCartAddressFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      providers: [DemoCheckoutAddressFormFactory],
    });

    formFactory = TestBed.inject(DemoCheckoutAddressFormFactory);
    addressFactory = TestBed.inject(DaffCartAddressFactory);
  });

  it('should be created', () => {
    expect(formFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DemoCheckoutAddressFormGroup;
    let expectedResult: DemoCheckoutAddressFormGroup['value'];
    let address: DaffCartAddress;

    describe('when address is null', () => {
      beforeEach(() => {
        address = null;
        expectedResult = {
          firstname: '',
          lastname: '',
          street: '',
          city: '',
          region: '',
          country: '',
          postcode: '',
          telephone: '',
        };

        result = formFactory.create(address);
      });

      it('should return the expected FormGroup', () => {
        expect(result.value).toEqual(expectedResult);
      });
    });

    describe('when address is defined', () => {
      beforeEach(() => {
        address = addressFactory.create();

        result = formFactory.create(address);
      });

      it('should return the expected FormGroup', () => {
        expect(result.value.street).toEqual(address.street);
      });
    });
  });
});
