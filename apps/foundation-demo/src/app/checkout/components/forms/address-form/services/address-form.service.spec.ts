import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressFormService } from './address-form.service';
import { AddressFormFactory } from '../factories/address-form.factory';

describe('Foundation Demo | Checkout | Forms | Address Form | Services | AddressFormService', () => {
  let addressFormService: AddressFormService;
  let addressFormFactory: AddressFormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        AddressFormService,
        AddressFormFactory
      ]
    });
    addressFormService = TestBed.get(AddressFormService);
    addressFormFactory = TestBed.get(AddressFormFactory);
  });

  it('should be created', () => {
    expect(addressFormService).toBeTruthy();
  });

  describe('getAddressForm', () => {
    it('should return addressFormFactory.create()', () => {
      expect(addressFormService.getAddressFormGroup().value).toEqual(addressFormFactory.create().value);
    });
  });
});
