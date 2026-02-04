import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';
import { DaffProductTestingDriverModule } from '@daffodil/product/driver/testing';
import {
  DaffProductStateTestingModule,
  MockDaffProductGridFacade,
} from '@daffodil/product/state/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { BestSellersComponent } from './best-sellers.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

describe('BestSellersComponent', () => {
  let productFactory: DaffProductFactory;
  let component: BestSellersComponent;
  let fixture: ComponentFixture<BestSellersComponent>;
  let bestSellersFacade: MockDaffProductGridFacade;
  let productGridComponent: ProductGridComponent;
  let stubProducts: DaffProduct[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BestSellersComponent,
        DaffProductStateTestingModule,
        DaffProductTestingDriverModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        provideRouter([]),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    productFactory = TestBed.inject(DaffProductFactory);
    bestSellersFacade = TestBed.inject(MockDaffProductGridFacade);

    stubProducts = productFactory.createMany(2);

    fixture = TestBed.createComponent(BestSellersComponent);
    bestSellersFacade.products$.next(stubProducts);
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
      bestSellersFacade.loading$.next(false);

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
      bestSellersFacade.loading$.next(true);

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
