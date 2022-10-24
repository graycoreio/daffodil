import { TestBed } from '@angular/core/testing';

import { DaffAuthResetPasswordInfo } from '@daffodil/auth';
import { DaffResetPasswordServiceInterface } from '@daffodil/auth/driver';
import { DaffAuthResetPasswordInfoFactory } from '@daffodil/auth/testing';

import { DaffTestingResetPasswordService } from './service';

describe('@daffodil/auth/driver/testing | DaffTestingResetPasswordService', () => {
  let registerService: DaffResetPasswordServiceInterface;

  let resetInfoFactory: DaffAuthResetPasswordInfoFactory;

  let mockResetInfo: DaffAuthResetPasswordInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffTestingResetPasswordService,
      ],
    });

    registerService = TestBed.inject(DaffTestingResetPasswordService);
    resetInfoFactory = TestBed.inject(DaffAuthResetPasswordInfoFactory);

    mockResetInfo = resetInfoFactory.create();
  });

  it('should be created', () => {
    expect(registerService).toBeTruthy();
  });

  describe('resetPassword', () => {
    it('should return', done => {
      registerService.resetPassword(mockResetInfo).subscribe(() => {
        done();
      });
    });
  });

  describe('sendResetEmail', () => {
    it('should return', done => {
      registerService.sendResetEmail(mockResetInfo.email).subscribe((token) => {
        done();
      });
    });
  });
});
