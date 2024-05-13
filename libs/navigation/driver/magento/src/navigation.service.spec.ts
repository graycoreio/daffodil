import {
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingModule,
  ApolloTestingController,
  APOLLO_TESTING_CACHE,
  TestOperation,
} from 'apollo-angular/testing';

import { schema } from '@daffodil/driver/magento';
import { DaffNavigationTransformer } from '@daffodil/navigation/driver';
import {
  DaffMagentoNavigationTransformerService,
  daffMagentoGetCategoryTree,
  provideMagentoNavigationDriverConfig,
} from '@daffodil/navigation/driver/magento';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { GetCategoryTreeResponse } from './models/public_api';
import { DaffMagentoNavigationService } from './navigation.service';
import {
  MagentoNavgiationGetRootCategoryIdResponse,
  magentoNavigationGetRootCategoryIdQuery,
} from './queries/get-root-category-id/public_api';

describe('@daffodil/navigation/driver/magento | DaffMagentoNavigationService', () => {
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
        provideMagentoNavigationDriverConfig({
          navigationTreeQueryDepth: queryDepth,
        }),
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

  describe('getTree', () => {
    it('should return an observable single navigation', fakeAsync(() => {
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

      navigationService.getTree().subscribe((result) => {
        expect(result.id).toEqual(navigation.id);
        expect(result.name).toEqual(navigation.name);
        expect(result.url).toEqual(`/${navigation.id}.html`);
        expect(result.total_products).toEqual(navigation.total_products);
        expect(result.children_count).toEqual(navigation.children_count);
      });

      const rootIdOp: TestOperation<MagentoNavgiationGetRootCategoryIdResponse> = controller.expectOne(addTypenameToDocument(magentoNavigationGetRootCategoryIdQuery));
      rootIdOp.flushData({
        storeConfig: {
          root_category_uid: navigation.id,
        },
      });

      flush();
      tick();

      const op = controller.expectOne(addTypenameToDocument(daffMagentoGetCategoryTree(queryDepth)));

      expect(op.operation.variables.filters).toEqual({ category_uid: { eq: navigation.id }});

      op.flush({
        data: response,
      });
      flush();
    }));

    afterEach(() => {
      controller.verify();
    });
  });
});

describe('@daffodil/navigation/driver/magento | DaffMagentoNavigationService | with root category ID', () => {
  let navigationService: DaffMagentoNavigationService;
  let navigationTreeFactory: DaffNavigationTreeFactory;
  let controller: ApolloTestingController;

  const queryDepth = 1;
  const categoryId = 'categoryId';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoNavigationService,
        { provide: DaffNavigationTransformer, useExisting: DaffMagentoNavigationTransformerService },
        provideMagentoNavigationDriverConfig({
          navigationTreeQueryDepth: queryDepth,
          rootCategoryId: categoryId,
        }),
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

  describe('getTree', () => {
    it('should return an observable single navigation', done => {
      const navigation = navigationTreeFactory.create({
        id: categoryId,
      });
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

      navigationService.getTree().subscribe((result) => {
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
