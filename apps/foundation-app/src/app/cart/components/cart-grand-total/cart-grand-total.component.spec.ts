import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartGrandTotalComponent } from './cart-grand-total.component';
import { Component } from '@angular/core';

@Component({template: '<cart-grand-total [title]="titleValue" [value]="valueValue"></cart-grand-total>'})
class TestCartGrandTotalWrapper {
  titleValue: string;
  valueValue: string;
}

describe('CartGrandTotalComponent', () => {
  let component: TestCartGrandTotalWrapper;
  let fixture: ComponentFixture<TestCartGrandTotalWrapper>;
  let stubTitle: string;
  let stubValue: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartGrandTotalComponent,
        TestCartGrandTotalWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCartGrandTotalWrapper);
    component = fixture.componentInstance;
    stubTitle = 'title';
    stubValue = 'value';

    component.titleValue = stubTitle;
    component.valueValue = stubValue;

    fixture.detectChanges();
  });

  it('can be passed a title string', () => {
    let cartGrandTotalComponent = fixture.debugElement.query(By.css('cart-grand-total'));

    expect(cartGrandTotalComponent.componentInstance.title).toEqual(stubTitle);
  });

  it('can be passed a value string', () => {
    let cartGrandTotalComponent = fixture.debugElement.query(By.css('cart-grand-total'));

    expect(cartGrandTotalComponent.componentInstance.value).toEqual(stubValue);
  });
});
