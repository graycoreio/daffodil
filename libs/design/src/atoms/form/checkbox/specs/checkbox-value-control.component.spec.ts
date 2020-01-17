import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { DaffCheckboxComponent } from '../checkbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const checkboxExampleValue = 'example-value';

@Component ({
  template: `<daff-checkbox [formControl]="controlValue" [value]="value">checkbox name</daff-checkbox>`
})
class WrapperComponent {
  controlValue: FormControl;
  value = checkboxExampleValue;
}

describe('DaffCheckboxComponent | Value w/ Control', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FontAwesomeModule
      ],
      declarations: [
        DaffCheckboxComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.controlValue = new FormControl(false);
    de = fixture.debugElement.query(By.css('daff-checkbox'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the formControl tries to set the wrong value', () => {
    it('should throw a descriptive error', () => {
      expect(() => component.writeValue({value: 'some-wrong-value', status: false}))
        .toThrowError(/does not match the value set in the html \(example-value\)/);
    });
  });

  describe('when the checkbox state is updated from false to true', () => {
    it('should update the form control', () => {
      wrapper.controlValue.setValue({value: checkboxExampleValue, status: false});
      component.toggleCheckbox();
      fixture.detectChanges();
      expect(wrapper.controlValue.value).toEqual({ value: checkboxExampleValue, status: true });
    });
  });
});
