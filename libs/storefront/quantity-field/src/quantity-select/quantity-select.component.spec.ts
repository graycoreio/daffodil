import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffFormFieldComponent } from '@daffodil/design/form-field';
import { DaffNativeSelectComponent } from '@daffodil/design/native-select';

import { DaffSfQuantitySelectComponent } from './quantity-select.component';

@Component({
  template: `
    <daff-sf-quantity-select
      [min]="minValue"
      [max]="maxValue"
      [extendable]="extendableValue"
      [quantity]="quantity"
      [disabled]="disabled"
    ></daff-sf-quantity-select>
  `,
  imports: [
    DaffSfQuantitySelectComponent,
  ],
})
class WrapperComponent {
  minValue = 2;
  maxValue = 7;
  extendableValue = true;
  quantity = 1;
  disabled;
}

describe('@daffodil/storefront/quantity-field | DaffSfQuantitySelectComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffSfQuantitySelectComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let selectComponent: DaffNativeSelectComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        {
          provide: DaffFormFieldComponent,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-sf-quantity-select')).componentInstance;
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
    beforeEach(() => {
      wrapper.quantity = 5;
      fixture.detectChanges();
    });

    it('should set that quantity on the form control', () => {
      expect(component._selectControl.value).toEqual(wrapper.quantity);
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

  it('should set disabled on the native select when disabled', () => {
    wrapper.disabled = true;
    fixture.detectChanges();

    const selectEl: HTMLSelectElement = fixture.debugElement.query(By.css('select[daff-native-select]')).nativeElement;
    expect(selectEl.disabled).toBeTrue();
  });

  describe('when user changes the value', () => {
    it('should output a value', () => {
      const spy = spyOn(component.valueChange, 'emit');
      const selectDe = fixture.debugElement.query(By.css('select[daff-native-select]'));

      selectDe.nativeElement.value = '4';
      selectDe.triggerEventHandler('change', { target: selectDe.nativeElement });

      expect(spy).toHaveBeenCalledWith(4);
    });
  });

  it('should allow min to be changed', () => {
    wrapper.minValue = 3;
    fixture.detectChanges();

    const optionTexts = fixture.debugElement.queryAll(By.css('select option')).map(el => el.nativeElement.innerText);
    expect(optionTexts[0]).toEqual('3');
  });

  it('should allow max to be changed', () => {
    wrapper.maxValue = 5;
    fixture.detectChanges();

    const optionTexts = fixture.debugElement.queryAll(By.css('select option')).map(el => el.nativeElement.innerText);
    expect(optionTexts[optionTexts.length - 1]).toEqual('5+');
  });
});
