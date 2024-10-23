# Testing

You may want to test your routing configuration if you have a complex routing configuration with multiple types of routes that are handled by the `daffExternalMatcherTypeGuard`. This guide will walk you through setting up and using the `DaffExternalRouterDriverTestingModule` and `DaffExternalRouterDriver` to test the behavior of the `daffExternalMatcherTypeGuard` in your Angular routing configuration.

Let's take the following sample routing configuration:

```ts
export const routes = [
 {
  path: '**'
  canMatch: [daffExternalMatcherTypeGuard('TEST_TYPE')],
  component: DummyComponent,
 },
 {
  path: '**'
  canMatch: [daffExternalMatcherTypeGuard('SOME_OTHER_TYPE')],
  component: DummyOtherComponent,
 },
];
```

You may want to test how exactly your two `canMatch` interact with each other along with other guards that you have.

You can make a `app.routes.spec.ts` file as below and verify that your routes operate properly:

<!-- TODO(damienwebdev): Make this import from the integration test -->

```ts
import { provideLocationMocks } from '@angular/common/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';

import { provideExternalRouter } from '@daffodil/external-router';
import { provideDaffExternalRouterTestingDriver } from '@daffodil/external-router/driver/testing';
import { daffExternalMatcherTypeGuard } from '@daffodil/external-router/routing';

// Dummy component for routing
@Component({ template: '' })
class DummyComponent {}

// Dummy component for routing
@Component({ template: '' })
class DummyOtherComponent {}

/**
 * This key sets up the path-type relationship so that you can
 * guarantee a certain route meets a certain type.
 */
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

  router
   .navigateByUrl('/test-path')
   .then(isMatch => {
    expect(isMatch).toBe(true);
    done();
   })
   .catch(done.fail);
 });

 it('should match the route type for `some-other-type` correctly', done => {
  const router = TestBed.inject(Router);

  router
   .navigateByUrl('/some-other-type')
   .then(isMatch => {
    expect(isMatch).toBe(true);
    done();
   })
   .catch(done.fail);
 });

 it('should not match the route type incorrectly', done => {
  const router = TestBed.inject(Router);

  router
   .navigateByUrl('/non-existent-path')
   .then(() => done.fail)
   .catch(e => done());
 });
});
```
