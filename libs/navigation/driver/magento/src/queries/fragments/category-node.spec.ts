import { TestBed } from '@angular/core/testing';
import { schema } from '@daffodil/driver/magento';
import { Apollo } from 'apollo-angular';
import { ApolloTestingController, ApolloTestingModule, APOLLO_TESTING_CACHE } from 'apollo-angular/testing';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { ApolloQueryResult } from 'apollo-client';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { addTypenameToDocument } from 'apollo-utilities';

import { CategoryNode } from '@daffodil/navigation/driver/magento';

import { getCategoryNodeFragment } from './category-node';

const generateMagentoCategoryTree = (): CategoryNode => ({
  __typename: 'CategoryTree',
  id: 'id',
  name: 'name',
  include_in_menu: true,
  level: 0,
  product_count: 10,
  children_count: 0,
	children: [],
	breadcrumbs: []
})

describe('Navigation | Driver | Magento | getCategoryNodeFragment', () => {
  let apollo: Apollo;
  let controller: ApolloTestingController;

  let childlessNavigationTree: CategoryNode;
  let depth1NavigationTree: CategoryNode;
  let depth3NavigationTree: CategoryNode;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        {
					provide: APOLLO_TESTING_CACHE,
					useValue: new InMemoryCache({
						addTypename: true,
						fragmentMatcher: new IntrospectionFragmentMatcher({
							introspectionQueryResultData: schema,
						}),
					}),
				}
      ]
    });

    apollo = TestBed.inject(Apollo);
    controller = TestBed.inject(ApolloTestingController);

    childlessNavigationTree = generateMagentoCategoryTree();
    delete childlessNavigationTree.children;
    delete childlessNavigationTree.children_count;
    depth1NavigationTree = {
      ...generateMagentoCategoryTree(),
      children_count: 1,
      children: [childlessNavigationTree]
    };
    depth3NavigationTree = {
      ...generateMagentoCategoryTree(),
      children_count: 1,
      children: [{
        ...generateMagentoCategoryTree(),
        children_count: 1,
        children: [{
          ...generateMagentoCategoryTree(),
          children_count: 1,
          children: [childlessNavigationTree]
        }]
      }]
    };
  });

  describe('when the depth is 0', () => {
    let query: DocumentNode;
    let response: Observable<ApolloQueryResult<CategoryNode>>;

    beforeEach(() => {
      const fragment = getCategoryNodeFragment(0);

      query = gql`
        query TestQuery {
          ...recursiveCategoryNode
        }
        ${fragment}
      `;

      response = apollo.query({query});
    });

    it('should successfully query a childless response', done => {
      response.subscribe(resp => {
        expect(resp.data).toEqual(childlessNavigationTree);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(query));

      op.flush({
        data: childlessNavigationTree
      })
    });

    it('should not successfully query a childful response', done => {
      response.subscribe(resp => {
        expect(resp.data.children).toBeFalsy();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(query));

      op.flush({
        data: depth3NavigationTree
      })
    });
  });

  describe('when the depth is 1', () => {
    let query: DocumentNode;
    let response: Observable<ApolloQueryResult<CategoryNode>>;

    beforeEach(() => {
      const fragment = getCategoryNodeFragment(1);

      query = gql`
        query TestQuery {
          ...recursiveCategoryNode
        }
        ${fragment}
      `;

      response = apollo.query({query});
    });

    it('should successfully query a 1 child response', done => {
      response.subscribe(resp => {
        expect(resp.data).toEqual(depth1NavigationTree);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(query));

      op.flush({
        data: depth1NavigationTree
      })
    });

    it('should not successfully query a depth 3 response', done => {
      response.subscribe(resp => {
        expect(resp.data.children[0].children).toBeFalsy();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(query));

      op.flush({
        data: depth3NavigationTree
      })
    });
  });

  describe('when the depth is 3', () => {
    let query: DocumentNode;
    let response: Observable<ApolloQueryResult<CategoryNode>>;

    beforeEach(() => {
			const fragment = getCategoryNodeFragment(3);

      query = gql`
        query TestQuery {
          ...recursiveCategoryNode
        }
        ${fragment}
      `;

      response = apollo.query({query});
    });

    it('should successfully query a 3 child response', done => {
      response.subscribe(resp => {
        expect(resp.data).toEqual(depth3NavigationTree);
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(query));

      op.flush({
        data: depth3NavigationTree
      })
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
			'product_count',
			'children_count',
			'children'
		];

		(<any>getCategoryNodeFragment(3).definitions[0]).selectionSet.selections.forEach((selection, index) => {
			expect(selection.name.value).toEqual(expectedFields[index]);
		});
	});

  afterEach(() => {
    controller.verify();
  });
});
