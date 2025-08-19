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

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffNativeSelectComponent,
} from '@daffodil/design';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <select daff-native-select [disabled]="disabledValue">
        <option value="''">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </daff-form-field>
  `,
  standalone: false,
})
class WrapperComponent {
  disabledValue: boolean | string;
}

describe('@daffodil/design | DaffNativeSelectComponent | Static Disabled Attribute', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffNativeSelectComponent;
  let componentDE: DebugElement;

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
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the native select is disabled', () => {
    beforeEach(() => {
      wrapper.disabledValue = true;
      fixture.detectChanges();
    });

    it('should set disabled to true', () => {
      expect(component.disabled).toBeTrue();
    });
  });

  describe('when the native select is no longer disabled', () => {
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
      <select daff-native-select [formControl]="control">
      </select>
    </daff-form-field>
  `,
  standalone: false,
})
class FormsWrapperComponent {
  control: UntypedFormControl = new UntypedFormControl({ value: '', disabled: true });
}

describe('@daffodil/design | DaffNativeSelectComponent | Reactive Forms Disabled State', () => {
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

  describe('when the reactive forms native select is disabled', () => {
    it('should set disabled to true', () => {
      expect(component.disabled).toEqual(true);
    });
  });

  describe('when the form control is no longer disabled', () =>{
    it('should set disabled to false', () => {
      wrapper.control.enable();
      fixture.detectChanges();

      expect(component.disabled).toEqual(false);
    });
  });
});
