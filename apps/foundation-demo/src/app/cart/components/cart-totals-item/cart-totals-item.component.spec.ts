import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component } from '@angular/core';

import { CartTotalsItemComponent } from './cart-totals-item.component';

@Component({template: `
  <cart-totals-item emphasize="true">
    <ng-container cart-total-label>{{label}}</ng-container>
    <ng-container cart-total-value>{{value}}</ng-container>
  </cart-totals-item>
`})
class TestCartTotalsItemWrapper {
  label: string;
  value: string;
  emphasize: boolean;
}

fdescribe('CartTotalsItemComponent', () => {
  let component: TestCartTotalsItemWrapper;
  let fixture: ComponentFixture<TestCartTotalsItemWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartTotalsItemComponent,
        TestCartTotalsItemWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartTotalsItemWrapper);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('can transclude a label', () => {
    component.label="label";
    fixture.detectChanges();

    let cartTotalsItemComponent = fixture.debugElement.query(By.css('.cart-totals-item__label'));
    expect(cartTotalsItemComponent.nativeElement.innerHTML).toContain('label');
  });

  it('can transclude a value', () => {
    component.value="value";
    fixture.detectChanges();

    let cartTotalsItemComponent = fixture.debugElement.query(By.css('.cart-totals-item__value'));
    expect(cartTotalsItemComponent.nativeElement.innerHTML).toContain('value');
  });

  fit('should add the emphasize class to cart-totals-item when emphasize is true', () => {
    component.emphasize=true;
    fixture.detectChanges();

    let cartTotalsItemComponent = fixture.debugElement.query(By.css('.cart-totals-item'));
    console.log(cartTotalsItemComponent.nativeElement)
    expect(cartTotalsItemComponent.nativeElement.classList).toContain('emphasize');
  });
});
