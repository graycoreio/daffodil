import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import {
  DaffNavigationTransformer,
} from '@daffodil/navigation/driver';
import {
  DaffMagentoNavigationTransformerService,
} from '@daffodil/navigation/driver/magento';

import { DaffMagentoNavigationService } from './navigation.service';
import { DaffMagentoGetCategoryTreeQueryService } from './queries/get-category-tree';

describe('Driver | Magento | Navigation | NavigationService', () => {
  let navigationService: DaffMagentoNavigationService;
  let navigationTreeFactory: DaffNavigationTreeFactory;
	let controller: ApolloTestingController;
	let queryService: DaffMagentoGetCategoryTreeQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoNavigationService,
				{ provide: DaffNavigationTransformer, useExisting: DaffMagentoNavigationTransformerService },
				DaffMagentoGetCategoryTreeQueryService
      ]
    });

		controller = TestBed.inject(ApolloTestingController);
		queryService = TestBed.inject(DaffMagentoGetCategoryTreeQueryService);

    navigationService = TestBed.inject(DaffMagentoNavigationService);
    navigationTreeFactory = TestBed.inject(DaffNavigationTreeFactory);
  });

  it('should be created', () => {
    expect(navigationService).toBeTruthy();
  });

  describe('get | getting a single navigation', () => {
    it('should return an observable single navigation', done => {
      const navigation = navigationTreeFactory.create();

      navigationService.get(navigation.id).subscribe((result) => {
        expect(result.id).toEqual(navigation.id);
        expect(result.name).toEqual(navigation.name);
        expect(result.total_products).toEqual(navigation.total_products);
        expect(result.children_count).toEqual(navigation.children_count);
        done();
      });

      const op = controller.expectOne(queryService.document);

      expect(op.operation.variables.filters).toEqual({ ids: { eq: navigation.id}});

      op.flush({
        data: {
          categoryList: [{
            __typename: 'CategoryTree',
            id: navigation.id,
            name: navigation.name,
            include_in_menu: true,
						level: 0,
						position: 1,
            product_count: navigation.total_products,
            children_count: navigation.children_count,
						children: [],
						breadcrumbs: []
          }]
        }
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
