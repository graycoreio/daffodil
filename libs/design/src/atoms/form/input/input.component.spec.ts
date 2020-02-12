import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffInputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
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
  let componentDE: DebugElement;

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

    componentDE = fixture.debugElement.query(By.css('[daff-input]'));
    component = componentDE.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should be able to take formSubmitted as input', () => {
    expect(component.formSubmitted).toEqual(stubFormSubmitted);
  });

  describe('when <daff-native-select> is focused', () => {
    it('should set focused to true', () => {
      componentDE.triggerEventHandler('focus', {});

      expect(component.focused).toBe(true);
    });
  });

  describe('when <daff-native-select> is blurred', () => {
    it('should set focused to false', () => {
      componentDE.triggerEventHandler('blur', {});

      expect(component.focused).toBe(false);
    });
  });
});
