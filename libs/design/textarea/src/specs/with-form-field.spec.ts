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
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  template:`
    <daff-form-field [id]="id">
     <textarea daff-textarea></textarea>
    </daff-form-field>
  `,
  imports: [
    DaffTextareaComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
class WrapperComponent {
  id = 'test';
  required: boolean;
}

describe('@daffodil/design/textarea | DaffTextareaComponent | With Form Field', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffTextareaComponent;
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

    componentDE = fixture.debugElement.query(By.css('[daff-textarea]'));
    component = componentDE.componentInstance;
    formField = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set the control type to native-textarea', () => {
    expect(formField._control.controlType).toEqual('native-textarea');
  });

  it('should set the textarea id to the form field id', () => {
    expect(component.internalId).toEqual(formField.id);
  });

  it('should set required to false', () => {
    expect(component.required).toBe(false);
  });

  describe('onFocus', () => {
    it('should call focus on the native element', () => {
      spyOn(componentDE.nativeElement, 'focus');

      component.onFocus();

      expect(componentDE.nativeElement.focus).toHaveBeenCalledWith();
    });
  });

  describe('when [daff-textarea] is focused', () => {
    it('should set focused to true', () => {
      componentDE.triggerEventHandler('focus', {});

      expect(component.focused).toBe(true);
    });
  });

  describe('when [daff-textarea] is blurred', () => {
    it('should set focused to false', () => {
      componentDE.triggerEventHandler('blur', {});

      expect(component.focused).toBe(false);
    });
  });

  describe('when the form field id gets updated', () => {
    it('should update the textarea`s id', () => {
      wrapper.id = 'test-2';
      fixture.detectChanges();

      expect(formField.id).toEqual('test-2');
      expect(component.internalId).toEqual('test-2');
    });
  });
});
