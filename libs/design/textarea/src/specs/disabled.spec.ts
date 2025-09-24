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
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <textarea daff-textarea [disabled]="disabledValue"></textarea>
    </daff-form-field>
  `,
  imports: [
    DaffTextareaComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
class WrapperComponent {
  disabledValue: boolean | string;
}

describe('@daffodil/design/textarea | DaffTextareaComponent | Static Disabled Attribute', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffTextareaComponent;
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

    componentDE = fixture.debugElement.query(By.css('[daff-textarea]'));
    component = componentDE.injector.get(DaffTextareaComponent);
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the textarea is disabled', () => {
    beforeEach(() => {
      wrapper.disabledValue = true;
      fixture.detectChanges();
    });

    it('should set disabled to true', () => {
      expect(component.disabled).toEqual(true);
    });
  });

  describe('when the textarea is no longer disabled', () => {
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
			<daff-form-label>Message</daff-form-label>
      <textarea daff-textarea type="text" name="message" [formControl]="message"></textarea>
    </daff-form-field>
  `,
  imports: [
    DaffTextareaComponent,
    DAFF_FORM_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class FormsWrapperComponent {
  message: UntypedFormControl = new UntypedFormControl({ value: '', disabled: true });
}

describe('@daffodil/design/textarea | DaffTextareaComponent | Reactive Forms Disabled State', () => {
  let wrapper: FormsWrapperComponent;
  let fixture: ComponentFixture<FormsWrapperComponent>;
  let componentDE: DebugElement;
  let component: DaffTextareaComponent;

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

    componentDE = fixture.debugElement.query(By.css('[daff-textarea]'));
    component = componentDE.injector.get(DaffTextareaComponent);
  });

  describe('when the reactive forms textarea is disabled', () => {
    it('should set disabled to true', () => {
      expect(component.disabled).toEqual(true);
    });
  });

  describe('when the form control is no longer disabled', () =>{
    it('should set disabled to false', () => {
      wrapper.message.enable();
      fixture.detectChanges();

      expect(component.disabled).toEqual(false);
    });
  });
});
