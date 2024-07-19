import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import {
  DaffProductStateTestingModule,
  MockDaffProductGridFacade,
} from '@daffodil/product/state/testing';

import { ProductGridViewComponent } from './product-grid-view.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';

describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;
  let productGridComponent: ProductGridComponent;
  let facade: MockDaffProductGridFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductGridViewComponent,
      ],
      imports: [
        DaffContainerModule,
        DaffLoadingIconModule,
        ProductGridModule,
        DaffProductStateTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridViewComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(MockDaffProductGridFacade);
    fixture.detectChanges();

    productGridComponent = fixture.debugElement.query(By.css('demo-product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('ngOnInit', () => {
    it('should dispatch a DaffProductLoad', () => {
      spyOn(facade, 'dispatch');
      component.ngOnInit();
      expect(facade.dispatch).toHaveBeenCalled();
    });
  });

  describe('on <demo-product-grid>', () => {
    it('should set products to value passed by [product-grid-container]', () => {
      component.products$.subscribe((products) => {
        expect(productGridComponent.products).toEqual(products);
      });
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
