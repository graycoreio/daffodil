import {
  Observable,
  Subject,
  catchError,
  of,
} from 'rxjs';

import { DaffCartStorageService } from '@daffodil/cart';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';

import { daffCartDriverHandleCartNotFound } from './handle-cart-not-found';

describe('@daffodil/cart/driver | daffCartDriverHandleCartNotFound', () => {
  let source: Subject<any>;
  let result: Observable<any>;
  let cartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    source = new Subject();
    cartStorageSpy = jasmine.createSpyObj('DaffCartStorageService', ['removeCartId']);
    result = source.pipe(
      daffCartDriverHandleCartNotFound(cartStorageSpy),
    );
  });

  describe('when the source emits a value', () => {
    let value: number;

    beforeEach(() => {
      value = 5;
    });

    it('should pass that value through', (done) => {
      result.pipe(
        catchError((err) => {
          fail('should not throw');
          return of();
        }),
      ).subscribe((res) => {
        expect(res).toEqual(value);
        done();
      });
      source.next(5);
    });
  });

  describe('when the source throws a generic error', () => {
    let error: Error;

    beforeEach(() => {
      error = new Error('');
      source.error(error);
    });

    it('should throw that error', (done) => {
      result.pipe(
        catchError((err) => {
          expect(err).toEqual(error);
          done();
          return of();
        }),
      ).subscribe((res) => {
        fail('should not emit');
      });
    });

    it('should not remove cart ID from storage', (done) => {
      result.pipe(
        catchError((err) => {
          expect(cartStorageSpy.removeCartId).not.toHaveBeenCalled();
          done();
          return of();
        }),
      ).subscribe((res) => {
        fail('should not emit');
      });
    });
  });

  describe('when the source throws a cart not found error', () => {
    let error: DaffCartNotFoundError;

    beforeEach(() => {
      error = new DaffCartNotFoundError('');
      source.error(error);
    });

    it('should throw that error', (done) => {
      result.pipe(
        catchError((err) => {
          expect(err).toEqual(error);
          done();
          return of();
        }),
      ).subscribe((res) => {
        fail('should not emit');
      });
    });

    it('should remove cart ID from storage', (done) => {
      result.pipe(
        catchError((err) => {
          expect(cartStorageSpy.removeCartId).toHaveBeenCalledWith();
          done();
          return of();
        }),
      ).subscribe((res) => {
        fail('should not emit');
      });
    });
  });
});
