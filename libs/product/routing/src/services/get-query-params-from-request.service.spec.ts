import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

import {
  DaffCollectionRequest,
  daffFiltersToRequests,
} from '@daffodil/core';
import { DaffCollectionMetadataFactory } from '@daffodil/core/testing';
import { DaffCollectionRequestQueryParamTransform } from '@daffodil/product/routing';

import { DAFF_PRODUCT_ROUTING_CONFIG } from '../config/token';
import { DaffProductGetQueryParamsFromRequest } from './get-query-params-from-request.service';

describe('@daffodil/product/routing | DaffProductGetQueryParamsFromRequest', () => {
  let customPageSizeQp: string;
  let customCurrentPageTransform: DaffCollectionRequestQueryParamTransform<number>;

  let service: DaffProductGetQueryParamsFromRequest;
  let productCollectionMetadataFactory: DaffCollectionMetadataFactory;

  let mockRequest: DaffCollectionRequest;
  let result: Observable<Params>;

  beforeEach(() => {
    customPageSizeQp = 'custom_pageSize';
    customCurrentPageTransform = {
      request: val => Number(val),
      queryParam: val => String(val),
    };

    TestBed.configureTestingModule({
      providers: [
        DaffProductGetQueryParamsFromRequest,
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
      ],
    });

    productCollectionMetadataFactory = TestBed.inject(DaffCollectionMetadataFactory);
    service = TestBed.inject(DaffProductGetQueryParamsFromRequest);

    const metadata = productCollectionMetadataFactory.create();
    mockRequest = {
      appliedSortOption: metadata.appliedSortOption,
      appliedSortDirection: metadata.appliedSortDirection,
      currentPage: metadata.currentPage,
      pageSize: metadata.pageSize,
      filterRequests: daffFiltersToRequests(metadata.filters),
    };
  });

  describe('when the value should be set to a custom query param', () => {
    let pageSizeValue: number;

    beforeEach(() => {
      pageSizeValue = 5;
      result = service.getQueryParams({
        ...mockRequest,
        pageSize: pageSizeValue,
      });
    });

    it('should set the query param the corresponding request fields', (done) => {
      result.subscribe((res) => {
        expect(Number(res[customPageSizeQp])).toEqual(pageSizeValue);
        done();
      });
    });
  });

  describe('when there is not custom query param', () => {
    let sortOptionValue: string;

    beforeEach(() => {
      sortOptionValue = 'name';
      result = service.getQueryParams({
        ...mockRequest,
        appliedSortOption: sortOptionValue,
      });
    });

    it('should set the query param field from the request without performing a transform', (done) => {
      result.subscribe((res) => {
        expect(res.appliedSortOption).toEqual(sortOptionValue);
        done();
      });
    });
  });

  describe('when the non request fields are set', () => {
    let value: string;

    beforeEach(() => {
      value = 'anything';
      result = service.getQueryParams(<any>{
        ...mockRequest,
        ignore_me: value,
      });
    });

    it('should not set a query param from that non request field', (done) => {
      result.subscribe((res) => {
        expect((<any>res).ignore_me).toBeUndefined();
        expect(Object.values(res)).not.toContain(value);
        done();
      });
    });
  });

  describe('when the value is passed through a default query param with a custom transform', () => {
    let currentPageValue: number;

    beforeEach(() => {
      currentPageValue = 2;
      result = service.getQueryParams({
        ...mockRequest,
        currentPage: currentPageValue,
      });
    });

    it('should set the request field to the value returned by the custom transform', (done) => {
      result.subscribe((res) => {
        expect(res.currentPage).toEqual(customCurrentPageTransform.queryParam(currentPageValue));
        done();
      });
    });
  });
});
