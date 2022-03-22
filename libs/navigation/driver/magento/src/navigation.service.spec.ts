import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingModule,
  ApolloTestingController,
  APOLLO_TESTING_CACHE,
} from '@damienwebdev/apollo-angular/testing';

import { schema } from '@daffodil/driver/magento';
import { DaffNavigationTransformer } from '@daffodil/navigation/driver';
import {
  DaffMagentoNavigationTransformerService,
  MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
  daffMagentoGetCategoryTree,
} from '@daffodil/navigation/driver/magento';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { GetCategoryTreeResponse } from './models/public_api';
import { DaffMagentoNavigationService } from './navigation.service';

describe('Driver | Magento | Navigation | NavigationService', () => {
  let navigationService: DaffMagentoNavigationService;
  let navigationTreeFactory: DaffNavigationTreeFactory;
  let controller: ApolloTestingController;

  const queryDepth = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoNavigationService,
        { provide: DaffNavigationTransformer, useExisting: DaffMagentoNavigationTransformerService },
        {
          provide: MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
          useValue: queryDepth,
        },
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    controller = TestBed.inject(ApolloTestingController);

    navigationService = TestBed.inject(DaffMagentoNavigationService);
    navigationTreeFactory = TestBed.inject(DaffNavigationTreeFactory);
  });

  it('should be created', () => {
    expect(navigationService).toBeTruthy();
  });

  describe('get | getting a single navigation', () => {
    it('should return an observable single navigation', done => {
      const navigation = navigationTreeFactory.create();
      const response: GetCategoryTreeResponse = {
        categoryList: [{
          __typename: 'CategoryTree',
          uid: navigation.id,
          url_path: navigation.id,
          url_suffix: '.html',
          name: navigation.name,
          include_in_menu: true,
          level: 0,
          position: 1,
          product_count: navigation.total_products,
          children_count: navigation.children_count,
          children: [],
          breadcrumbs: [],
        }],
      };

      navigationService.get(navigation.id).subscribe((result) => {
        expect(result.id).toEqual(navigation.id);
        expect(result.name).toEqual(navigation.name);
        expect(result.url).toEqual(`/${navigation.id}.html`);
        expect(result.total_products).toEqual(navigation.total_products);
        expect(result.children_count).toEqual(navigation.children_count);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(daffMagentoGetCategoryTree(queryDepth)));

      expect(op.operation.variables.filters).toEqual({ category_uid: { eq: navigation.id }});

      op.flush({
        data: response,
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
