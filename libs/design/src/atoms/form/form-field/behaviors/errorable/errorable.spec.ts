import { Component, ContentChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { daffErrorableMixin } from './errorable';
import { DaffFormFieldControl } from '../../form-field-control';
import { DaffInputModule } from '../../../input/public_api';


class ErrorableComponentBase {
  @ContentChild(DaffFormFieldControl, { static: true }) _control: DaffFormFieldControl;
}

const _errorableComponentBase = daffErrorableMixin(ErrorableComponentBase);

@Component({
  selector: 'daff-errorable',
  template: '<ng-content></ng-content>'
})
class ErrorableComponent extends _errorableComponentBase {}

@Component({
  template: '<daff-errorable><input daff-input [formControl]="formControlValue"></daff-errorable>'
})
class WrapperComponent {
  formControlValue = new FormControl('', Validators.required);
}

describe('daffErrorableMixin', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let errorableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule
      ],
      declarations: [
        WrapperComponent,
        ErrorableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    errorableComponent = fixture.debugElement.query(By.css('daff-errorable')).componentInstance;
  });

  it('should add an isError property to an existing class', () => {
    expect('isError' in errorableComponent).toBeTruthy();
  });

  describe('isError', () => {

    describe('when the form control has been touched and is in error', () => {

      it('should return true', () => {
        errorableComponent._control.ngControl.control.markAsTouched();
        errorableComponent._control.ngControl.control.patchValue(null);
        fixture.detectChanges();

        expect(errorableComponent.isError).toBeTruthy();
      });
    });

    describe('when the form control has not been touched', () => {

      it('should return false', () => {
        errorableComponent._control.ngControl.control.markAsUntouched();
        fixture.detectChanges();

        expect(errorableComponent.isError).toBeFalsy();
      });
    });

    describe('when the form control has been touched, but is not in error', () => {

      it('should return false', () => {
        errorableComponent._control.ngControl.control.markAsTouched();
        errorableComponent._control.ngControl.control.patchValue('value');
        fixture.detectChanges();

        expect(errorableComponent.isError).toBeFalsy();
      });
    });
  });
});
