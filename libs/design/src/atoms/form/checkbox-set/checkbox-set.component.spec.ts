import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';

import { DaffCheckboxSetComponent } from './checkbox-set.component';

import { By } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DaffCheckboxModule } from '../checkbox/checkbox.module';
import { DaffFormLabelModule } from '../form-label/form-label.module';
import { DaffCheckboxComponent } from '../checkbox/checkbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DaffCheckboxSetDirection } from 'dist/design/atoms/form/checkbox-set/checkbox-set.component';

const INITIALLY_CHECKED_VALUE = 'checkbox3';

@Component({
  template: `
    <daff-checkbox-set [formControl]="checkboxSet" [direction]="direction">
      <label daffFormLabel></label>
      <daff-checkbox value="checkbox1">Checkbox 1</daff-checkbox>
      <daff-checkbox value="checkbox2">Checkbox 2</daff-checkbox>
      <daff-checkbox value="checkbox3">Checkbox 3</daff-checkbox>
    </daff-checkbox-set>`
})
class WrapperComponent {
  checkboxSet = new FormControl([INITIALLY_CHECKED_VALUE], [Validators.required]);
  direction: DaffCheckboxSetDirection;
}

describe('DaffCheckboxSetComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffCheckboxSetComponent;
  let checkboxes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule,
        DaffFormLabelModule,
        FontAwesomeModule
      ],
      declarations: [
        DaffCheckboxSetComponent,
        WrapperComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-checkbox-set'));
    component = de.componentInstance;

    fixture.detectChanges();

    checkboxes = fixture.debugElement.queryAll(By.css('daff-checkbox'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-checkbox-set>', () => {
    it('should add a class of "daff-checkbox-set" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-checkbox-set': true,
      }));
    });
  });

  describe('setting the direction', () => {
    describe('when direction="vertical"', () => {
      it('should add a class of "daff-checkbox-set--vertical" to the host element', () => {
        wrapper.direction = 'vertical';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-checkbox-set--vertical': true
        }));
      });
    });

    describe('when direction="horizontal"', () => {
      it('should add a class of "daff-checkbox-set--horizontal" to the host element', () => {
        wrapper.direction = 'horizontal';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-checkbox-set--horizontal': true
        }));
      });
    });
  });

  describe('when given valid initially checked values', () => {
    it('should set the given checkboxes to checked', () => {
      const checkedBoxes = checkboxes
        .map(checkbox => checkbox.componentInstance as DaffCheckboxComponent)
        .filter(checkbox => checkbox.value === INITIALLY_CHECKED_VALUE);

      expect(checkedBoxes.length).toEqual(1);
      expect(checkedBoxes[0].checked).toEqual(true);
    });

    it('should not set any other checkboxes to checked', () => {
      const uncheckedCheckboxes = checkboxes.filter(checkbox => checkbox.componentInstance.value !== INITIALLY_CHECKED_VALUE);

      uncheckedCheckboxes.forEach(checkbox => {
        expect(checkbox.componentInstance.checked).toBeFalsy();
      });
    });
  });

  describe('when a checkbox is checked', () => {

    it('should add the checkbox value to the formControl', () => {
      expect(wrapper.checkboxSet.value.indexOf(checkboxes[0].componentInstance.value) > -1).toBeFalsy();
      checkboxes[0].componentInstance.toggleCheckbox();

      expect(wrapper.checkboxSet.value.indexOf(checkboxes[0].componentInstance.value) > -1).toBeTruthy();
    });
  });

  describe('when a checkbox is unchecked', () => {

    it('should remove the checkbox value from the formControl', () => {
      checkboxes[0].componentInstance.toggleCheckbox();
      expect(wrapper.checkboxSet.value.indexOf(checkboxes[0].componentInstance.value) > -1).toBeTruthy();
      checkboxes[0].componentInstance.toggleCheckbox();

      expect(wrapper.checkboxSet.value.indexOf(checkboxes[0].componentInstance.value) > -1).toBeFalsy();
    });
  });

  describe('when a checkbox is touched', () => {

    beforeEach(() => {
      wrapper.checkboxSet.markAsUntouched();
      checkboxes[0].componentInstance.notifyTouched();
      fixture.detectChanges();
    });

    it('should set the checkboxSet to touched', () => {
      expect(wrapper.checkboxSet.touched).toBeTruthy();
    });
  });

  describe('writing values onto the checkboxSet', () => {

    describe('when the given values contain a duplicate', () => {

      it('should throw a duplicate value error', () => {
        expect(() => {
          wrapper.checkboxSet.patchValue(['checkbox1', 'checkbox1']);
          fixture.detectChanges();
        }).toThrowError('Duplicate checkbox value. Duplicates are not allowed in <daff-checkbox-set>');
      });
    });

    describe('when a given value does not match an existing checkbox', () => {

      it('should throw an invalid value error', () => {
        expect(() => {
          wrapper.checkboxSet.patchValue(['not a checkbox', 'checkbox1']);
          fixture.detectChanges();
        }).toThrowError('Given DaffCheckboxSetComponent value has an invalid checkbox value');
      });
    });

    describe('when the given values are valid, without duplicates', () => {

      let givenValue: string;

      beforeEach(() => {
        givenValue = 'checkbox2';
        wrapper.checkboxSet.patchValue([givenValue]);
        fixture.detectChanges();
      });

      it('should set the given checkboxes to checked', () => {
        const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.componentInstance.value === givenValue);
        checkedCheckboxes.forEach(checkbox => {
          expect(checkbox.componentInstance.checked).toBeTruthy();
        });
      });

      it('should set all other checkboxes to unchecked', () => {
        const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.componentInstance.value !== givenValue);
        checkedCheckboxes.forEach(checkbox => {
          expect(checkbox.componentInstance.checked).toBeFalsy();
        });
      });
    });
  });
});
