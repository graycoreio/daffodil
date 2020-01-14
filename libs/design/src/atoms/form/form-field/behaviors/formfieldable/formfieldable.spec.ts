import { Component, ContentChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffInputModule } from '../../../input/public_api';

import { daffFormFieldableMixin } from './formfieldable';
import { DaffFormFieldControl } from '../../form-field-control';

class FormFieldableComponentBase {
  @ContentChild(DaffFormFieldControl, { static: true }) _control: DaffFormFieldControl;
 }

const _formfieldableComponentBase = daffFormFieldableMixin(FormFieldableComponentBase);

@Component({
  selector: 'daff-formfieldable',
  template: '<ng-content></ng-content>'
})
class FormFieldableComponent extends _formfieldableComponentBase { }

@Component({
  template: '<daff-formfieldable><input daff-input [formControl]="formControlValue"></daff-formfieldable>'
})
class WrapperComponent {
  formControlValue = new FormControl('', Validators.required);
}

describe('daffFormFieldableMixin', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let formfieldableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule
      ],
      declarations: [
        WrapperComponent,
        FormFieldableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    formfieldableComponent = fixture.debugElement.query(By.css('daff-formfieldable')).componentInstance;
  });

  it('should add an isError property to an existing class', () => {
    expect('isError' in formfieldableComponent).toBeTruthy();
  });

  it('should add an _prefix property to an existing class', () => {
    expect('_prefix' in formfieldableComponent).toBeTruthy();
  });

  it('should add an _suffix property to an existing class', () => {
    expect('_suffix' in formfieldableComponent).toBeTruthy();
  });

  it('should add an isRaised property to an existing class', () => {
    expect('isRaised' in formfieldableComponent).toBeTruthy();
  });
});
