import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductFactory } from '@core/product/testing/factories/product.factory';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productFactory = new ProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    component.products = new Array(productFactory.create(), productFactory.create());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a product-container for each product in products', () => {
    expect(fixture.debugElement.queryAll(By.css('.product-container')).length).toEqual(component.products.length);
  });
});
