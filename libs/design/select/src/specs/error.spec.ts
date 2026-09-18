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
import { DaffSelectComponent } from '@daffodil/design/select';

@Component({
  template:`
    <daff-form-field>
      <daff-form-label>Label</daff-form-label>
      <daff-select [options]="options" [formControl]="control"></daff-select>
    </daff-form-field>
  `,
  imports: [
    DaffSelectComponent,
    DAFF_FORM_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  options = ['one', 'two'];
  control: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
}

describe('@daffodil/design/select | DaffSelectComponent | Error State', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSelectComponent;
  let componentDE: DebugElement;
  let formFieldElement: HTMLElement;

  const isErrored = () => formFieldElement.classList.contains('daff-error');

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

    componentDE = fixture.debugElement.query(By.css('daff-select'));
    component = componentDE.injector.get(DaffSelectComponent);
    formFieldElement = fixture.debugElement.query(By.directive(DaffFormFieldComponent)).nativeElement;
  });

  describe('when the select is invalid and has not been interacted with', () => {
    it('should not mark the form field as errored', () => {
      expect(isErrored()).toBeFalse();
    });
  });

  describe('when the select is blurred while the options list is open', () => {
    beforeEach(async () => {
      component.open();
      fixture.detectChanges();

      component.blur();
      await fixture.whenStable();
      fixture.detectChanges();
    });

    afterEach(() => {
      component.close();
    });

    it('should not touch the control', () => {
      expect(wrapper.control.touched).toBeFalse();
    });

    it('should not mark the form field as errored', () => {
      expect(isErrored()).toBeFalse();
    });
  });

  describe('when the options list is closed without a selection', () => {
    beforeEach(async () => {
      component.open();
      fixture.detectChanges();

      component.close();
      await fixture.whenStable();
      fixture.detectChanges();
    });

    it('should touch the control', () => {
      expect(wrapper.control.touched).toBeTrue();
    });

    it('should mark the form field as errored', () => {
      expect(isErrored()).toBeTrue();
    });
  });

  describe('when the select is blurred while closed', () => {
    beforeEach(async () => {
      component.blur();
      await fixture.whenStable();
      fixture.detectChanges();
    });

    it('should touch the control', () => {
      expect(wrapper.control.touched).toBeTrue();
    });

    it('should mark the form field as errored', () => {
      expect(isErrored()).toBeTrue();
    });
  });

  describe('when a valid option is selected', () => {
    beforeEach(async () => {
      component.open();
      fixture.detectChanges();

      component.selectOption('two');
      await fixture.whenStable();
      fixture.detectChanges();
    });

    it('should touch the control', () => {
      expect(wrapper.control.touched).toBeTrue();
    });

    it('should not mark the form field as errored', () => {
      expect(isErrored()).toBeFalse();
    });
  });
});
