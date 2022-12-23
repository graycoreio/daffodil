import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import {
  getCustomer,
  MagentoGetCustomerResponse,
  MagentoCustomer,
} from '@daffodil/customer/driver/magento';
import { MagentoCustomerFactory } from '@daffodil/customer/driver/magento/testing';
import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';

import { DaffCustomerMagentoService } from './customer.service';

describe('@daffodil/customer/driver/magento | DaffCustomerMagentoService', () => {
  let service: DaffCustomerMagentoService;
  let controller: ApolloTestingController;

  let magentoCustomerFactory: MagentoCustomerFactory;

  let mockMagentoCustomer: MagentoCustomer;
  let mockGetCustomerResponse: MagentoGetCustomerResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffCustomerMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffCustomerMagentoService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCustomerFactory = TestBed.inject(MagentoCustomerFactory);

    mockMagentoCustomer = magentoCustomerFactory.create();
    mockGetCustomerResponse = {
      customer: mockMagentoCustomer,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the customer', done => {
        service.get().subscribe((result) => {
          expect(result.id).toEqual(mockMagentoCustomer.email);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomer));

        op.flush({
          data: mockGetCustomerResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.get().pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getCustomer));

        op.graphqlErrors([new GraphQLError(
          'Generic error.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql' },
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
