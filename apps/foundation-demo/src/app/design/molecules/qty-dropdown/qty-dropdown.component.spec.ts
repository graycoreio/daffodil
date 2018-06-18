import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<qty-dropdown [ngModel]="qtyValue"></qty-dropdown>'})
class TestQtyDropdownWrapper {
  qtyValue: string;
}

describe('QtyDropdownComponent', () => {
  let component: TestQtyDropdownWrapper;
  let fixture: ComponentFixture<TestQtyDropdownWrapper>;
  let qtyDropdownComponent: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        TestQtyDropdownWrapper,
        QtyDropdownComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQtyDropdownWrapper);
    component = fixture.componentInstance;
    qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array numbers of quantities defined on it by default', () => {
    expect(qtyDropdownComponent.componentInstance.dropdownItemCounter).not.toBeNull();
  })

  describe('ngOnInit', () => {
    xit('subscribe to the valueChanges of the formControl property', () => {

    });
  });

  describe('writeValue', () => {

    let newQtyValue = 2;

    beforeEach(() => {
      spyOn(qtyDropdownComponent.componentInstance, 'onChange');
      qtyDropdownComponent.componentInstance.writeValue(newQtyValue);
    });
    
    it('sets the qtyControl value to argument', () => {
      expect(qtyDropdownComponent.componentInstance._qtyControl.value).toEqual(newQtyValue);
    });

    it('calls onChange with qty', () => {
      expect(qtyDropdownComponent.componentInstance.onChange).toHaveBeenCalledWith(newQtyValue);
    });
  });

  describe('registerOnChange', () => {
    let givenFunction: Function = () => {};

    beforeEach(() => {
      qtyDropdownComponent.componentInstance.registerOnChange(givenFunction);
    });
    
    it('sets onChange to given function', () => {
      expect(qtyDropdownComponent.componentInstance.onChange).toEqual(givenFunction);
    });
  });

  describe('registerOnTouched', () => {
    let givenFunction: Function= () => {};

    beforeEach(() => {
      qtyDropdownComponent.componentInstance.registerOnTouched(givenFunction);
    });
    
    it('sets onTouched to given function', () => {
      expect(qtyDropdownComponent.componentInstance.onTouched).toEqual(givenFunction);
    });
  });

  describe('setDisabledState', () => {
    beforeEach(() => {
      qtyDropdownComponent.componentInstance.inputHasBeenShown = false;
      fixture.detectChanges();
    });

    describe('when not disabled', () => {
      beforeEach(() => {
        qtyDropdownComponent.componentInstance.setDisabledState(false);
      });

      it('should not disable <input>', () => {
        qtyDropdownComponent.componentInstance.inputHasBeenShown = true;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('input')).properties.disabled).toBeFalsy();
      });

      it('should not disable <select>', () => {
        expect(fixture.debugElement.query(By.css('select')).properties.disabled).toBeFalsy();
      });
    });

    describe('when disabled', () => {
      beforeEach(() => {
        qtyDropdownComponent.componentInstance.setDisabledState(true);
      });

      it('should disable <input>', () => {
        qtyDropdownComponent.componentInstance.inputHasBeenShown = true;
        fixture.detectChanges();        
        expect(fixture.debugElement.query(By.css('input')).properties.disabled).toBeTruthy();
      });
      
      it('should disable <select>', () => {
        expect(fixture.debugElement.query(By.css('select')).properties.disabled).toBeTruthy();
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
        qtyDropdownComponent.componentInstance._qtyControl.patchValue(10);
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

  describe('onQtyChanged', () => {
    
    let input;

    beforeEach(() => {
      input = "2";
      spyOn(qtyDropdownComponent.componentInstance, 'focusInput').and.callThrough();      
    });

    it('calls onChange with argument', () => {
      spyOn(qtyDropdownComponent.componentInstance, "onChange");
      qtyDropdownComponent.componentInstance.onQtyChanged(input);
      
      expect(qtyDropdownComponent.componentInstance.onChange).toHaveBeenCalledWith(parseInt(input));
    });
    
    describe('when value is 10', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.inputHasBeenShown = true;
        fixture.detectChanges();
        qtyDropdownComponent.componentInstance.onQtyChanged("10");
      });
      
      it('should call focusInput', () => {
        expect(qtyDropdownComponent.componentInstance.focusInput).toHaveBeenCalled();
      });
    });
    
    describe('when value is not 10', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.onQtyChanged("2");
      });
      
      it('does not call focusInput', () => {
        expect(qtyDropdownComponent.componentInstance.focusInput).not.toHaveBeenCalled();
      });
    });
  });
});
