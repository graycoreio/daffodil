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
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffFormFieldComponent,
} from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <input daff-input [required]="requiredValue">
    </daff-form-field>
  `,
  imports: [
    DaffInputComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
class WrapperComponent {
  requiredValue: boolean | string;
}

describe('@daffodil/design | DaffInputComponent | Static Required Attribute', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffInputComponent;
  let componentDE: DebugElement;
  let formField: DaffFormFieldComponent;

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
    formField = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the input is required', () => {
    beforeEach(() => {
      wrapper.requiredValue = true;
      fixture.detectChanges();
    });

    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });
  });

  describe('when the input is no longer required', () => {
    beforeEach(() => {
      wrapper.requiredValue = false;
      fixture.detectChanges();
    });

    it('should set required to false', () => {
      expect(component.required).toEqual(false);
    });

    it('should set requiredAttribute to null', () => {
      expect(component.requiredAttribute).toEqual(null);
    });
  });

  describe('when required is an empty string', () => {
    beforeEach(() => {
      wrapper.requiredValue = '';
      fixture.detectChanges();
    });

    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });

    it('should set requiredAttribute to true', () => {
      expect(component.requiredAttribute).toEqual(true);
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
  email: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
}

describe('@daffodil/design | DaffInputComponent | Reactive Forms Required State', () => {
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

  describe('when the reactive forms input is required', () => {
    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });

    it('should set requiredAttribute to true', () => {
      expect(component.requiredAttribute).toEqual(true);
    });
  });

  describe('when the form control is no longer required', () =>{
    it('should set required to false', () => {
      wrapper.email.setValidators([]);
      fixture.detectChanges();

      expect(component.required).toEqual(false);
    });

    it('should set requiredAttribute to null', () => {
      wrapper.email.setValidators([]);
      fixture.detectChanges();

      expect(component.requiredAttribute).toEqual(null);
    });
  });
});
