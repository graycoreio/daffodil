import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffFormFieldModule } from '../../atoms/form/form-field/public_api';
import { DaffInputModule } from '../../atoms/form/input/input.module';
import { DaffNativeSelectModule } from '../../atoms/form/native-select/public_api';
import { DaffQtyDropdownComponent } from './qty-dropdown.component';

@Component({ template: '<daff-qty-dropdown [qty]="qtyValue" [id]="idValue"></daff-qty-dropdown>' })
class WrapperComponent {
  qtyValue: string;
  idValue: string;
}

describe('DaffQtyDropdownComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  const mockQty = '3';
  const mockId = 'id';
  let qtyDropdownComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        DaffFormFieldModule,
        DaffNativeSelectModule,
        DaffInputModule,
      ],
      declarations: [
        WrapperComponent,
        DaffQtyDropdownComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.qtyValue = mockQty;
    wrapper.idValue = mockId;

    qtyDropdownComponent = fixture.debugElement.query(By.css('daff-qty-dropdown'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('can be passed a qty input', () => {
    expect(qtyDropdownComponent.componentInstance.qty).toEqual(mockQty);
  });

  it('can be passed an id input', () => {
    expect(qtyDropdownComponent.componentInstance.id).toEqual(mockId);
  });

  describe('ngOnInit', () => {

    it('should create the dropdownItemCounter array', () => {
      expect(qtyDropdownComponent.componentInstance.dropdownItemCounter.length).toEqual(9);
    });

    describe('when qty is not given as input', () => {

      beforeEach(() => {
        fixture = TestBed.createComponent(WrapperComponent);
        wrapper = fixture.componentInstance;

        fixture.detectChanges();
        qtyDropdownComponent = fixture.debugElement.query(By.css('daff-qty-dropdown'));
      });

      it('should set qty to 1', () => {
        expect(qtyDropdownComponent.componentInstance.qty).toEqual(1);
      });
    });
  });

  describe('writeValue', () => {

    const newQtyValue = 'newQtyValue';

    beforeEach(() => {
      spyOn(qtyDropdownComponent.componentInstance, 'onChange');
      qtyDropdownComponent.componentInstance.writeValue(newQtyValue);
    });

    it('sets qty to argument', () => {
      expect(qtyDropdownComponent.componentInstance.qty).toEqual(newQtyValue);
    });

    it('calls onChange with qty', () => {
      expect(qtyDropdownComponent.componentInstance.onChange)
        .toHaveBeenCalledWith(qtyDropdownComponent.componentInstance.qty);
    });
  });

  describe('registerOnChange', () => {

    const givenFunction = () => {};

    beforeEach(() => {
      qtyDropdownComponent.componentInstance.registerOnChange(givenFunction);
    });

    it('sets onChange to given function', () => {
      expect(qtyDropdownComponent.componentInstance.onChange).toEqual(givenFunction);
    });
  });

  describe('registerOnTouched', () => {

    const givenFunction = () => {};

    beforeEach(() => {
      qtyDropdownComponent.componentInstance.registerOnTouched(givenFunction);
    });

    it('sets onTouched to given function', () => {
      expect(qtyDropdownComponent.componentInstance.onTouched).toEqual(givenFunction);
    });
  });

  describe('setDisabledState', () => {

    describe('when inputHasBeenShown is false', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.inputHasBeenShown = false;

        fixture.detectChanges();
      });

      describe('when argument is false', () => {

        it('should not disable <select>', () => {
          qtyDropdownComponent.componentInstance.setDisabledState(false);

          expect(fixture.debugElement.query(By.css('select')).properties.disabled).toBeFalsy();
        });
      });

      describe('when argument is true', () => {

        it('should disable <select>', () => {
          qtyDropdownComponent.componentInstance.setDisabledState(true);

          expect(fixture.debugElement.query(By.css('select')).properties.disabled).toBeTruthy();
        });
      });
    });

    describe('when inputHasBeenShown is true', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.inputHasBeenShown = true;

        fixture.detectChanges();
      });

      describe('when argument is false', () => {

        it('should not disable <input>', () => {
          qtyDropdownComponent.componentInstance.setDisabledState(false);

          expect(fixture.debugElement.query(By.css('input')).properties.disabled).toBeFalsy();
        });
      });

      describe('when argument is true', () => {

        it('should disable <input>', () => {
          qtyDropdownComponent.componentInstance.setDisabledState(true);

          expect(fixture.debugElement.query(By.css('input')).properties.disabled).toBeTruthy();
        });
      });
    });
  });

  describe('showQtyInputField', () => {

    describe('when qty is less than dropdownRange', () => {

      describe('and inputHasBeenShown is false', () => {

        beforeEach(() => {
          qtyDropdownComponent.componentInstance.inputHasBeenShown = false;
          fixture.detectChanges();
        });

        it('should return false', () => {
          expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeFalsy();
        });
      });

      describe('and inputHasBeenShown is true', () => {

        beforeEach(() => {
          qtyDropdownComponent.componentInstance.inputHasBeenShown = true;
          fixture.detectChanges();
        });

        it('should return true', () => {
          expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeTruthy();
        });
      });
    });

    describe('when qty is greater than dropdownRange', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.qty = 10;
        fixture.detectChanges();
      });

      it('should set inputHasBeenShown to true', () => {
        expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeTruthy();
      });

      it('should return true', () => {
        expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeTruthy();
      });
    });
  });

  describe('onChangedWrapper', () => {

    let input;

    beforeEach(() => {
      input = '2';
      spyOn(qtyDropdownComponent.componentInstance, 'selectInput').and.callThrough();
    });

    it('calls onChange with argument', () => {
      spyOn(qtyDropdownComponent.componentInstance, 'onChange');
      qtyDropdownComponent.componentInstance.onChangedWrapper(input);

      expect(qtyDropdownComponent.componentInstance.onChange).toHaveBeenCalledWith(parseInt(input, 10));
    });

    it('calls qtyChanged.emit', () => {
      spyOn(qtyDropdownComponent.componentInstance.qtyChanged, 'emit');

      qtyDropdownComponent.componentInstance.onChangedWrapper(input);

      expect(qtyDropdownComponent.componentInstance.qtyChanged.emit).toHaveBeenCalledWith(parseInt(input, 10));
    });

    describe('when value is 10', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.inputHasBeenShown = true;
        fixture.detectChanges();
        qtyDropdownComponent.componentInstance.onChangedWrapper('10');
      });

      it('should calls selectInput', () => {
        expect(qtyDropdownComponent.componentInstance.selectInput).toHaveBeenCalledWith();
      });
    });

    describe('when value is not 10', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.onChangedWrapper('2');
      });

      it('does not call selectInput', () => {
        expect(qtyDropdownComponent.componentInstance.selectInput).not.toHaveBeenCalled();
      });
    });
  });
});
