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

import { DaffRadioControlValueAccessorDirective } from './radio-cva.directive';
import { DaffRadioComponent } from '../radio/radio.component';

@Component({
  template: `
    <daff-radio name="test" value="testValue" [formControl]="radio"></daff-radio>
  `,
  imports: [
    DaffRadioComponent,
    DaffRadioControlValueAccessorDirective,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  radio = new UntypedFormControl();
}

describe('@daffodil/design/radio | DaffRadioControlValueAccessorDirective | Defaults', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let component: DaffRadioComponent;

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
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });

  it('has the writeValue function for formControls', async () => {
    expect(component.checked).toEqual(false);
    wrapper.radio.setValue('testValue');
    expect(component.checked).toEqual(true);
  });
});
