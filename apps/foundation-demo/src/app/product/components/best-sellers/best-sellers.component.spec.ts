import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersComponent } from './best-sellers.component';
import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '@daffodil/core';
import { By } from '@angular/platform-browser';

let stubBestSellers: Product[];

@Component({selector: '[best-sellers-container]', exportAs: 'BestSellersContainer', template: '<ng-content></ng-content>'})
class MockBestSellersContainer {
  loading$: Observable<boolean> = of(false);
  bestSellers: Product[] = stubBestSellers;
}

@Component({
  selector: 'product-grid',
  template: ''
})
class MockProductGridComponent { 
  @Input() products: Product[];
}

@Component({ selector: 'fd-loading-icon', template: ''})
class MockLoadingIconComponent {}

describe('BestSellersComponent', () => {
  let component: BestSellersComponent;
  let fixture: ComponentFixture<BestSellersComponent>;
  let bestSellersContainer: MockBestSellersContainer;
  let productGridComponent: MockProductGridComponent;
  let loadingIconElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BestSellersComponent,
        MockBestSellersContainer,
        MockProductGridComponent,
        MockLoadingIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    bestSellersContainer = fixture.debugElement.query(By.css('[best-sellers-container]')).componentInstance;
    productGridComponent = fixture.debugElement.query(By.css('product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <product-grid>', () => {
    
    it('should set products to bestSellersContainer.bestSellers', () => {
      expect(productGridComponent.products).toEqual(bestSellersContainer.bestSellers);
    });
  });

  describe('when bestSellersContainer.loading$ is false', () => {
    
    it('should render best-sellers', () => {
      let bestSellersElement = fixture.debugElement.query(By.css('.best-sellers'));

      expect(bestSellersElement).not.toBeNull();
    });

    it('should not render best-sellers__fd-loading-icon', () => {
      loadingIconElement = fixture.debugElement.query(By.css('.best-sellers__fd-loading-icon'));
      expect(loadingIconElement).toBeNull();
    });
  });

  describe('when bestSellersContainer.loading$ is true', () => {

    beforeEach(() => {
      bestSellersContainer.loading$ = of(true);

      fixture.detectChanges();
    });
    
    it('should not render best-sellers element', () => {
      let bestSellersElement = fixture.debugElement.query(By.css('.best-sellers'));

      expect(bestSellersElement).toBeNull();
    });

    it('should render best-sellers__fd-loading-icon', () => {
      loadingIconElement = fixture.debugElement.query(By.css('.best-sellers__fd-loading-icon'));
      expect(loadingIconElement).not.toBeNull();
    });
  });
});
