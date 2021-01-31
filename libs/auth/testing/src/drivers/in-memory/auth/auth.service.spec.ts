import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DaffAuthToken } from '@daffodil/auth';

import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';
import { DaffInMemoryAuthService } from './auth.service';

describe('Driver | InMemory | Auth | AuthService', () => {
  let service;
  let httpMock: HttpTestingController;

  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffInMemoryAuthService,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffInMemoryAuthService);

    mockAuth = authFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('check | checking a token', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request and not throw an error', done => {
      service.check().subscribe(res => {
        expect(res).toBeUndefined();
        done();
      });

      const req = httpMock.expectOne(`${service.url}check`);
      expect(req.request.method).toBe('POST');

      req.flush({});
    });
  });
});
