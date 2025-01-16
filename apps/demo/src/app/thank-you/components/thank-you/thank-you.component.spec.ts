import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { ThankYouComponent } from './thank-you.component';


@Component({
  template: `
    <demo-thank-you
      [order]="orderValue"
    ></demo-thank-you>
  `,
  imports: [
    ThankYouComponent,
  ],
})
class WrapperComponent {
  orderValue: DaffOrder;
}

describe('ThankYouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let orderFactory: DaffOrderFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    orderFactory = TestBed.inject(DaffOrderFactory);

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.orderValue = orderFactory.create();
    fixture.detectChanges();
    component = fixture.debugElement.query(By.directive(ThankYouComponent)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
