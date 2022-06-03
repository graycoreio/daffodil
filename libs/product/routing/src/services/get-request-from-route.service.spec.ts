import { Component } from '@angular/core';
import {
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffProductCollectionRequest } from '@daffodil/product';
import {
  DaffProductCollectionRequestQueryParamTransform,
  DAFF_PRODUCT_COLLECTION_QUERY_PARAMS,
  DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS,
} from '@daffodil/product/routing';

import { DaffProductGetCollectionRequestFromRoute } from './get-request-from-route.service';

@Component({ template: '' })
class TestComponent {}

describe('@daffodil/product/routing | DaffProductGetCollectionRequestFromRoute', () => {
  let customPageSizeQp: string;
  let customCurrentPageTransform: DaffProductCollectionRequestQueryParamTransform<number>;

  let service: DaffProductGetCollectionRequestFromRoute;
  let router: Router;

  let result: DaffProductCollectionRequest;

  beforeEach(() => {
    customPageSizeQp = 'custom_page_size';
    customCurrentPageTransform = val => Number(val);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '**',
            component: TestComponent,
          },
        ]),
      ],
      providers: [
        {
          provide: DAFF_PRODUCT_COLLECTION_QUERY_PARAMS,
          useValue: {
            page_size: customPageSizeQp,
          },
        },
        {
          provide: DAFF_PRODUCT_COLLECTION_QUERY_PARAM_TRANSFORMS,
          useValue: {
            current_page: customCurrentPageTransform,
          },
        },
      ],
    });

    service = TestBed.inject(DaffProductGetCollectionRequestFromRoute);
    router = TestBed.inject(Router);
  });

  describe('when the value is passed through a custom query param', () => {
    let pageSizeValue: number;

    beforeEach(fakeAsync(() => {
      pageSizeValue = 5;
      router.navigateByUrl(`/test?${customPageSizeQp}=${pageSizeValue}`);
      tick();
      result = service.getRequest(TestBed.inject(ActivatedRoute).snapshot.queryParamMap);
    }));

    it('should set the request field from that custom query param', () => {
      expect(Number(result.page_size)).toEqual(pageSizeValue);
    });
  });

  describe('when the value is passed through a default query param', () => {
    let sortOptionValue: string;

    beforeEach(fakeAsync(() => {
      sortOptionValue = 'name';
      router.navigateByUrl(`/test?applied_sort_option=${sortOptionValue}`);
      tick();
      result = service.getRequest(TestBed.inject(ActivatedRoute).snapshot.queryParamMap);
    }));

    it('should set the request field from that default query param without performing a transform', () => {
      expect(result.applied_sort_option).toEqual(sortOptionValue);
    });
  });

  describe('when the value is passed through a query param that does not correspond to a request field', () => {
    let value: string;

    beforeEach(fakeAsync(() => {
      value = 'anything';
      router.navigateByUrl(`/test?ignore_me=${value}`);
      tick();
      result = service.getRequest(TestBed.inject(ActivatedRoute).snapshot.queryParamMap);
    }));

    it('should not set a request field from that query param', () => {
      expect((<any>result).ignore_me).toBeUndefined();
      expect(Object.values(result)).not.toContain(value);
    });
  });

  describe('when the value is passed through a default query param with a custom transform', () => {
    let currentPageValue: string;

    beforeEach(fakeAsync(() => {
      currentPageValue = '2';
      router.navigateByUrl(`/test?current_page=${currentPageValue}`);
      tick();
      result = service.getRequest(TestBed.inject(ActivatedRoute).snapshot.queryParamMap);
    }));

    it('should set the request field to the value returned by the custom transform', () => {
      expect(result.current_page).toEqual(customCurrentPageTransform(currentPageValue));
    });
  });
});
