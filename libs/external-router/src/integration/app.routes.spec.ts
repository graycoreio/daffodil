import { provideLocationMocks } from '@angular/common/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterTestingDriver } from '@daffodil/external-router/driver/testing';
import { daffExternalMatcherTypeGuard } from '@daffodil/external-router/routing';

// Dummy component for routing
@Component({
  template: '',
  standalone: false,
})
class DummyComponent {}

// Dummy component for routing
@Component({
  template: '',
  standalone: false,
})
class DummyOtherComponent {}

const TESTING_CONFIG = {
  'test-path': 'TEST_TYPE',
  'some-other-type': 'SOME_OTHER_TYPE',
};

describe('daffExternalMatcherTypeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          {
            path: '**',
            canMatch: [daffExternalMatcherTypeGuard('TEST_TYPE')],
            component: DummyComponent,
          },
          {
            path: '**',
            canMatch: [daffExternalMatcherTypeGuard('SOME_OTHER_TYPE')],
            component: DummyOtherComponent,
          },
        ]),
        provideLocationMocks(),
        provideExternalRouter(),
        provideDaffExternalRouterTestingDriver(TESTING_CONFIG),
      ],
    });
  });

  it('should match the route type for `test-path` correctly', done => {
    const router = TestBed.inject(Router);

    router.navigateByUrl('/test-path').then(isMatch => {
      expect(isMatch).toBe(true);
      done();
    }).catch(done.fail);
  });

  it('should match the route type for `some-other-type` correctly', done => {
    const router = TestBed.inject(Router);

    router.navigateByUrl('/some-other-type').then(isMatch => {
      expect(isMatch).toBe(true);
      done();
    }).catch(done.fail);
  });

  it('should not match the route type incorrectly', done => {
    const router = TestBed.inject(Router);

    router.navigateByUrl('/non-existent-path')
      .then(() => done.fail())
      .catch((e) => {
        expect(e.code).toEqual(4002);
        done();
      });
  });
});
