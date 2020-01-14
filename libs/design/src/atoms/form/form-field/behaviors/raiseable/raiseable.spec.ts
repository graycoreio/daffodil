import { Component, ContentChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffInputModule } from '../../../input/public_api';
import { DaffFormFieldControl } from '../../form-field-control';
import { daffRaiseableMixin } from './raiseable';
import { daffFocusableMixin } from '../focusable/focusable';

class ErrorableComponentBase {
  @ContentChild(DaffFormFieldControl, { static: true }) _control: DaffFormFieldControl;
 }

const _raiseableComponentBase = daffRaiseableMixin(daffFocusableMixin(ErrorableComponentBase));

@Component({
  selector: 'daff-raiseable',
  template: '<ng-content></ng-content>'
})
class RaiseableComponent extends _raiseableComponentBase { }

@Component({
  template: '<daff-raiseable><input daff-input [formControl]="formControlValue"></daff-raiseable>'
})
class WrapperComponent {
  formControlValue = new FormControl('', Validators.required);
}

describe('daffRaiseableMixin', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let raiseableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule
      ],
      declarations: [
        WrapperComponent,
        RaiseableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    raiseableComponent = fixture.debugElement.query(By.css('daff-raiseable')).componentInstance;
  });

  it('should add an isRaised property to an existing class', () => {
    expect('isRaised' in raiseableComponent).toBeTruthy();
  });

  it('should add an isFocused property to an existing class', () => {
    expect('isFocused' in raiseableComponent).toBeTruthy();
  });

  describe('isRaised', () => {

    describe('when the form control has been focused', () => {

      it('should return true', () => {
        raiseableComponent._control.focused = true;
        fixture.detectChanges();

        expect(raiseableComponent.isRaised).toBeTruthy();
      });
    });

    describe('when the form control has a value', () => {

      it('should return true', () => {
        raiseableComponent._control.ngControl.control.patchValue('value');
        fixture.detectChanges();

        expect(raiseableComponent.isRaised).toBeTruthy();
      });
    });

    describe('when the form control is not focused and has no value', () => {

      it('should return false', () => {
        raiseableComponent._control.focused = false;
        raiseableComponent._control.ngControl.control.patchValue(null);
        fixture.detectChanges();

        expect(raiseableComponent.isRaised).toBeFalsy();
      });
    });
  });
});
