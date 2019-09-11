import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffContainerModule, DaffLoadingIconModule } from '@daffodil/design';
import { DaffProductGridFacade, DaffProduct } from '@daffodil/product';

import { ProductGridViewComponent } from './product-grid-view.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { ProductGridModule } from '../../components/product-grid/product-grid.module';
import { DaffCategoryLoad } from '@daffodil/category';

class MockDaffProductGridFacade {
  loading$: Observable<boolean> = new BehaviorSubject(false);
  products$: Observable<DaffProduct[]> = new BehaviorSubject([]);
  dispatch() { }
}


describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;
  let productGridComponent: ProductGridComponent;
  let facade: MockDaffProductGridFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductGridViewComponent
      ],
      imports: [
        DaffContainerModule,
        DaffLoadingIconModule,
        ProductGridModule
      ],
      providers: [
        { provide: DaffProductGridFacade, useClass: MockDaffProductGridFacade }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridViewComponent);
    component = fixture.componentInstance;
    facade = TestBed.get(DaffProductGridFacade);
    fixture.detectChanges();

    productGridComponent = fixture.debugElement.query(By.css('demo-product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('ngOnInit', () => {
    it('should set loading$ to loading$ on the DaffProductGridFacade', () => {
      facade.loading$ = hot('ab', { a: false, b: true });
      component.ngOnInit();
      const expected = cold('ab', { a: false, b: true });
      expect(component.loading$).toBeObservable(expected);
    });

    it('should set products$ to products$ on the DaffProductGridFacade', () => {
      const products = new DaffProductFactory().createMany(2);
      facade.loading$ = hot('ab', { a: [], b: products });
      component.ngOnInit();
      const expected = cold('ab', { a: [], b: products });
      expect(component.loading$).toBeObservable(expected);
    });

    it('should dispatch a DaffCategoryLoad', () => {
      spyOn(facade, 'dispatch');
      component.ngOnInit();
      expect(facade.dispatch).toHaveBeenCalledWith(new DaffCategoryLoad("2"));
    });
  });

  describe('on <demo-product-grid>', () => {
    it('should set products to value passed by [product-grid-container]', () => {
      component.products$.subscribe((products) => {
        expect(productGridComponent.products).toEqual(products);
      });
    });
  });

  describe('on <daff-container>', () => {
    it('should set size="lg"', () => {
      const container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('lg');
    });
  });

  describe('when loading$ becomes false', () => {
    
    beforeEach(() => {
      component.loading$ = of(false);
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
      component.loading$ = of(true);
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
