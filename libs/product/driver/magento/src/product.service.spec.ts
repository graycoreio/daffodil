import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingModule,
  ApolloTestingController,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';

import { schema } from '@daffodil/driver/magento';
import {
  GetProductQuery,
  MagentoSimpleProduct,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { MAGENTO_PRODUCT_CONFIG_TOKEN } from './interfaces/public_api';
import { DaffMagentoProductService } from './product.service';
import { GetProductByUrlQuery } from './queries/get-product-by-url';

describe('Product | Magento | ProductService', () => {
  let service: DaffMagentoProductService;
  let controller: ApolloTestingController;
  let magentoSimpleProductFactory: MagentoProductFactory;
  let stubSimpleProduct: MagentoSimpleProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [
        DaffMagentoProductService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
        {
          provide: MAGENTO_PRODUCT_CONFIG_TOKEN,
          useValue: 'http://testwebsite.com',
        },
      ],
    });

    service = TestBed.inject(DaffMagentoProductService);
    controller = TestBed.inject(ApolloTestingController);
    magentoSimpleProductFactory = TestBed.inject(MagentoProductFactory);

    stubSimpleProduct = magentoSimpleProductFactory.create();
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a single product', () => {
    it('should return a DaffProduct', done => {
      service.get('TESTING_SKU').subscribe(r => {
        expect(r.id).toEqual(stubSimpleProduct.sku);
        expect(r.name).toBeDefined();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(GetProductQuery));

      op.flush({
        data: {
          products: {
            __typename: 'Products',
            items: [stubSimpleProduct],
          },
        },
      });
    });

    describe('handling different product types', () => {
      it('should be able to retrieve a DaffProduct for a simple', done => {
        service.get('TESTING_SKU').subscribe(r => {
          expect(r.id).toEqual(stubSimpleProduct.sku);
          expect(r.name).toBeDefined();
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(GetProductQuery));

        op.flush({
          data: {
            products: {
              __typename: 'Products',
              items: [stubSimpleProduct],
            },
          },
        });
      });
    });
  });

  describe('getByUrl | getting a single product by url', () => {
    it('should return a DaffProduct', done => {
      service.getByUrl('TESTING_URL').subscribe(r => {
        expect(r.id).toEqual(stubSimpleProduct.sku);
        expect(r.name).toBeDefined();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(GetProductByUrlQuery));

      op.flush({
        data: {
          products: {
            __typename: 'Products',
            items: [stubSimpleProduct],
          },
        },
      });
    });
  });
});
