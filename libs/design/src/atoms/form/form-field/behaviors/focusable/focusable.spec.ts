import { Component, ContentChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { daffFocusableMixin } from './focusable';
import { DaffInputModule } from '../../../input/public_api';
import { DaffFormFieldControl } from '../../form-field-control';

class FocusableComponentBase {
  @ContentChild(DaffFormFieldControl, { static: true }) _control: DaffFormFieldControl;
}

const _focusableComponentBase = daffFocusableMixin(FocusableComponentBase);

@Component({
  selector: 'daff-focusable',
  template: '<ng-content></ng-content>'
})
class FocusableComponent extends _focusableComponentBase {}

@Component({
  template: '<daff-focusable><input daff-input [formControl]="formControlValue"></daff-focusable>'
})
class WrapperComponent {
  formControlValue = new FormControl('', Validators.required);
}

describe('daffFocusableMixin', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let focusableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule
      ],
      declarations: [
        WrapperComponent,
        FocusableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    focusableComponent = fixture.debugElement.query(By.css('daff-focusable')).componentInstance;
  });

  it('should add an isFocused property to an existing class', () => {
    expect('isFocused' in focusableComponent).toBeTruthy();
  });

  describe('isFocused', () => {

    it('should return the focused property of the control', () => {
      const formControlElement = fixture.debugElement.query(By.css('input')).componentInstance;
      formControlElement.focused = true;

      fixture.detectChanges();
      expect(focusableComponent.isFocused).toEqual(formControlElement.focused);
    });
  });
});
