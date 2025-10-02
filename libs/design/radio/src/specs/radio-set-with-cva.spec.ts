import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import {
  UntypedFormGroup,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_RADIO_COMPONENTS,
  DaffRadioComponent,
} from '@daffodil/design/radio';

@Component({
  template: `
    <daff-radio-set [formGroup]="radioGroup" name="fruit">
      <daff-radio formControlName="fruit" value="apple">Apple</daff-radio>
      <daff-radio formControlName="fruit" value="grape">Grape</daff-radio>
      <daff-radio formControlName="fruit" value="peach">Peach</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  radioGroup = new UntypedFormGroup({
    fruit: new UntypedFormControl('apple'),
  });
  disable() {
    this.radioGroup.disable();
  }
  setValue() {
    this.radioGroup.setValue({ fruit: 'pear' });
  }
}

describe('@daffodil/design/radio | DaffRadioSetComponent With CVA', () => {
  let wrapper: WrapperComponent;
  let radio: DaffRadioComponent;
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
    radio = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });

  it('should let the value be set from a form control', () => {
    wrapper.setValue();
    expect(wrapper.radioGroup.value).toEqual({ fruit: 'pear' });
  });

  it('should let the radio be disabled from a form control', () => {
    wrapper.disable();
    fixture.detectChanges();

    expect(radio.disabled).toEqual(true);
  });
});
