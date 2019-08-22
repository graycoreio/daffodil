import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffMagentoNavigationService } from './navigation.service';
import { GetCategoryTree } from './queries/get-category-tree';

describe('Driver | Magento | Navigation | NavigationService', () => {
  let navigationService: DaffMagentoNavigationService;
  let navigationTreeFactory: DaffNavigationTreeFactory;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoNavigationService
      ]
    });

    controller = TestBed.get(ApolloTestingController);

    navigationService = TestBed.get(DaffMagentoNavigationService);
    navigationTreeFactory = TestBed.get(DaffNavigationTreeFactory);
  });

  it('should be created', () => {
    expect(navigationService).toBeTruthy();
  });

  describe('get | getting a single navigation', () => {
    it('should return an observable single navigation', () => {
      const navigation = navigationTreeFactory.create();

      navigationService.get(navigation.id).subscribe((result) => {
        expect(result.id).toEqual(navigation.id);
        expect(result.name).toEqual(navigation.name);
        expect(result.total_products).toEqual(navigation.total_products);
        expect(result.children_count).toEqual(navigation.children_count);
      });

      const op = controller.expectOne(GetCategoryTree);

      expect(op.operation.variables.id).toEqual(navigation.id);

      op.flush({
        data: {
          category: {
            id: navigation.id,
            name: navigation.name,
            products: {
              total_count: navigation.total_products
            },
            children_count: navigation.children_count,
            children: []
          }
        }
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
