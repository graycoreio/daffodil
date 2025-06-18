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
} from '@daffodil/design';
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <textarea daff-textarea [required]="requiredValue"></textarea>
    </daff-form-field>
  `,
  imports: [
    DaffTextareaComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
class WrapperComponent {
  requiredValue: boolean | string;
}

describe('@daffodil/design/textarea | DaffTextareaComponent | Static Required Attribute', () => {
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
    component = componentDE.injector.get(DaffTextareaComponent);
    formField = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the textarea is required', () => {
    beforeEach(() => {
      wrapper.requiredValue = true;
      fixture.detectChanges();
    });

    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });
  });

  describe('when the textarea is no longer required', () => {
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
  message: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
}

describe('@daffodil/design/textarea | DaffTextareaComponent | Reactive Forms Required State', () => {
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

  describe('when the reactive forms textarea is required', () => {
    it('should set required to true', () => {
      expect(component.required).toEqual(true);
    });

    it('should set requiredAttribute to true', () => {
      expect(component.requiredAttribute).toEqual(true);
    });
  });

  describe('when the form control is no longer required', () =>{
    it('should set required to false', () => {
      wrapper.message.setValidators([]);
      fixture.detectChanges();

      expect(component.required).toEqual(false);
    });

    it('should set requiredAttribute to null', () => {
      wrapper.message.setValidators([]);
      fixture.detectChanges();

      expect(component.requiredAttribute).toEqual(null);
    });
  });
});
