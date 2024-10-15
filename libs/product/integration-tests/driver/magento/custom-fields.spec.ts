import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { gql } from 'apollo-angular';
import {
  ApolloTestingModule,
  ApolloTestingController,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';

import { schema } from '@daffodil/driver/magento';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductServiceInterface,
  DaffProductDriverResponse,
  DaffProductDriver,
} from '@daffodil/product/driver';
import {
  provideDaffProductMagentoExtraProductFragments,
  DaffProductMagentoDriverModule,
  DaffMagentoProductResponseExtraTransform,
  MagentoProduct,
  provideDaffProductMagentoExtraProductResponseTransforms,
  MagentoSimpleProduct,
  getProduct,
  DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';


interface MyProduct extends DaffProduct {
  updated_at: string;
}

interface MyMagentoProduct extends MagentoProduct {
  updated_at: string;
}

const myProductFragment = gql`
  fragment MyProductFragment on ProductInterface {
    updated_at
  }
`;

const myProductTransformer: DaffMagentoProductResponseExtraTransform<MyMagentoProduct, DaffProductDriverResponse<MyProduct>> =
  (daffResponse, magentoProduct) => ({
    ...daffResponse,
    products: [{
      ...daffResponse.products[0],
      updated_at: magentoProduct.updated_at,
    }],
  });

describe('@daffodil/product | Querying and Transforming Custom Fields in Magento Driver', () => {
  let controller: ApolloTestingController;
  let driver: DaffProductServiceInterface<MyProduct>;
  let magentoSimpleProductFactory: MagentoProductFactory;

  let stubSimpleProduct: MagentoSimpleProduct;
  let updatedAt: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        DaffProductMagentoDriverModule.forRoot(),
      ],
      providers: [
        ...provideDaffProductMagentoExtraProductFragments(myProductFragment),
        ...provideDaffProductMagentoExtraProductResponseTransforms(myProductTransformer),
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    driver = TestBed.inject<DaffProductServiceInterface<MyProduct>>(DaffProductDriver);
    controller = TestBed.inject(ApolloTestingController);
    magentoSimpleProductFactory = TestBed.inject(MagentoProductFactory);

    stubSimpleProduct = magentoSimpleProductFactory.create();
    updatedAt = (new Date()).toDateString();
  });

  it('should query and return an object with updated_at', done => {
    driver.get(stubSimpleProduct.sku).subscribe(resp => {
      // note that resp's type is correctly inferred as DaffProductDriverResponse<MyProduct>
      expect(resp.products[0].updated_at).toEqual(updatedAt);
      done();
    });

    const op = controller.expectOne(DAFF_MAGENTO_GET_A_PRODUCT_QUERY_NAME);

    op.flushData({
      __typename: '',
      products: {
        __typename: '',
        items: [{
          ...stubSimpleProduct,
          updated_at: updatedAt,
        }],
      },
    });
  });

  afterEach(() => {
    controller.verify();
  });
});
