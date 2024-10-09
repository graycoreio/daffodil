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
  DaffAuthResetPasswordInfo,
  DaffLoginInfo,
} from '@daffodil/auth';
import { DaffAuthResetPasswordInfoFactory } from '@daffodil/auth/testing';

import { DaffInMemoryResetPasswordService } from './service';
import { DaffInMemoryLoginService } from '../login/login.service';

describe('@daffodil/auth/driver/in-memory | DaffInMemoryResetPasswordService', () => {
  let service: DaffInMemoryResetPasswordService;
  let httpMock: HttpTestingController;
  let loginServiceSpy: jasmine.SpyObj<DaffInMemoryLoginService>;

  let resetInfoFactory: DaffAuthResetPasswordInfoFactory;

  let email: string;
  let password: string;
  let token: string;
  let mockResetInfo: DaffAuthResetPasswordInfo;
  let mockLoginInfo: DaffLoginInfo;

  beforeEach(() => {
    loginServiceSpy = jasmine.createSpyObj('DaffInMemoryLoginService', ['login']);

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryResetPasswordService,
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
    service = TestBed.inject(DaffInMemoryResetPasswordService);
    resetInfoFactory = TestBed.inject(DaffAuthResetPasswordInfoFactory);

    mockResetInfo = resetInfoFactory.create();

    email = mockResetInfo.email;
    password = mockResetInfo.password;
    token = 'token';
    mockLoginInfo = {
      email,
      password,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('resetPassword', () => {
    beforeEach(() => {
      loginServiceSpy.login.withArgs({ email: mockResetInfo.email, password: mockResetInfo.password }).and.returnValue(of({ token }));
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request', () => {
      service.resetPassword(mockResetInfo).subscribe(auth => {});

      const req = httpMock.expectOne(`${service['url']}resetPassword`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockResetInfo);

      req.flush({});
    });

    it('should return a token', done => {
      service.resetPassword(mockResetInfo).subscribe(resp => {
        expect(resp).toEqual(token);
        done();
      });

      const req = httpMock.expectOne(`${service['url']}resetPassword`);

      req.flush({});
    });
  });

  describe('resetPasswordOnly', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request', () => {
      service.resetPasswordOnly(mockResetInfo).subscribe(auth => {});

      const req = httpMock.expectOne(`${service['url']}resetPassword`);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockResetInfo);

      req.flush({});
    });

    it('should return', done => {
      service.resetPasswordOnly(mockResetInfo).subscribe(loginInfo => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}resetPassword`);

      req.flush({});
    });
  });

  describe('sendResetEmail', () => {
    afterEach(() => {
      httpMock.verify();
    });

    it('should send a post request', () => {
      service.sendResetEmail(mockResetInfo.email).subscribe(auth => {});

      const req = httpMock.expectOne(`${service['url']}sendResetEmail`);

      expect(req.request.method).toBe('POST');

      req.flush({});
    });

    it('should return', done => {
      service.sendResetEmail(mockResetInfo.email).subscribe(loginInfo => {
        done();
      });

      const req = httpMock.expectOne(`${service['url']}sendResetEmail`);

      req.flush({});
    });
  });
});
