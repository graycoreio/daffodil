import { TestBed } from '@angular/core/testing';
import {
  InMemoryCache,
  ApolloQueryResult,
} from '@apollo/client/core';
import {
  gql,
  Apollo,
} from 'apollo-angular';
import {
  ApolloTestingController,
  APOLLO_TESTING_CACHE,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';

import { schema } from '@daffodil/driver/magento';
import { CategoryNode } from '@daffodil/navigation/driver/magento';

import { getCategoryNodeFragment } from './category-node';

const generateMagentoCategoryTree = (id): CategoryNode => ({
  __typename: 'CategoryTree',
  id,
  name: 'name',
  include_in_menu: true,
  level: 0,
  product_count: 10,
  children_count: 0,
  children: [],
  position: 1,
  breadcrumbs: [],
});

describe('Navigation | Driver | Magento | getCategoryNodeFragment', () => {
  let apollo: Apollo;
  let controller: ApolloTestingController;

  let childlessNavigationTree: CategoryNode;
  let depth1NavigationTree: CategoryNode;
  let depth3NavigationTree: CategoryNode;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    apollo = TestBed.inject(Apollo);
    controller = TestBed.inject(ApolloTestingController);

    childlessNavigationTree = generateMagentoCategoryTree(1);
    delete childlessNavigationTree.children;
    delete childlessNavigationTree.children_count;
    depth1NavigationTree = {
      ...generateMagentoCategoryTree(2),
      children_count: 1,
      children: [childlessNavigationTree],
    };
    depth3NavigationTree = {
      ...generateMagentoCategoryTree(3),
      children_count: 1,
      children: [{
        ...generateMagentoCategoryTree(4),
        children_count: 1,
        children: [{
          ...generateMagentoCategoryTree(5),
          children_count: 1,
          children: [childlessNavigationTree],
        }],
      }],
    };
  });

  describe('when the depth is 0', () => {
    let query: DocumentNode;
    let response: Observable<ApolloQueryResult<{categoryList: CategoryNode}>>;

    beforeEach(() => {
      const fragment = getCategoryNodeFragment(0);

      query = gql`
        query TestQuery {
          categoryList {
            ...recursiveCategoryNode
          }
        }
        ${fragment}
      `;

      response = apollo.query({ query });
    });

    it('should successfully query a childless response', done => {
      response.subscribe(resp => {
        expect(resp.data.categoryList).toEqual(childlessNavigationTree);
        done();
      });

      const op = controller.expectOne('TestQuery');

      op.flushData({ categoryList: childlessNavigationTree });
    });

    it('should not successfully query a childful response', done => {
      response.subscribe(resp => {
        expect(resp.data.categoryList.children).toBeFalsy();
        done();
      });

      const op = controller.expectOne('TestQuery');

      op.flushData({ categoryList: depth3NavigationTree });
    });
  });

  describe('when the depth is 1', () => {
    let query: DocumentNode;
    let response: Observable<ApolloQueryResult<{categoryList: CategoryNode}>>;

    beforeEach(() => {
      const fragment = getCategoryNodeFragment(1);

      query = gql`
        query TestQuery {
          categoryList {
            ...recursiveCategoryNode
          }
        }
        ${fragment}
      `;

      response = apollo.query({ query });
    });

    it('should successfully query a 1 child response', done => {
      response.subscribe(resp => {
        expect(resp.data.categoryList).toEqual(jasmine.objectContaining(depth1NavigationTree));
        done();
      });

      const op = controller.expectOne('TestQuery');

      op.flushData({ categoryList: depth1NavigationTree });
    });

    it('should not successfully query a depth 3 response', done => {
      response.subscribe(resp => {
        expect(resp.data.categoryList.children[0].children).toBeFalsy();
        done();
      });

      const op = controller.expectOne('TestQuery');

      op.flushData({ categoryList: depth3NavigationTree });
    });
  });

  describe('when the depth is 3', () => {
    let query: DocumentNode;
    let response: Observable<ApolloQueryResult<{categoryList: CategoryNode}>>;

    beforeEach(() => {
      const fragment = getCategoryNodeFragment(3);

      query = gql`
        query TestQuery {
          categoryList {
            ...recursiveCategoryNode
          }
        }
        ${fragment}
      `;

      response = apollo.query({ query });
    });

    it('should successfully query a 3 child response', done => {
      response.subscribe(resp => {
        expect(resp.data.categoryList).toEqual(depth3NavigationTree);
        done();
      });

      const op = controller.expectOne('TestQuery');

      op.flushData({ categoryList: depth3NavigationTree });
    });
  });

  //todo: remove this test when this bug is fixed: https://github.com/magento/magento2/issues/31086
  //This test only exists to test the workaround.
  it('should not use nested fragments', () => {
    const expectedFields = [
      'id',
      'level',
      'name',
      'include_in_menu',
      'breadcrumbs',
      'position',
      'product_count',
      'children_count',
      'children',
    ];

    (<any>getCategoryNodeFragment(3).definitions[0]).selectionSet.selections.forEach((selection, index) => {
      expect(selection.name.value).toEqual(expectedFields[index]);
    });
  });

  afterEach(() => {
    controller.verify();
  });
});
