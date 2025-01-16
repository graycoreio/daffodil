import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffQuantityFieldComponent } from './quantity-field.component';
import { DaffQuantityInputComponent } from './quantity-input/quantity-input.component';
import { DaffQuantitySelectComponent } from './quantity-select/quantity-select.component';
import { DaffInputModule } from '../input/public_api';
import { DaffNativeSelectModule } from '../native-select/public_api';

@Component({
  template: `
    <daff-quantity-field
      [formControl]="formControl"
      [min]="minValue"
      [max]="maxValue"
      [selectMax]="selectMaxValue"
    ></daff-quantity-field>
  `,
  standalone: false,
})
class WrapperComponent {
  minValue = 0;
  maxValue = 50;
  selectMaxValue = 10;
  formControl = new UntypedFormControl(1);
}

describe('@daffodil/design | DaffQuantityFieldComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffQuantityFieldComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  let selectComponent: DaffQuantitySelectComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffQuantityFieldComponent,
        DaffQuantityInputComponent,
        DaffQuantitySelectComponent,
      ],
      imports: [
        CommonModule,
        DaffNativeSelectModule,
        DaffInputModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-quantity-field')).componentInstance;
    selectComponent = fixture.debugElement.query(By.css('daff-quantity-select')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daff-quantity-select>', () => {
    it('should set the select max prop to selectMax', () => {
      expect(selectComponent.max).toEqual(wrapper.selectMaxValue);
    });

    it('should set the select extendable prop to true', () => {
      expect(selectComponent.extendable).toBeTrue();
    });

    describe('when the max value is less than selectMax', () => {
      beforeEach(() => {
        wrapper.maxValue = 5;
        fixture.detectChanges();
      });

      it('should set the select max prop to max', () => {
        expect(selectComponent.max).toEqual(wrapper.maxValue);
      });

      it('should set the select extendable prop to false', () => {
        expect(selectComponent.extendable).toBeFalse();
      });
    });
  });

  describe('when the input value exceeds the selectMax value', () => {

    beforeEach(() => {
      const el: HTMLSelectElement = fixture.debugElement.query(By.css('daff-quantity-select select')).nativeElement;
      wrapper.formControl.patchValue(11);

      fixture.detectChanges();
    });

    it('should render the quantity input', () => {
      const el = fixture.debugElement.query(By.css('daff-quantity-input'));

      expect(el).toBeTruthy();
    });

    it('should not render the quantity select', () => {
      const el = fixture.debugElement.query(By.css('daff-quantity-select'));
      expect(el).toBeFalsy();
    });

    describe('and the input is focused', () => {
      beforeEach(() => {
        const input: DaffQuantityInputComponent = fixture.debugElement.query(By.css('daff-quantity-input')).componentInstance;
        input.focus();
      });

      it('should be focused', () => {
        expect(component.focused).toBeTrue();
      });
    });

    describe('and the input is not focused', () => {
      it('should not be focused', () => {
        expect(component.focused).toBeFalse();
      });
    });
  });

  describe('when the select value is less than the selectMax value', () => {
    describe('and the select is focused', () => {
      beforeEach(() => {
        const select: DaffQuantitySelectComponent = fixture.debugElement.query(By.css('daff-quantity-select')).componentInstance;
        select.focus();
      });

      it('should be focused', () => {
        expect(component.focused).toBeTrue();
      });
    });

    describe('and the select is not focused', () => {
      it('should not be focused', () => {
        expect(component.focused).toBeFalse();
      });
    });
  });
});
