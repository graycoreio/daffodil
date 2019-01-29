import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable ,  of } from 'rxjs';

import { Product } from '@daffodil/core';
import { DaffProductFactory } from '@daffodil/core/testing';

import { ProductGridViewComponent } from './product-grid-view.component';
import { DaffContainerModule, DaffLoadingIconModule } from '@daffodil/design';

const productFactory = new DaffProductFactory();
const products$ = of(new Array(productFactory.create()));
const loading$ = of(false);

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[product-grid-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ProductGridContainer'
})
class MockProductGridContainer {
  products$: Observable<Product[]> = products$;
  loading$: Observable<boolean> = loading$;
}

@Component({
  selector: 'demo-product-grid',
  template: ''
})
class MockProductGridComponent { 
  @Input() products: Product[];
}

describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;
  let productGridComponent: MockProductGridComponent;
  let productGridContainer: MockProductGridContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductGridViewComponent,
        MockProductGridContainer,
        MockProductGridComponent
      ],
      imports: [
        DaffContainerModule,
        DaffLoadingIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridViewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    productGridComponent = fixture.debugElement.query(By.css('demo-product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <demo-product-grid>', () => {
    
    it('should set products to value passed by [product-grid-container]', () => {
      products$.subscribe((products) => {
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

  describe('when ProductContainer.loading$ is false', () => {
    
    it('should render <demo-product-grid>', () => {
      const productGrid = fixture.debugElement.query(By.css('demo-product-grid'));

      expect(productGrid).not.toBeNull();
    });

    it('should not render daff-loading-icon', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));

      expect(loadingIcon).toBeNull();
    });
  });

  describe('when ProductContainer.loading$ is true', () => {

    beforeEach(() => {
      productGridContainer = fixture.debugElement.query(By.css('[product-grid-container]')).componentInstance;
      productGridContainer.loading$ = of(true);
      
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
