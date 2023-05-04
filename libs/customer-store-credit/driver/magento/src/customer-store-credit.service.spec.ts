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
  MagentoCustomerStoreCredit,
  MagentoGetCustomerStoreCreditResponse,
  getCustomerStoreCredit,
} from '@daffodil/customer-store-credit/driver/magento';
import { MagentoCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/driver/magento/testing';
import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';

import { DaffCustomerStoreCreditMagentoService } from './customer-store-credit.service';

describe('@daffodil/customer-store-credit/driver/magento | DaffCustomerStoreCreditMagentoService', () => {
  let service: DaffCustomerStoreCreditMagentoService;
  let controller: ApolloTestingController;

  let magentoCustomerStoreCreditFactory: MagentoCustomerStoreCreditFactory;

  let mockMagentoStoreCredit: MagentoCustomerStoreCredit;
  let mockGetStoreCreditResponse: MagentoGetCustomerStoreCreditResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffCustomerStoreCreditMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffCustomerStoreCreditMagentoService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCustomerStoreCreditFactory = TestBed.inject(MagentoCustomerStoreCreditFactory);

    mockMagentoStoreCredit = magentoCustomerStoreCreditFactory.create({
      enabled: true,
    });
    mockGetStoreCreditResponse = {
      customer: {
        store_credit: mockMagentoStoreCredit,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the storeCredit', done => {
        service.get().subscribe((result) => {
          expect(result.balance).toEqual(mockMagentoStoreCredit.current_balance.value);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getCustomerStoreCredit));

        op.flush({
          data: mockGetStoreCreditResponse,
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

        const op = controller.expectOne(addTypenameToDocument(getCustomerStoreCredit));

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
