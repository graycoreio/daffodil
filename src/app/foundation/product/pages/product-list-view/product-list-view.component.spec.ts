import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListViewComponent } from './product-list-view.component';

describe('ProductListViewComponent', () => {
  let component: ProductListViewComponent;
  let fixture: ComponentFixture<ProductListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
