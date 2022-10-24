import { TestBed } from '@angular/core/testing';
import {
  DocumentNode,
  gql,
  NextLink,
  Operation,
} from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';

import { DaffAuthStorageService } from '@daffodil/auth';

import { MagentoAuthApolloBearerTokenLinkGenerator } from './apollo-bearer-token-link-generator';

describe('@daffodil/auth/driver/magento | MagentoAuthApolloBearerTokenLinkGenerator', () => {
  let service: MagentoAuthApolloBearerTokenLinkGenerator;
  let daffAuthStorageService: jasmine.SpyObj<DaffAuthStorageService>;
  let operation: Operation;
  let apollo: Apollo;
  let controller: ApolloTestingController;

  let query: DocumentNode;
  let token: string;

  beforeEach(() => {
    daffAuthStorageService = jasmine.createSpyObj('DaffAuthStorageService', ['getAuthToken']);

    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        {
          provide: DaffAuthStorageService,
          useValue: daffAuthStorageService,
        },
      ],
    });

    controller = TestBed.inject(ApolloTestingController);
    apollo = TestBed.inject(Apollo);
    service = TestBed.inject(MagentoAuthApolloBearerTokenLinkGenerator);

    token = 'token';
    query = gql`query {
      test {
        __typename
        test
      }
    }`;
  });

  describe('getLink', () => {
    describe('when the token is in storage', () => {
      beforeEach(() => {
        daffAuthStorageService.getAuthToken.and.returnValue(token);
      });

      it('should set the authorization header to the bearer token', () => {
        apollo.query({ query }).subscribe();
        operation = controller.expectOne(query).operation;
        service.getLink().request(operation, <NextLink><unknown>jasmine.createSpy);

        expect(operation.getContext().headers.authorization).toEqual(`Bearer ${token}`);
      });
    });

    describe('when the token is not in storage', () => {
      beforeEach(() => {
        daffAuthStorageService.getAuthToken.and.returnValue(null);
      });

      it('should not set the authorization header', () => {
        apollo.query({ query }).subscribe();
        operation = controller.expectOne(query).operation;
        service.getLink().request(operation, <NextLink><unknown>jasmine.createSpy);

        expect(operation.getContext().headers?.authorization).toBeUndefined();
      });
    });
  });
});
