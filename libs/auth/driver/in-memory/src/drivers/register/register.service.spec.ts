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
import { of } from 'rxjs';

import {
  DaffAccountRegistration,
  DaffLoginInfo,
} from '@daffodil/auth';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';

import { DaffInMemoryRegisterService } from './register.service';
import { DaffInMemoryLoginService } from '../login/login.service';

describe('@daffodil/auth/driver/in-memory | DaffInMemoryRegisterService', () => {
  let service: DaffInMemoryRegisterService;
  let httpMock: HttpTestingController;
  let loginServiceSpy: jasmine.SpyObj<DaffInMemoryLoginService>;

  let registrationFactory: DaffAccountRegistrationFactory;

  let email: string;
  let password: string;
  let token: string;
  let mockRegistration: DaffAccountRegistration;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    loginServiceSpy = jasmine.createSpyObj('DaffInMemoryLoginService', ['login']);

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryRegisterService,
        {
          provide: DaffInMemoryLoginService,
          useValue: loginServiceSpy,
        },
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
    service = TestBed.inject(DaffInMemoryRegisterService);
    registrationFactory = TestBed.inject(DaffAccountRegistrationFactory);

    mockRegistration = registrationFactory.create();

    email = mockRegistration.email;
    password = mockRegistration.password;
    token = 'token';
    mockLoginInfo = {
      email,
      password,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register | creating a new user', () => {
    beforeEach(() => {
      loginServiceSpy.login.withArgs({ email: mockRegistration.email, password: mockRegistration.password }).and.returnValue(of({ token }));
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request', () => {
      service.register(mockRegistration).subscribe(auth => {});

      const req = httpMock.expectOne(`${service['url']}register`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockRegistration);

      req.flush({});
    });

    it('should return a token', done => {
      service.register(mockRegistration).subscribe(resp => {
        expect(resp).toEqual(token);
        done();
      });

      const req = httpMock.expectOne(`${service['url']}register`);

      req.flush({});
    });
  });

  describe('registerOnly | creating a new user', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request', () => {
      service.registerOnly(mockRegistration).subscribe(auth => {});

      const req = httpMock.expectOne(`${service['url']}register`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockRegistration);

      req.flush({});
    });
  });
});
