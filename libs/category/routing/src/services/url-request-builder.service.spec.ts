import {
  Component,
  inject,
} from '@angular/core';
import {
  TestBed,
  waitForAsync,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DaffCategoryRequestKind } from '@daffodil/category';
import { DaffCategoryRoutingRequestBuilder } from '@daffodil/category/routing';
import {
  DaffProductGetCollectionRequestFromRoute,
  DaffProductRoutingModule,
} from '@daffodil/product/routing';

import { DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER } from '../injection-tokens/request/builder.token';
import { DaffCategoryRoutingUrlRequestBuilder } from './url-request-builder.service';

@Component({ template: '' })
class TestComponent {}

describe('@daffodil/category/routing | DaffCategoryRoutingUrlRequestBuilder', () => {
  const actions$: Observable<any> = null;
  let service: DaffCategoryRoutingUrlRequestBuilder;

  let route: ActivatedRoute;
  let router: Router;
  let path: string;

  beforeEach(waitForAsync(() => {
    path = '123';
    TestBed.configureTestingModule({
      imports: [
        DaffProductRoutingModule,
        RouterTestingModule.withRoutes([
          {
            path,
            component: TestComponent,
          },
          {
            path: 'outlet',
            component: TestComponent,
            outlet: 'secondary',
          },
          {
            path: '**',
            component: TestComponent,
          },
        ]),
      ],
      providers: [
        DaffCategoryRoutingUrlRequestBuilder,
        provideMockActions(() => actions$),
        {
          provide: DAFF_CATEGORY_ROUTING_OPTIONS_BUILDER,
          useFactory: () => {
            const s = inject(DaffProductGetCollectionRequestFromRoute);
            const builder: DaffCategoryRoutingRequestBuilder = r => s.getRequest(r, null);
            return builder;
          },
        },
      ],
    });

    service = TestBed.inject(DaffCategoryRoutingUrlRequestBuilder);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);

    router.initialNavigation();
  }));

  describe('when the path contains a `page` query param', () => {
    let page: number;

    beforeEach(fakeAsync(() => {
      page = 4;
      path = `${path}?page=${page}`;

      const url = `/${path}`;
      router.navigateByUrl(url);
      tick();
    }));

    it('should dispatch a DaffCategoryPageLoadByUrl action with the currentPage', (done) => {
      const result = service.build(route.snapshot, router.routerState.snapshot);
      result.subscribe((res) => {
        expect(res).toEqual(jasmine.objectContaining({ url: `/${path}`, kind: DaffCategoryRequestKind.URL, currentPage: page }));
        done();
      });
    });
  });

  describe('when the URL does not contain params', () => {
    beforeEach(fakeAsync(() => {
      const url = `/${path}(secondary:outlet)`;
      router.navigateByUrl(url);
      tick();
    }));

    it('should dispatch a DaffCategoryPageLoadByUrl action with the correct category url', (done) => {
      const result = service.build(route.snapshot, router.routerState.snapshot);
      result.subscribe((res) => {
        expect(res).toEqual(jasmine.objectContaining({ url: `/${path}`, kind: DaffCategoryRequestKind.URL }));
        done();
      });
    });
  });

  it('should build without a category load success or failure', fakeAsync(() => {
    router.navigateByUrl(path);
    tick();
    const result = service.build(route.snapshot, router.routerState.snapshot);
    expect(result).toBeTruthy();
  }));
});
