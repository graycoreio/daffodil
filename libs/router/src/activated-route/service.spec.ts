import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  provideRouter,
  Router,
} from '@angular/router';
import { tap } from 'rxjs';

import { DaffRouterActivatedRoute } from './service';

@Component({
  standalone: false,
})
class TestComponent {}

describe('@daffodil/router | DaffRouterActivatedRoute', () => {
  let service: DaffRouterActivatedRoute;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          {
            path: '',
            children: [
              {
                path: '',
                data: {
                  test: 'foo',
                },
                children: [
                  {
                    path: '',
                    data: {
                      foo: 'bar',
                    },
                    component: TestComponent,
                  },
                ],
              },
              {
                path: 'other',
                data: {
                  test: 'other',
                },
                component: TestComponent,
              },
            ],
          },
        ]),
      ],
    });

    service = TestBed.inject(DaffRouterActivatedRoute);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the activated route for the current tree', (done) => {
    service.route$.subscribe((route) => {
      expect(route.snapshot.data['foo']).toEqual('bar');
      expect(route.snapshot.data['test']).toEqual('foo');
      done();
    });
    router.initialNavigation();
  });

  it('should only emit the last value when the stream is subscribed to late', async (done) => {
    const spy = jasmine.createSpy();
    service.route$.subscribe();
    router.initialNavigation();
    await router.navigateByUrl('/');
    await router.navigateByUrl('/other');
    service.route$.pipe(
      tap(spy),
    ).subscribe((route) => {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(route.snapshot.data['test']).toEqual('other');
      done();
    });
  });
});
