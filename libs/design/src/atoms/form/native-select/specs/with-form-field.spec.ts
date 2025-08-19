import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { UntypedFormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffFormFieldComponent,
  DaffNativeSelectComponent,
} from '@daffodil/design';

@Component({
  template: `
    <daff-form-field [id]="id">
      <select daff-native-select></select>
    </daff-form-field>
  `,
  standalone: false,
})
class WrapperComponent {
  id = 'test';
}

describe('@daffodil/design | DaffNativeSelectComponent | With Form Field', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubFormControl;
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
    stubFormControl = new UntypedFormControl();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('[daff-native-select]'));
    component = componentDE.componentInstance;
    formField = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set the control type to `native-select', () => {
    expect(component.controlType).toEqual('native-select');
  });

  it('should set the native select id to the form field id', () => {
    expect(componentDE.attributes.id).toEqual(formField.id);
  });


  it('should set required to false', () => {
    expect(component.required).toBe(false);
  });

  describe('when [daff-native-select] is focused', () => {
    it('should set focused to true', () => {
      componentDE.triggerEventHandler('focus', {});

      expect(component.focused).toBe(true);
    });
  });

  describe('when [daff-native-select] is blurred', () => {
    it('should set focused to false', () => {
      componentDE.triggerEventHandler('blur', {});

      expect(component.focused).toBe(false);
    });
  });

  describe('when the form field id gets updated', () => {
    it('should update the native-select`s id', () => {
      wrapper.id = 'test-2';
      fixture.detectChanges();

      expect(formField.id).toEqual('test-2');
      expect(componentDE.attributes.id).toEqual('test-2');
    });
  });
});
