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
  DaffNativeSelectComponent,
} from '@daffodil/design';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <select daff-native-select [required]="requiredValue"></select>
    </daff-form-field>
  `,
  standalone: false,
})
class WrapperComponent {
  requiredValue: boolean | string;
}

describe('@daffodil/design | DaffNativeSelectComponent | Static Required Attribute', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffNativeSelectComponent;
  let componentDE: DebugElement;
  let formField: DaffFormFieldComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffNativeSelectComponent,
      ],
      imports: [
        DAFF_FORM_FIELD_COMPONENTS,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('[daff-native-select]'));
    component = componentDE.injector.get(DaffNativeSelectComponent);
    formField = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the native select is required', () => {
    beforeEach(() => {
      wrapper.requiredValue = true;
      fixture.detectChanges();
    });

    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });
  });

  describe('when the native select is no longer required', () => {
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
      <select daff-native-select [formControl]="control"></select>
    </daff-form-field>
  `,
  standalone: false,
})
class FormsWrapperComponent {
  control: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
}

describe('@daffodil/design | DaffNativeSelectComponent | Reactive Forms Required State', () => {
  let wrapper: FormsWrapperComponent;
  let fixture: ComponentFixture<FormsWrapperComponent>;
  let componentDE: DebugElement;
  let component: DaffNativeSelectComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormsWrapperComponent,
        DaffNativeSelectComponent,
      ],
      imports: [
        DAFF_FORM_FIELD_COMPONENTS,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('[daff-native-select]'));
    component = componentDE.injector.get(DaffNativeSelectComponent);
  });

  describe('when the reactive forms native select is required', () => {
    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });

    it('should set requiredAttribute to true', () => {
      expect(component.requiredAttribute).toEqual(true);
    });
  });

  describe('when the form control is no longer required', () =>{
    it('should set required to false', () => {
      wrapper.control.setValidators([]);
      fixture.detectChanges();

      expect(component.required).toEqual(false);
    });

    it('should set requiredAttribute to null', () => {
      wrapper.control.setValidators([]);
      fixture.detectChanges();

      expect(component.requiredAttribute).toEqual(null);
    });
  });
});
