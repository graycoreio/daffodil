import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import { MagentoCategory } from '@daffodil/category/driver/magento';
import { DaffCategoryDriverMagentoCategoryFactory } from '@daffodil/category/driver/magento/testing';
import { DAFF_SEARCH_CATEGORY_RESULT_KIND } from '@daffodil/search-category';
import { MagentoSearchForCategoriesResponse } from '@daffodil/search-category/driver/magento';

import { DaffSearchCategoryMagentoDriver } from './category-search.service';
import { categorySearch } from './queries/category-search';


describe('@daffodil/search-category/driver/magento | DaffSearchCategoryMagentoDriver', () => {
  let service: DaffSearchCategoryMagentoDriver;
  let controller: ApolloTestingController;

  let magentoCategoryFactory: DaffCategoryDriverMagentoCategoryFactory;
  let mockCategory: MagentoCategory;
  let mockGetCategoriesResponse: MagentoSearchForCategoriesResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffSearchCategoryMagentoDriver,
      ],
    });

    service = TestBed.inject(DaffSearchCategoryMagentoDriver);
    controller = TestBed.inject(ApolloTestingController);
    magentoCategoryFactory = TestBed.inject(DaffCategoryDriverMagentoCategoryFactory);

    mockCategory = magentoCategoryFactory.create();
    mockGetCategoriesResponse = {
      categories: {
        items: [
          mockCategory,
        ],
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search | searching for categories', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return a collection of category search results', done => {
        service.search('query').subscribe(result => {
          expect(result.collection[DAFF_SEARCH_CATEGORY_RESULT_KIND][0].id).toEqual(mockCategory.uid);
          done();
        });

        const op = controller.expectOne(categorySearch());

        op.flushData(mockGetCategoriesResponse);
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.search('query').pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(categorySearch());

        op.graphqlErrors([new GraphQLError(
          'Can\'t find any categories matching that query.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });
  });

  describe('incremental | searching for categories', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return a collection of category search results', done => {
        service.incremental('query').subscribe(result => {
          expect(result.collection[DAFF_SEARCH_CATEGORY_RESULT_KIND][0].id).toEqual(mockCategory.uid);
          done();
        });

        const op = controller.expectOne(categorySearch());

        op.flushData(mockGetCategoriesResponse);
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.incremental('query').pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(categorySearch());

        op.graphqlErrors([new GraphQLError(
          'Can\'t find any categories matching that query.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });
  });
});
