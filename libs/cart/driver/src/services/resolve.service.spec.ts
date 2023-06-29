import { TestBed } from '@angular/core/testing';
import {
  catchError,
  of,
  throwError,
} from 'rxjs';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartDriver,
  DaffCartServiceInterface,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffDriverResponse } from '@daffodil/driver';

import { DaffCartDriverResolveService } from './resolve.service';

describe('@daffodil/cart/driver | DaffCartDriverResolveService', () => {
  let service: DaffCartDriverResolveService;
  let cartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;
  let cartDriverSpy: jasmine.SpyObj<DaffCartServiceInterface>;
  let cartFactory: DaffCartFactory;

  let cartId: DaffCart['id'];
  let mockCartResponse: DaffDriverResponse<DaffCart>;

  beforeEach(() => {
    cartStorageSpy = jasmine.createSpyObj('DaffCartStorageService', ['setCartId', 'getCartId']);
    cartDriverSpy = jasmine.createSpyObj('DaffCartDriver', ['get', 'create']);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule,
      ],
      providers: [
        {
          provide: DaffCartDriver,
          useValue: cartDriverSpy,
        },
        {
          provide: DaffCartStorageService,
          useValue: cartStorageSpy,
        },
      ],
    });

    service = TestBed.inject(DaffCartDriverResolveService);
    cartFactory = TestBed.inject(DaffCartFactory);

    mockCartResponse = {
      response: cartFactory.create(),
      errors: [],
    };
    cartId = 'cartId';
  });

  describe('getCartIdOrFail', () => {
    describe('when the cart ID exists in storage', () => {
      beforeEach(() => {
        cartStorageSpy.getCartId.and.returnValue(cartId);
      });

      it('should return that cart ID', (done) => {
        service.getCartIdOrFail().subscribe((res) => {
          expect(res).toEqual(cartId);
          done();
        });
      });
    });

    describe('when the cart ID does not exist in storage', () => {
      beforeEach(() => {
        cartStorageSpy.getCartId.and.returnValue(null);
        cartDriverSpy.create.and.returnValue(of({ id: cartId }));
      });

      it('should call create', (done) => {
        service.getCartIdOrFail().subscribe((res) => {
          expect(cartDriverSpy.create).toHaveBeenCalledWith();
          done();
        });
      });

      describe('and when create is successful', () => {
        beforeEach(() => {
          cartDriverSpy.create.and.returnValue(of({ id: cartId }));
        });

        it('should return that cart ID', (done) => {
          service.getCartIdOrFail().subscribe((res) => {
            expect(res).toEqual(cartId);
            done();
          });
        });

        it('should set that cart ID in storage', (done) => {
          service.getCartIdOrFail().subscribe((res) => {
            expect(cartStorageSpy.setCartId).toHaveBeenCalledWith(cartId);
            done();
          });
        });
      });

      describe('and when create fails', () => {
        let error: Error;

        beforeEach(() => {
          error = new Error();
          cartDriverSpy.create.and.returnValue(throwError(() => error));
        });

        it('should throw that error', (done) => {
          service.getCartIdOrFail().pipe(
            catchError((err) => {
              expect(err).toEqual(error);
              done();
              return of();
            }),
          ).subscribe((res) => {
            fail('should not emit');
          });
        });
      });
    });
  });

  describe('getCartOrFail', () => {
    describe('when getCartIdOrFail succeeds', () => {
      beforeEach(() => {
        spyOn(service, 'getCartIdOrFail').and.returnValue(of(cartId));
        cartDriverSpy.get.and.returnValue(of(mockCartResponse));
      });

      it('should call get', (done) => {
        service.getCartOrFail().subscribe((res) => {
          expect(cartDriverSpy.get).toHaveBeenCalledWith(cartId);
          done();
        });
      });

      describe('and when get is successful', () => {
        beforeEach(() => {
          cartDriverSpy.get.and.returnValue(of(mockCartResponse));
        });

        it('should return that cart response', (done) => {
          service.getCartOrFail().subscribe((res) => {
            expect(res).toEqual(mockCartResponse);
            done();
          });
        });
      });

      describe('and when get fails', () => {
        let error: Error;

        beforeEach(() => {
          error = new Error();
          cartDriverSpy.get.and.returnValue(throwError(() => error));
        });

        it('should throw that error', (done) => {
          service.getCartOrFail().pipe(
            catchError((err) => {
              expect(err).toEqual(error);
              done();
              return of();
            }),
          ).subscribe((res) => {
            fail('should not emit');
          });
        });
      });
    });
  });
});
