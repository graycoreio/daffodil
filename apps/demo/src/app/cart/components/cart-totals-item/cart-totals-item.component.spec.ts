import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component } from '@angular/core';

import { CartTotalsItemComponent } from './cart-totals-item.component';

@Component({template: `
  <demo-cart-totals-item emphasize="true">
    <ng-container cart-total-label>{{label}}</ng-container>
    <ng-container cart-total-value>{{value}}</ng-container>
  </demo-cart-totals-item>
`})
class WrapperComponent {
  label: string;
  value: string;
  emphasize: boolean;
}

describe('CartTotalsItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cartTotalsItemComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartTotalsItemComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('can transclude a label', () => {
    wrapper.label='label';
    fixture.detectChanges();

    cartTotalsItemComponent = fixture.debugElement.query(By.css('.cart-totals-item__label'));
    expect(cartTotalsItemComponent.nativeElement.innerHTML).toContain('label');
  });

  it('can transclude a value', () => {
    wrapper.value='value';
    fixture.detectChanges();

    cartTotalsItemComponent = fixture.debugElement.query(By.css('.cart-totals-item__value'));
    expect(cartTotalsItemComponent.nativeElement.innerHTML).toContain('value');
  });

  it('should add the emphasize class to cart-totals-item when emphasize is true', () => {
    wrapper.emphasize=true;
    fixture.detectChanges();

    cartTotalsItemComponent = fixture.debugElement.query(By.css('.cart-totals-item'));
    expect(cartTotalsItemComponent.nativeElement.classList).toContain('emphasize');
  });
});
