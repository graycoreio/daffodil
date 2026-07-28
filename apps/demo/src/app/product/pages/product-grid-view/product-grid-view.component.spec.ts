import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DaffProductStateTestingModule,
  MockDaffProductGridFacade,
} from '@daffodil/product/state/testing';

import { ProductGridViewComponent } from './product-grid-view.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';


describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;
  let productGridComponent: ProductGridComponent;
  let facade: MockDaffProductGridFacade;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductGridViewComponent,
        DaffProductStateTestingModule,
        DaffProductTestingDriverModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
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

    it('should not render daff-spinner', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-spinner'));

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

    it('should render daff-spinner', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-spinner'));
      expect(loadingIcon).not.toBeNull();
    });
  });
});
