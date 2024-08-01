import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  provideRouter,
  Router,
} from '@angular/router';

import { DaffRouterActivatedRoute } from './service';

@Component({})
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
});
