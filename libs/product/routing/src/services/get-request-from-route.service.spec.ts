import { Component } from '@angular/core';
import {
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DaffCollectionRequest,
  DaffFilterType,
} from '@daffodil/core';
import { daffRoutingQueryParamFilterRequestEqualBuilder } from '@daffodil/core/routing';
import {
  DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS,
  DaffCollectionRequestQueryParamTransform,
} from '@daffodil/product/routing';

import { DaffProductGetCollectionRequestFromRoute } from './get-request-from-route.service';
import { DAFF_PRODUCT_ROUTING_CONFIG } from '../config/token';

@Component({
  template: '',
  standalone: false,
})
class TestComponent {}

describe('@daffodil/product/routing | DaffProductGetCollectionRequestFromRoute', () => {
  let customPageSizeQp: string;
  let customCurrentPageTransform: DaffCollectionRequestQueryParamTransform<number>;

  let service: DaffProductGetCollectionRequestFromRoute;
  let router: Router;

  let result: DaffCollectionRequest;

  beforeEach(() => {
    customPageSizeQp = 'custom_pageSize';
    customCurrentPageTransform = {
      request: val => Number(val),
    };

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
        DaffProductGetCollectionRequestFromRoute,
        {
          provide: DAFF_PRODUCT_ROUTING_CONFIG,
          useValue: {
            params: {
              pageSize: customPageSizeQp,
            },
            transforms:  {
              currentPage: customCurrentPageTransform,
            },
          },
        },
        {
          provide: DAFF_PRODUCT_ROUTING_DISCRETE_FILTER_PARAMS,
          useValue: [{
            filterName: 'discrete',
            queryParam: 'discrete',
            builder: daffRoutingQueryParamFilterRequestEqualBuilder,
          }],
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
      expect(Number(result.pageSize)).toEqual(pageSizeValue);
    });
  });

  describe('when the value is passed through a default query param', () => {
    let sortOptionValue: string;

    beforeEach(fakeAsync(() => {
      sortOptionValue = 'name';
      router.navigateByUrl(`/test?appliedSortOption=${sortOptionValue}`);
      tick();
      result = service.getRequest(TestBed.inject(ActivatedRoute).snapshot.queryParamMap);
    }));

    it('should set the request field from that default query param without performing a transform', () => {
      expect(result.appliedSortOption).toEqual(sortOptionValue);
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
      router.navigateByUrl(`/test?currentPage=${currentPageValue}`);
      tick();
      result = service.getRequest(TestBed.inject(ActivatedRoute).snapshot.queryParamMap);
    }));

    it('should set the request field to the value returned by the custom transform', () => {
      expect(result.currentPage).toEqual(customCurrentPageTransform.request(currentPageValue));
    });
  });

  describe('when the value is passed through a discrete query param', () => {
    let filterValue: string;

    beforeEach(fakeAsync(() => {
      filterValue = '2';
      router.navigateByUrl(`/test?discrete=${filterValue}`);
      tick();
      result = service.getRequest(TestBed.inject(ActivatedRoute).snapshot.queryParamMap);
    }));

    it('should set the request field to the value returned by the custom transform', () => {
      expect(result.filterRequests).toContain(jasmine.objectContaining({
        type: DaffFilterType.Equal,
        name: 'discrete',
        value: [filterValue],
      }));
    });
  });
});
