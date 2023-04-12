import { TestBed } from '@angular/core/testing';
import {
  catchError,
  of,
} from 'rxjs';

import { DaffAuthStorageService } from '@daffodil/auth';
import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffMagentoCartAddressService } from '@daffodil/cart/driver/magento';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartCustomerAddressService } from './cart-address.service';

describe('@daffodil/cart-customer/driver/magento | DaffMagentoCartCustomerAddressService', () => {
  let service: DaffMagentoCartCustomerAddressService;
  let daffCartAddressFactory: DaffCartAddressFactory;

  let driverSpy: jasmine.SpyObj<DaffMagentoCartAddressService>;
  let authStorageSpy: jasmine.SpyObj<DaffAuthStorageService>;

  let cartId: DaffCart['id'];
  let email: string;
  let mockDaffCartAddress: DaffCartAddress;

  beforeEach(() => {
    driverSpy = jasmine.createSpyObj('DaffMagentoCartAddressService', ['update']);
    authStorageSpy = jasmine.createSpyObj('DaffAuthStorageService', ['getAuthToken']);

    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartCustomerAddressService,
        {
          provide: DaffMagentoCartAddressService,
          useValue: driverSpy,
        },
        {
          provide: DaffAuthStorageService,
          useValue: authStorageSpy,
        },
      ],
    });

    service = TestBed.inject(DaffMagentoCartCustomerAddressService);

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

      describe('and the address object is frozen', () => {
        beforeEach(() => {
          Object.freeze(mockDaffCartAddress);
        });

        it('should not error', (done) => {
          service.update(cartId, mockDaffCartAddress).pipe(
            catchError((error) => {
              fail(`An error was thrown: ${error}`);
              done();
              return of();
            }),
          ).subscribe(() => {
            expect(true).toBeTrue();
            done();
          });
        });
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
