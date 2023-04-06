import { TestBed } from '@angular/core/testing';
import {
  Observable,
  catchError,
  of,
} from 'rxjs';

import {
  DaffAuthMissingTokenError,
  DaffAuthStorageService,
} from '@daffodil/auth';
import {
  DaffAuthDriver,
  DaffAuthServiceInterface,
} from '@daffodil/auth/driver';

import { DaffAuthDriverTokenCheck } from './auth-check.service';

describe('@daffodil/auth/driver | DaffAuthDriverTokenCheck', () => {
  let service: DaffAuthDriverTokenCheck;
  let daffAuthStorageService: jasmine.SpyObj<DaffAuthStorageService>;
  let daffAuthDriver: jasmine.SpyObj<DaffAuthServiceInterface>;

  beforeEach(() => {
    daffAuthStorageService = jasmine.createSpyObj('DaffAuthStorageService', ['getAuthToken']);
    daffAuthDriver = jasmine.createSpyObj('DaffAuthDriver', ['check']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: DaffAuthStorageService,
          useValue: daffAuthStorageService,
        },
        {
          provide: DaffAuthDriver,
          useValue: daffAuthDriver,
        },
      ],
    });

    service = TestBed.inject(DaffAuthDriverTokenCheck);
    daffAuthDriver.check.and.returnValue(of(undefined));
  });

  describe('check', () => {
    let result: Observable<void>;

    describe('when there is a token in storage', () => {
      beforeEach(() => {
        daffAuthStorageService.getAuthToken.and.returnValue('token');
        result = service.check();
      });

      it('should call the driver', (done) => {
        result.subscribe(() => {
          expect(daffAuthDriver.check).toHaveBeenCalledWith();
          done();
        });
      });
    });

    describe('when there is not a token in storage', () => {
      beforeEach(() => {
        daffAuthStorageService.getAuthToken.and.returnValue(null);
        result = service.check();
      });

      it('should throw a DaffAuthMissingTokenError into the stream', (done) => {
        result.pipe(
          catchError((err) => {
            expect(err).toEqual(jasmine.any(DaffAuthMissingTokenError));
            done();
            return of();
          }),
        ).subscribe(() => {
          fail('stream should not emit');
        });
      });
    });
  });
});
