import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffInputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `<input daff-input [formSubmitted]="formSubmittedValue">`
})
class WrapperComponent {
  formSubmittedValue: boolean;
}

describe('DaffInputComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let component: DaffInputComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffInputComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new FormControl();
    stubFormSubmitted = false;

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formSubmittedValue = stubFormSubmitted;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('[daff-input]')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should be able to take formSubmitted as input', () => {
    expect(component.formSubmitted).toEqual(stubFormSubmitted);
  });
});
