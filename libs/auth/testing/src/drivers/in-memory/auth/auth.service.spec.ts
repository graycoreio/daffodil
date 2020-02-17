import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import {
  DaffAuthToken,
} from '@daffodil/auth';

import { DaffInMemoryAuthService } from './auth.service';
import { DaffAuthTokenFactory } from '../../../factories/auth-token.factory';

describe('Driver | InMemory | Auth | AuthService', () => {
  let service;
  let httpMock: HttpTestingController;

  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryAuthService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(DaffInMemoryAuthService);

    mockAuth = authFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('check | checking a token', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request and return true', () => {
      service.check(mockAuth).subscribe(res => {
        expect(res).toEqual(true);
      });

      const req = httpMock.expectOne(`${service.url}check`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(jasmine.objectContaining(mockAuth));

      req.flush({valid: true});
    });
  });
});
