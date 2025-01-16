import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  NgControl,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { DaffQuantitySelectComponent } from './quantity-select.component';
import {
  DaffNativeSelectModule,
  DaffNativeSelectComponent,
} from '../../native-select/public_api';

@Component({
  template: `
    <daff-quantity-select
      [min]="minValue"
      [max]="maxValue"
      [extendable]="extendableValue"
    ></daff-quantity-select>
  `,
  standalone: false,
})
class WrapperComponent {
  minValue = 2;
  maxValue = 7;
  extendableValue = true;
}

describe('@daffodil/design | DaffQuantitySelectComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffQuantitySelectComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let selectComponent: DaffNativeSelectComponent;
  let control;

  beforeEach(waitForAsync(() => {
    control = {
      statusChanges: new Subject(),
      disabled: false,
      control: new UntypedFormControl(1),
      value: null,
    };

    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        DaffNativeSelectModule,
        ReactiveFormsModule,
      ],
      declarations: [
        DaffQuantitySelectComponent,
        WrapperComponent,
      ],
      providers: [
        {
          provide: NgControl,
          useValue: control,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-quantity-select')).componentInstance;
    selectComponent = fixture.debugElement.query(By.css('[daff-native-select]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the select is extendable', () => {
    beforeEach(() => {
      wrapper.extendableValue = true;
      fixture.detectChanges();
    });

    it('should create options from min to max including a max+ option', () => {
      const expected = ['2', '3', '4', '5', '6', '7+'];
      const optionTexts = fixture.debugElement.queryAll(By.css('select option')).map(el => el.nativeElement.innerText);

      expect(optionTexts).toEqual(expected);
    });
  });

  describe('when the select is not extendable', () => {
    beforeEach(() => {
      wrapper.extendableValue = false;
      fixture.detectChanges();
    });

    it('should create options from min to max excluding a max+ option', () => {
      const expected = ['2', '3', '4', '5', '6', '7'];
      const optionTexts = fixture.debugElement.queryAll(By.css('select option')).map(el => el.nativeElement.innerText);

      expect(optionTexts).toEqual(expected);
    });
  });

  describe('when a value is set on the component', () => {
    let value;

    beforeEach(() => {
      value = 5;
      component.value = value;
      fixture.detectChanges();
    });

    it('should set that value on the form control', () => {
      expect(control.control.value).toEqual(value);
    });
  });

  describe('when the component is focused', () => {
    it('should focus the select component', () => {
      const spy = spyOn(selectComponent, 'focus');
      component.focus();
      fixture.detectChanges();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
