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

import { provideDaffCartMagentoCartTransforms } from '@daffodil/cart/driver/magento';
import {
  MagentoCartWithStoreCredit,
  MagentoApplyStoreCreditResponse,
  magentoApplyStoreCredit,
  MagentoRemoveStoreCreditResponse,
  magentoRemoveStoreCredit,
  magentoCartWithStoreCreditTransform,
} from '@daffodil/cart-store-credit/driver/magento';
import { MagentoCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/driver/magento/testing';
import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';

import { DaffCartStoreCreditMagentoService } from './store-credit.service';

describe('@daffodil/cart-store-credit/driver/magento | DaffCartStoreCreditMagentoService', () => {
  let service: DaffCartStoreCreditMagentoService;
  let controller: ApolloTestingController;

  let magentoCartStoreCreditFactory: MagentoCartWithStoreCreditFactory;

  let mockMagentoCartWithStoreCredit: MagentoCartWithStoreCredit;
  let mockApplyStoreCreditResponse: MagentoApplyStoreCreditResponse;
  let mockRemoveStoreCreditResponse: MagentoRemoveStoreCreditResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffCartStoreCreditMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
        provideDaffCartMagentoCartTransforms(
          magentoCartWithStoreCreditTransform,
        ),
      ],
    });

    service = TestBed.inject(DaffCartStoreCreditMagentoService);
    controller = TestBed.inject(ApolloTestingController);

    magentoCartStoreCreditFactory = TestBed.inject(MagentoCartWithStoreCreditFactory);

    mockMagentoCartWithStoreCredit = magentoCartStoreCreditFactory.create();
    mockMagentoCartWithStoreCredit.applied_store_credit.enabled = true;
    mockApplyStoreCreditResponse = {
      applyStoreCreditToCart: {
        cart: mockMagentoCartWithStoreCredit,
      },
    };
    mockRemoveStoreCreditResponse = {
      removeStoreCreditFromCart: {
        cart: mockMagentoCartWithStoreCredit,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('apply', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the storeCredit', done => {
        service.apply(mockMagentoCartWithStoreCredit.id).subscribe((result) => {
          expect(result.appliedStoreCredit).toEqual(mockMagentoCartWithStoreCredit.applied_store_credit.applied_balance.value);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(magentoApplyStoreCredit()));

        op.flush({
          data: mockApplyStoreCreditResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.apply(mockMagentoCartWithStoreCredit.id).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(magentoApplyStoreCredit()));

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

  describe('remove', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the storeCredit', done => {
        service.remove(mockMagentoCartWithStoreCredit.id).subscribe((result) => {
          expect(result.appliedStoreCredit).toEqual(mockMagentoCartWithStoreCredit.applied_store_credit.applied_balance.value);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(magentoRemoveStoreCredit()));

        op.flush({
          data: mockRemoveStoreCreditResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.remove(mockMagentoCartWithStoreCredit.id).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(magentoRemoveStoreCredit()));

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
