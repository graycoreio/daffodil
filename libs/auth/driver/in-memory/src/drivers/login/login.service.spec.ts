import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';

import {
  DaffAuthToken,
  DaffAccountRegistration,
} from '@daffodil/auth';
import {
  DaffAccountRegistrationFactory,
  DaffAuthTokenFactory,
} from '@daffodil/auth/testing';

import { DaffInMemoryLoginService } from './login.service';

describe('@daffodil/auth/driver/in-memory | LoginService', () => {
  let service;
  let httpMock: HttpTestingController;

  let registrationFactory: DaffAccountRegistrationFactory;
  const authFactory: DaffAuthTokenFactory = new DaffAuthTokenFactory();

  let token: string;
  let email: string;
  let password: string;
  let mockRegistration: DaffAccountRegistration;
  let mockAuth: DaffAuthToken;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryLoginService,
        {
          provide: InMemoryBackendConfig,
          useValue: {
            apiBase: 'api',
          },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffInMemoryLoginService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();
    mockAuth = authFactory.create();

    token = mockAuth.token;
    email = mockRegistration.email;
    password = mockRegistration.password;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login | getting a token', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request and return an AuthToken', done => {
      service.login({ email, password }).subscribe(auth => {
        expect(auth).toEqual(mockAuth);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/login`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({ email, password });

      req.flush(mockAuth);
    });
  });

  describe('logout | getting an empty Observable', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request and return an empty Observable', done => {
      service.logout().subscribe(resp => {
        expect(resp).toBeUndefined();
        done();
      });

      const req = httpMock.expectOne(`${service.url}/logout`);
      expect(req.request.method).toBe('POST');

      req.flush({ success: true });
    });
  });
});
