import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DaffCheckboxComponent,
  DaffCheckboxControlValueAccessorDirective,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox name="test" value="testValue" [formControl]="checkbox"></daff-checkbox>
  `,
  imports: [
    DaffCheckboxComponent,
    DaffCheckboxControlValueAccessorDirective,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  checkbox = new UntypedFormControl();
}

describe('@daffodil/design/checkbox | DaffCheckboxControlValueAccessorDirective | Defaults', () => {
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
    fixture.detectChanges();
  });

  it('should let the value be set from a form control', async () => {
    expect(component.checked).toEqual(false);
    wrapper.checkbox.setValue('testValue');
    expect(component.checked).toEqual(true);
  });

  it('can be disabled from the form control', async () => {
    wrapper.checkbox.disable();
    expect(component.disabled).toBe(true);
  });
});
