import { Component, ContentChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { daffValidableMixin } from './validable';
import { DaffFormFieldControl } from '../../form-field-control';
import { DaffInputModule } from '../../../input/public_api';

class ValidableComponentBase {
  @ContentChild(DaffFormFieldControl, { static: true }) _control: DaffFormFieldControl;
}

const _validableComponentBase = daffValidableMixin(ValidableComponentBase);

@Component({
  selector: 'daff-validable',
  template: '<ng-content></ng-content>'
})
class ValidableComponent extends _validableComponentBase {}

@Component({
  template: '<daff-validable><input daff-input [formControl]="formControlValue"></daff-validable>'
})
class WrapperComponent {
  formControlValue = new FormControl('', Validators.required);
}

describe('daffValidableMixin', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let validableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule
      ],
      declarations: [
        WrapperComponent,
        ValidableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    validableComponent = fixture.debugElement.query(By.css('daff-validable')).componentInstance;
  });

  it('should add an isValid property to an existing class', () => {
    expect('isValid' in validableComponent).toBeTruthy();
  });

  describe('isValid', () => {

    describe('when the form control has been touched and is in error', () => {

      it('should return false', () => {
        validableComponent._control.ngControl.control.markAsTouched();
        validableComponent._control.ngControl.control.patchValue(null);
        fixture.detectChanges();

        expect(validableComponent.isValid).toBeFalsy();
      });
    });

    describe('when the form control has not been touched', () => {

      it('should return false', () => {
        validableComponent._control.ngControl.control.markAsUntouched();
        fixture.detectChanges();

        expect(validableComponent.isValid).toBeFalsy();
      });
    });

    describe('when the form control has been touched, but is not in error', () => {

      it('should return true', () => {
        validableComponent._control.ngControl.control.markAsTouched();
        validableComponent._control.ngControl.control.patchValue('value');
        fixture.detectChanges();

        expect(validableComponent.isValid).toBeTruthy();
      });
    });
  });
});
