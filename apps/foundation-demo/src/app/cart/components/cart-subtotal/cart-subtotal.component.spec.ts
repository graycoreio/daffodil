import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartSubtotalComponent } from './cart-subtotal.component';
import { Component } from '@angular/core';

@Component({template: '<cart-subtotal [title]="titleValue" [value]="valueValue"></cart-subtotal>'})
class TestCartSubtotalWrapper {
  titleValue: string;
  valueValue: string;
}

describe('CartSubtotalComponent', () => {
  let component: TestCartSubtotalWrapper;
  let fixture: ComponentFixture<TestCartSubtotalWrapper>;
  let stubTitle: string;
  let stubValue: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartSubtotalComponent,
        TestCartSubtotalWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartSubtotalWrapper);
    component = fixture.componentInstance;
    stubTitle = 'title';
    stubValue = 'value';

    component.titleValue = stubTitle;
    component.valueValue = stubValue;

    fixture.detectChanges();
  });

  it('can be passed a title string', () => {
    let cartSubtotalComponent = fixture.debugElement.query(By.css('cart-subtotal'));

    expect(cartSubtotalComponent.componentInstance.title).toEqual(stubTitle);
  });

  it('can be passed a value string', () => {
    let cartSubtotalComponent = fixture.debugElement.query(By.css('cart-subtotal'));

    expect(cartSubtotalComponent.componentInstance.value).toEqual(stubValue);
  });
});
