import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffFormFieldComponent,
} from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  template:`
    <daff-form-field [id]="id">
      <input daff-input>
    </daff-form-field>
  `,
  imports: [
    DaffInputComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
class WrapperComponent {
  id = 'test';
}

describe('@daffodil/design | DaffInputComponent | With Form Field', () => {
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
    component = componentDE.componentInstance;
    formField = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set the control type to native-input', () => {
    expect(formField._control.controlType).toEqual('native-input');
  });

  it('should set the input id to the form field id', () => {
    expect(componentDE.attributes.id).toEqual(formField.id);
  });

  it('should set required to false', () => {
    expect(component.required).toBe(false);
  });

  describe('when [daff-input] is focused', () => {
    it('should set focused to true', () => {
      componentDE.triggerEventHandler('focus', {});

      expect(component.focused).toBe(true);
    });
  });

  describe('when [daff-input] is blurred', () => {
    it('should set focused to false', () => {
      componentDE.triggerEventHandler('blur', {});

      expect(component.focused).toBe(false);
    });
  });

  describe('when the form field id gets updated', () => {
    it('should update the input`s id', () => {
      wrapper.id = 'test-2';
      fixture.detectChanges();

      expect(formField.id).toEqual('test-2');
      expect(componentDE.attributes.id).toEqual('test-2');
    });
  });
});
