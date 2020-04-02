import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffBestSellersFacade } from '@daffodil/product';
import { DaffLoadingIconModule } from '@daffodil/design';
import { DaffProductFactory } from '@daffodil/product/testing';

import { BestSellersComponent } from './best-sellers.component';

class MockDaffBestSellersFacade {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  bestSellers$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);
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
  let bestSellersFacade: MockDaffBestSellersFacade;
	let productGridComponent: MockProductGridComponent;
	const stubProducts: DaffProduct[] = new DaffProductFactory().createMany(2);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffLoadingIconModule
      ],
      declarations: [ 
        BestSellersComponent,
        MockProductGridComponent
			],
			providers: [
				{ provide: DaffBestSellersFacade, useClass: MockDaffBestSellersFacade }
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersComponent);
		bestSellersFacade = TestBed.get(DaffBestSellersFacade);
		bestSellersFacade.bestSellers$.next(stubProducts)
    component = fixture.componentInstance;
    fixture.detectChanges();

    productGridComponent = fixture.debugElement.query(By.css('demo-product-grid')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <demo-product-grid>', () => {
    
    it('should set products', () => {
      expect(productGridComponent.products).toEqual(stubProducts);
    });
  });

  describe('when bestSellersContainer.loading$ is false', () => {

    beforeEach(() => {
			bestSellersFacade.loading$.next(false)

      fixture.detectChanges();
    });
    
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
			bestSellersFacade.loading$.next(true)

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
