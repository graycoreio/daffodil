import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffLoadingIconModule } from '@daffodil/design';

import { BestSellersComponent } from './best-sellers.component';

const stubBestSellers: DaffProduct[] = [];

// tslint:disable-next-line: component-selector
@Component({selector: '[best-sellers-container]', exportAs: 'BestSellersContainer', template: '<ng-content></ng-content>'})
class MockBestSellersContainer {
  loading$: Observable<boolean> = of(false);
  bestSellers: DaffProduct[] = stubBestSellers;
}

@Component({
  selector: 'demo-product-grid',
  template: ''
})
class MockProductGridComponent { 
  @Input() products: DaffProduct[];
}

describe('BestSellersComponent', () => {
  let component: BestSellersComponent;
  let fixture: ComponentFixture<BestSellersComponent>;
  let bestSellersContainer: MockBestSellersContainer;
  let productGridComponent: MockProductGridComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffLoadingIconModule
      ],
      declarations: [ 
        BestSellersComponent,
        MockBestSellersContainer,
        MockProductGridComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    bestSellersContainer = fixture.debugElement.query(By.css('[best-sellers-container]')).componentInstance;
    productGridComponent = fixture.debugElement.query(By.css('demo-product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <demo-product-grid>', () => {
    
    it('should set products to bestSellersContainer.bestSellers', () => {
      expect(productGridComponent.products).toEqual(bestSellersContainer.bestSellers);
    });
  });

  describe('when bestSellersContainer.loading$ is false', () => {
    
    it('should render .demo-best-sellers', () => {
      const bestSellersElement = fixture.debugElement.query(By.css('.demo-best-sellers'));

      expect(bestSellersElement).not.toBeNull();
    });

    it('should not render .demo-best-sellers__loading-icon', () => {
      const loadingIconElement = fixture.debugElement.query(By.css('.demo-best-sellers__loading-icon'));

      expect(loadingIconElement).toBeNull();
    });
  });

  describe('when bestSellersContainer.loading$ is true', () => {

    beforeEach(() => {
      bestSellersContainer.loading$ = of(true);

      fixture.detectChanges();
    });
    
    it('should not render .demo-best-sellers', () => {
      const bestSellersElement = fixture.debugElement.query(By.css('.demo-best-sellers'));

      expect(bestSellersElement).toBeNull();
    });

    it('should render .demo-best-sellers__loading-icon', () => {
      const loadingIconElement = fixture.debugElement.query(By.css('.demo-best-sellers__loading-icon'));

      expect(loadingIconElement).not.toBeNull();
    });
  });
});
