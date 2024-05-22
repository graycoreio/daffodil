import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';

import { observe } from '@daffodil/core';

import { daffRouterComposeGuards } from './compose';

describe('@daffodil/router | daffRouterComposeGuards', () => {
  let blockingGuard0: jasmine.Spy<CanActivateFn>;
  let blockingGuard1: jasmine.Spy<CanActivateFn>;
  let blockingGuard2: jasmine.Spy<CanActivateFn>;
  let nonBlockingGuard0: jasmine.Spy<CanActivateFn>;
  let nonBlockingGuard1: jasmine.Spy<CanActivateFn>;
  let nonBlockingGuard2: jasmine.Spy<CanActivateFn>;
  let result: CanActivateFn;
  const args = <const>[new ActivatedRouteSnapshot(), <RouterStateSnapshot>{}];

  beforeEach(() => {
    blockingGuard0 = jasmine.createSpy().and.returnValue(of(true));
    blockingGuard1 = jasmine.createSpy().and.returnValue(of(true));
    blockingGuard2 = jasmine.createSpy().and.returnValue(of(true));
    nonBlockingGuard0 = jasmine.createSpy().and.returnValue(of(true));
    nonBlockingGuard1 = jasmine.createSpy().and.returnValue(of(true));
    nonBlockingGuard2 = jasmine.createSpy().and.returnValue(of(true));

    result = daffRouterComposeGuards([
      blockingGuard0,
      blockingGuard1,
      blockingGuard2,
    ], [
      nonBlockingGuard0,
      nonBlockingGuard1,
      nonBlockingGuard2,
    ]);
  });

  describe('when all guards return true', () => {
    it('should return true', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(res).toBeTrue();
        done();
      });
    });

    it('should call the all the guards', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(blockingGuard0).toHaveBeenCalledWith(...args);
        expect(blockingGuard1).toHaveBeenCalledWith(...args);
        expect(blockingGuard2).toHaveBeenCalledWith(...args);
        expect(nonBlockingGuard0).toHaveBeenCalledWith(...args);
        expect(nonBlockingGuard1).toHaveBeenCalledWith(...args);
        expect(nonBlockingGuard2).toHaveBeenCalledWith(...args);
        done();
      });
    });

    it('should call the first blocking guard before all the other guards', (done) => {
      blockingGuard0.and.callFake(() => {
        expect(blockingGuard1).not.toHaveBeenCalled();
        expect(blockingGuard2).not.toHaveBeenCalled();
        expect(nonBlockingGuard0).not.toHaveBeenCalled();
        expect(nonBlockingGuard1).not.toHaveBeenCalled();
        expect(nonBlockingGuard2).not.toHaveBeenCalled();
        return true;
      });
      observe(result(...args)).subscribe((res) => {
        done();
      });
    });

    it('should call the second blocking guard after the first and before all the other guards', (done) => {
      blockingGuard1.and.callFake(() => {
        expect(blockingGuard0).toHaveBeenCalledWith(...args);

        expect(blockingGuard2).not.toHaveBeenCalled();
        expect(nonBlockingGuard0).not.toHaveBeenCalled();
        expect(nonBlockingGuard1).not.toHaveBeenCalled();
        expect(nonBlockingGuard2).not.toHaveBeenCalled();
        return true;
      });
      observe(result(...args)).subscribe((res) => {
        done();
      });
    });

    it('should call the third blocking guard after the first and second and before all the other guards', (done) => {
      blockingGuard2.and.callFake(() => {
        expect(blockingGuard0).toHaveBeenCalledWith(...args);
        expect(blockingGuard1).toHaveBeenCalledWith(...args);

        expect(nonBlockingGuard0).not.toHaveBeenCalled();
        expect(nonBlockingGuard1).not.toHaveBeenCalled();
        expect(nonBlockingGuard2).not.toHaveBeenCalled();
        return true;
      });
      observe(result(...args)).subscribe((res) => {
        done();
      });
    });
  });

  describe('when the first blocking guard returns false', () => {
    beforeEach(() => {
      blockingGuard0.and.returnValue(of(false));
    });

    it('should return false', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(res).toBeFalse();
        done();
      });
    });

    it('should not call any other guards', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(blockingGuard1).not.toHaveBeenCalled();
        expect(blockingGuard2).not.toHaveBeenCalled();
        expect(nonBlockingGuard0).not.toHaveBeenCalled();
        expect(nonBlockingGuard1).not.toHaveBeenCalled();
        expect(nonBlockingGuard2).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('when the second blocking guard returns false', () => {
    beforeEach(() => {
      blockingGuard1.and.returnValue(of(false));
    });

    it('should return false', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(res).toBeFalse();
        done();
      });
    });
  });

  describe('when the third blocking guard returns false', () => {
    beforeEach(() => {
      blockingGuard2.and.returnValue(of(false));
    });

    it('should return false', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(res).toBeFalse();
        done();
      });
    });
  });

  describe('when a single non-blocking guard returns false', () => {
    beforeEach(() => {
      nonBlockingGuard1.and.returnValue(of(false));
    });

    it('should return false', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(res).toBeFalse();
        done();
      });
    });

    it('should call the all the guards', (done) => {
      observe(result(...args)).subscribe((res) => {
        expect(blockingGuard0).toHaveBeenCalledWith(...args);
        expect(blockingGuard1).toHaveBeenCalledWith(...args);
        expect(blockingGuard2).toHaveBeenCalledWith(...args);
        expect(nonBlockingGuard0).toHaveBeenCalledWith(...args);
        expect(nonBlockingGuard1).toHaveBeenCalledWith(...args);
        expect(nonBlockingGuard2).toHaveBeenCalledWith(...args);
        done();
      });
    });
  });
});
