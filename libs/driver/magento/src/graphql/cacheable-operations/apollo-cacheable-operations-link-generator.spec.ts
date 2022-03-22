import { TestBed } from '@angular/core/testing';
import {
  gql,
  NextLink,
  Operation,
} from '@apollo/client/core';
import { Apollo } from '@damienwebdev/apollo-angular';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from '@damienwebdev/apollo-angular/testing';

import { DaffMagentoApolloCacheableOperationsLinkGenerator } from './apollo-cacheable-operations-link-generator';
import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from './cacheable-operations-token';

describe('Driver | Magento | GraphQL | DaffMagentoApolloCacheableOperationsLinkGenerator', () => {
  let service: DaffMagentoApolloCacheableOperationsLinkGenerator;
  let mockOperationConverterFunction;
  let operation: Operation;
  let apollo: Apollo;
  let controller: ApolloTestingController;
  const cacheableQuery = gql`{ CacheableOperationName(test: string) { name }}`;
  const nonCacheableQuery = gql`{ NonCacheableOperationName(test: string) { name }}`;

  beforeEach(() => {
    mockOperationConverterFunction = jasmine.createSpy();
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: 'CacheableOperationName',
          multi: true,
        },
      ],
    });

    controller = TestBed.inject(ApolloTestingController);
    apollo = TestBed.inject(Apollo);
    service = TestBed.inject(DaffMagentoApolloCacheableOperationsLinkGenerator);
  });

  describe('getLink', () => {

    it('should set the method context to GET when the operation is cacheable', () => {
      apollo.query({ query: cacheableQuery }).subscribe();
      operation = controller.expectOne(cacheableQuery).operation;
      operation.operationName = 'CacheableOperationName';
      console.log(operation);
      service.getLink().request(operation, <NextLink><unknown>jasmine.createSpy);

      expect(operation.getContext().method).toEqual('GET');
    });

    it('should not set the method context to GET when the operation is not cacheable', () => {
      apollo.query({ query: nonCacheableQuery }).subscribe();
      operation = controller.expectOne(nonCacheableQuery).operation;
      operation.operationName = 'NonCacheableOperationName';

      service.getLink().request(operation, <NextLink><unknown>jasmine.createSpy);

      expect(operation.getContext().method).not.toEqual('GET');
    });
  });
});
