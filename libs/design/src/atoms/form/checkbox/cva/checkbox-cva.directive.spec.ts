import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffCheckboxComponent } from '../checkbox.component';
import { DaffCheckboxModule } from '../checkbox.module';

@Component({
  template: `
    <daff-checkbox name='test' value='testValue' [formControl]='checkbox'></daff-checkbox>
  `,
  standalone: false,
})
class CheckboxWrapperComponent {
  checkbox = new UntypedFormControl();
}

describe('@daffodil/design | DaffCheckboxControlValueAccessorDirective', () => {

  describe('with the directive', () => {
    let CheckboxWrapper: CheckboxWrapperComponent;

    let component: DaffCheckboxComponent;

    let fixture: ComponentFixture<CheckboxWrapperComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          CheckboxWrapperComponent,
        ],
        imports: [
          ReactiveFormsModule,
          DaffCheckboxModule,
        ],
      })
        .compileComponents();
    }));

    describe('the DaffCheckboxComponent', () => {

      beforeEach(() => {

        fixture = TestBed.createComponent(CheckboxWrapperComponent);
        CheckboxWrapper = fixture.componentInstance;
        component = fixture.debugElement.query(By.css('daff-Checkbox')).componentInstance;
        fixture.detectChanges();
      });

      it('should let the value be set from a form control', async () => {

        expect(component.checked).toEqual(false);

        CheckboxWrapper.checkbox.setValue('testValue');

        expect(component.checked).toEqual(true);
      });

      it('can be disabled from the form control', async () => {
        CheckboxWrapper.checkbox.disable();
        expect(component.disabled).toBe(true);
      });
    });

  });

  describe('without the directive', () => {
    let CheckboxWrapper: CheckboxWrapperComponent;

    let component: DaffCheckboxComponent;

    let fixture: ComponentFixture<CheckboxWrapperComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          CheckboxWrapperComponent,
          DaffCheckboxComponent,
        ],
        imports: [
          ReactiveFormsModule,
        ],
      })
        .compileComponents();
    }));

    describe('the DaffCheckboxComponent', () => {

      it('throws an error without the directive to give the itself the CVA interface', async () => {
        fixture = TestBed.createComponent(CheckboxWrapperComponent);
        CheckboxWrapper = fixture.componentInstance;
        expect(() => {
          component = fixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
          fixture.detectChanges();
        }).toThrowError();
      });

    });
  });
});
