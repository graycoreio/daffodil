import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionsComponent } from './shipping-options.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShippingOption, ShippingFactory } from '@daffodil/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

let shippingFactory: ShippingFactory = new ShippingFactory();
let formBuilder: FormBuilder = new FormBuilder();

let stubFormGroupValue = formBuilder.group({
  id: ''
});
let stubShippingOptions: ShippingOption[] = shippingFactory.createShippingOptions();
let stubSubmitted = true;

@Component({
  template: '<shipping-options ' + 
              '[formGroup]="formGroupValue" ' + 
              '[shippingOptions]="shippingOptionsValue" ' + 
              '[submitted]="submittedValue"></shipping-options>'
})
class TestShippingOptionsWrapper {
  formGroupValue: FormGroup = stubFormGroupValue;
  shippingOptionsValue: ShippingOption[] = stubShippingOptions;
  submittedValue: boolean = stubSubmitted;
};

describe('ShippingOptionsComponent', () => {
  let component: TestShippingOptionsWrapper;
  let fixture: ComponentFixture<TestShippingOptionsWrapper>;
  let shippingOptionsComponent: ShippingOptionsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        TestShippingOptionsWrapper,
        ShippingOptionsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingOptionsWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingOptionsComponent = fixture.debugElement.query(By.css('shipping-options')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(shippingOptionsComponent.formGroup).toEqual(component.formGroupValue);
  });

  it('should be able to take shippingOptions as input', () => {
    expect(shippingOptionsComponent.shippingOptions).toEqual(stubShippingOptions);
  });

  it('should be able to take submitted as input', () => {
    expect(shippingOptionsComponent.submitted).toEqual(component.submittedValue);
  });
});
