import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { DaffCategory } from '@daffodil/category';
import {
  DaffCategoryStateTestingModule,
  MockDaffCategoryFacade,
} from '@daffodil/category/state/testing';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';

import { CategoryViewComponent } from './category-view.component';
import { ProductGridComponent } from '../../../product/components/product-grid/product-grid.component';
import { ProductGridModule } from '../../../product/components/product-grid/product-grid.module';

describe('CategoryViewComponent', () => {
  let categoryFactory: DaffCategoryFactory;
  let productFactory: DaffProductFactory;
  let mockCategory: DaffCategory;
  let mockProducts: DaffProduct[];
  let facade: MockDaffCategoryFacade;

  let component: CategoryViewComponent;
  let fixture: ComponentFixture<CategoryViewComponent>;
  let productGridComponent: ProductGridComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryViewComponent,
      ],
      imports: [
        DaffContainerModule,
        DaffLoadingIconModule,
        ProductGridModule,
        DaffCategoryStateTestingModule,
        DaffProductTestingModule,
      ],
      providers: [
        provideRouter([]),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    facade = TestBed.inject(MockDaffCategoryFacade);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    mockCategory = categoryFactory.create();
    mockProducts = productFactory.createMany(10);
    facade.category$.next(mockCategory);
    facade.products$.next(mockProducts);

    fixture = TestBed.createComponent(CategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    productGridComponent = fixture.debugElement.query(By.css('demo-product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <demo-product-grid>', () => {
    it('should set products to value from the facade', () => {
      expect(productGridComponent.products).toEqual(mockProducts);
    });
  });

  describe('when loading$ becomes false', () => {

    beforeEach(() => {
      facade.loading$.next(false);
      fixture.detectChanges();
    });

    it('should render <demo-product-grid>', () => {
      const productGrid = fixture.debugElement.query(By.css('demo-product-grid'));

      expect(productGrid).not.toBeNull();
    });

    it('should not render daff-loading-icon', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));

      expect(loadingIcon).toBeNull();
    });
  });

  describe('when loading$ becomes true', () => {

    beforeEach(() => {
      facade.loading$.next(true);
      fixture.detectChanges();
    });

    it('should not render <demo-product-grid>', () => {
      const productGrid = fixture.debugElement.query(By.css('demo-product-grid'));
      expect(productGrid).toBeNull();
    });

    it('should render daff-loading-icon', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));
      expect(loadingIcon).not.toBeNull();
    });
  });
});
