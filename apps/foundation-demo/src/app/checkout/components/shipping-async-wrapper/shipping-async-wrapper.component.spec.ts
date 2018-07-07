import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAsyncWrapperComponent } from './shipping-async-wrapper.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

let stubIsShippingInfoValid = true;

@Component({selector: 'shipping', template: ''})
class MockShippingComponent {
  @Input() isShippingInfoValid: boolean;
}

@Component({template: '<shipping-async-wrapper [isShippingInfoValid]="isShippingInfoValidValue$ | async"></shipping-async-wrapper>'})
class TestShippingAsyncWrapperWrapper {
  isShippingInfoValidValue$: Observable<boolean> = of(stubIsShippingInfoValid);
}

describe('ShippingAsyncWrapperComponent', () => {
  let component: TestShippingAsyncWrapperWrapper;
  let fixture: ComponentFixture<TestShippingAsyncWrapperWrapper>;
  let shippingAsyncWrapper: ShippingAsyncWrapperComponent;
  let mockShippingComponent: MockShippingComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestShippingAsyncWrapperWrapper,
        MockShippingComponent,
        ShippingAsyncWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingAsyncWrapperWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingAsyncWrapper = fixture.debugElement.query(By.css('shipping-async-wrapper')).componentInstance;
    mockShippingComponent = fixture.debugElement.query(By.css('shipping')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take isShippingInfoValid as input', () => {
    expect(shippingAsyncWrapper.isShippingInfoValid).toEqual(stubIsShippingInfoValid);
  });

  describe('on <shipping>', () => {
    
    it('should set isShippingInfoValid', () => {
      expect(mockShippingComponent.isShippingInfoValid).toEqual(stubIsShippingInfoValid);
    });
  });
});
