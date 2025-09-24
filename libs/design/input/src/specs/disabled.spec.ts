import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <input daff-input [disabled]="disabledValue">
    </daff-form-field>
  `,
  imports: [
    DaffInputComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
class WrapperComponent {
  disabledValue: boolean | string;
}

describe('@daffodil/design | DaffInputComponent | Static Disabled Attribute', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffInputComponent;
  let componentDE: DebugElement;

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
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('[daff-input]'));
    component = componentDE.injector.get(DaffInputComponent);
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the input is disabled', () => {
    beforeEach(() => {
      wrapper.disabledValue = true;
      fixture.detectChanges();
    });

    it('should set disabled to true', () => {
      expect(component.disabled).toBeTrue();
    });
  });

  describe('when the input is no longer disabled', () => {
    beforeEach(() => {
      wrapper.disabledValue = false;
      fixture.detectChanges();
    });

    it('should set disabled to false', () => {
      expect(component.disabled).toEqual(false);
    });
  });

  describe('when disabled is an empty string', () => {
    beforeEach(() => {
      wrapper.disabledValue = '';
      fixture.detectChanges();
    });

    it('should set disabled to true', () => {
      expect(component.disabled).toEqual(true);
    });
  });
});

@Component({
  template:`
    <daff-form-field>
			<daff-form-label>Email></daff-form-label>
      <input daff-input type="text" name="email" [formControl]="email">
    </daff-form-field>
  `,
  imports: [
    DaffInputComponent,
    DAFF_FORM_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class FormsWrapperComponent {
  email: UntypedFormControl = new UntypedFormControl({ value: '', disabled: true });
}

describe('@daffodil/design | DaffInputComponent | Reactive Forms Disabled State', () => {
  let wrapper: FormsWrapperComponent;
  let fixture: ComponentFixture<FormsWrapperComponent>;
  let componentDE: DebugElement;
  let component: DaffInputComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('[daff-input]'));
    component = componentDE.injector.get(DaffInputComponent);
  });

  describe('when the reactive forms input is disabled', () => {
    it('should set disabled to true', () => {
      expect(component.disabled).toEqual(true);
    });
  });

  describe('when the form control is no longer disabled', () =>{
    it('should set disabled to false', () => {
      wrapper.email.enable();
      fixture.detectChanges();

      expect(component.disabled).toEqual(false);
    });
  });
});
