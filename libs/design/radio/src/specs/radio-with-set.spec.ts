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
  DaffRadioComponent,
  DAFF_RADIO_COMPONENTS,
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
    fruit: new UntypedFormControl(),
  });

}
describe('@daffodil/design/radio | DaffRadioComponent With DaffRadioSetComponent', () => {
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

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should get its name from the parent <daff-radio-set>', () => {
    expect(component.name).toEqual('fruit');
  });
});
