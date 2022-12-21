import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffMagentoCartShippingAddressService } from '@daffodil/cart/driver/magento';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartCustomerShippingAddressService } from './cart-shipping-address.service';

describe('@daffodil/cart-customer/driver/magento | DaffMagentoCartCustomerShippingAddressService', () => {
  let service: DaffMagentoCartCustomerShippingAddressService;
  let daffCartAddressFactory: DaffCartAddressFactory;

  let driverSpy: jasmine.SpyObj<DaffMagentoCartShippingAddressService>;
  let authStorageSpy: jasmine.SpyObj<DaffAuthStorageService>;

  let cartId: DaffCart['id'];
  let email: string;
  let mockDaffCartAddress: DaffCartAddress;

  beforeEach(() => {
    driverSpy = jasmine.createSpyObj('DaffMagentoCartShippingAddressService', ['update']);
    authStorageSpy = jasmine.createSpyObj('DaffAuthStorageService', ['getAuthToken']);

    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartCustomerShippingAddressService,
        {
          provide: DaffMagentoCartShippingAddressService,
          useValue: driverSpy,
        },
        {
          provide: DaffAuthStorageService,
          useValue: authStorageSpy,
        },
      ],
    });

    service = TestBed.inject(DaffMagentoCartCustomerShippingAddressService);

    daffCartAddressFactory = TestBed.inject(DaffCartAddressFactory);

    cartId = 'cartId';
    email = 'email';
    mockDaffCartAddress = daffCartAddressFactory.create({
      email,
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('update', () => {
    beforeEach(() => {
      driverSpy.update.and.returnValue(of(null));
    });

    describe('when the customer is logged in', () => {
      beforeEach(() => {
        authStorageSpy.getAuthToken.and.returnValue('token');
      });

      it('should remove the email from the address', done => {
        service.update(cartId, mockDaffCartAddress).subscribe(() => {
          expect(driverSpy.update.calls.mostRecent().args[1].email).toBeUndefined();
          done();
        });
      });
    });
  });
});
