import { TestBed } from '@angular/core/testing';
import {
  ApolloLink,
  gql,
  NextLink,
  Observable,
  Operation,
} from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';

import {
  DaffMagentoCacheHeaderApolloLinkGenerator,
  MAGENTO_CUSTOMER_CACHE_ID_HEADER,
} from './cache-header-apollo-link';

describe('@daffodil/driver/magento | DaffMagentoCacheHeaderApolloLinkGenerator', () => {
  let service: DaffMagentoCacheHeaderApolloLinkGenerator;
  let operation: Operation;
  let apollo: Apollo;
  let controller: ApolloTestingController;
  let link: ApolloLink;
  let linkSpy: jasmine.Spy<NextLink>;
  let cacheId: string;
  const query = gql`{ Operation(test: string) { name }}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
    });

    controller = TestBed.inject(ApolloTestingController);
    apollo = TestBed.inject(Apollo);
    service = TestBed.inject(DaffMagentoCacheHeaderApolloLinkGenerator);

    link = service.getLink();
    linkSpy = jasmine.createSpy();
    linkSpy.and.returnValue(Observable.of());
    cacheId = 'cacheId';
  });

  describe('getLink', () => {
    it('should not set the cache header when it was not included with a previous response', () => {
      apollo.query({ query }).subscribe();
      operation = controller.expectOne(query).operation;
      link.request(operation, linkSpy);

      expect(operation.getContext().headers?.[MAGENTO_CUSTOMER_CACHE_ID_HEADER]).toBeFalsy();
    });

    it('should set the cache header when it was included with a previous response', () => {
      apollo.query({ query }).subscribe();
      operation = controller.expectOne(query).operation;
      operation.setContext({
        headers: {
          [MAGENTO_CUSTOMER_CACHE_ID_HEADER]: cacheId,
        },
      });
      link.request(operation, linkSpy);

      expect(operation.getContext().headers?.[MAGENTO_CUSTOMER_CACHE_ID_HEADER]).toEqual(cacheId);
    });

    it('should set the cache header to the new value when the cache ID changes', () => {
      const newCacheId = 'newCacheId';
      apollo.query({ query }).subscribe();
      operation = controller.expectOne(query).operation;
      operation.setContext({
        headers: {
          [MAGENTO_CUSTOMER_CACHE_ID_HEADER]: cacheId,
        },
      });
      link.request(operation, linkSpy);

      operation.setContext({
        headers: {
          [MAGENTO_CUSTOMER_CACHE_ID_HEADER]: newCacheId,
        },
      });
      link.request(operation, linkSpy);

      expect(operation.getContext().headers?.[MAGENTO_CUSTOMER_CACHE_ID_HEADER]).toEqual(newCacheId);
    });
  });
});
