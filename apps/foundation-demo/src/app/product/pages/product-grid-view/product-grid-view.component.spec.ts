import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable ,  of } from 'rxjs';

import { Product } from '@daffodil/core';
import { DaffProductFactory } from '@daffodil/core/testing';

import { ProductGridViewComponent } from './product-grid-view.component';
import { DaffContainerModule } from '@daffodil/design';

let productFactory = new DaffProductFactory();
let products$ = of(new Array(productFactory.create()));
let loading$ = of(false);

@Component({
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

@Component({ selector: 'demo-loading-icon', template: ''})
class MockLoadingIconComponent {}

describe('ProductGridViewComponent', () => {
  let component: ProductGridViewComponent;
  let fixture: ComponentFixture<ProductGridViewComponent>;
  let productGridComponent: MockProductGridComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductGridViewComponent,
        MockProductGridContainer,
        MockLoadingIconComponent,
        MockProductGridComponent
      ],
      imports: [
        DaffContainerModule
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
      let container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('lg');
    });
  });

  describe('when ProductContainer.loading$ is false', () => {
    
    it('should render <demo-product-grid>', () => {
      let productGrid = fixture.debugElement.query(By.css('demo-product-grid'));

      expect(productGrid).not.toBeNull();
    });

    it('should not render demo-loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('demo-loading-icon'));

      expect(loadingIcon).toBeNull();
    });
  });

  describe('when ProductContainer.loading$ is true', () => {

    beforeEach(() => {
      let productGridComponent: MockProductGridContainer = fixture.debugElement.query(By.css('[product-grid-container]')).componentInstance;
      productGridComponent.loading$ = of(true);
      
      fixture.detectChanges();
    });
    
    it('should not render <demo-product-grid>', () => {
      let productGrid = fixture.debugElement.query(By.css('demo-product-grid'));

      expect(productGrid).toBeNull();
    });

    it('should render demo-loading-icon', () => {
      let loadingIcon = fixture.debugElement.query(By.css('demo-loading-icon'));

      expect(loadingIcon).not.toBeNull();
    });
  });
});
