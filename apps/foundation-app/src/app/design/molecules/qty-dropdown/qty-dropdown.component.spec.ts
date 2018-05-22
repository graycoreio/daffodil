import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { QtyDropdownComponent } from './qty-dropdown.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({template: '<qty-dropdown [qty]="qtyValue" [id]="idValue"></qty-dropdown>'})
class TestQtyDropdownWrapper {
  qtyValue: string;
  idValue: string;
}

describe('QtyDropdownComponent', () => {
  let component: TestQtyDropdownWrapper;
  let fixture: ComponentFixture<TestQtyDropdownWrapper>;
  let mockQty = "3";
  let mockId = "id";
  let qtyDropdownComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
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
    component.qtyValue = mockQty;
    component.idValue = mockId;
    
    qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can be passed a qty input', () => {
    expect(qtyDropdownComponent.componentInstance.qty).toEqual(mockQty);
  });

  it('can be passed an id input', () => {
    expect(qtyDropdownComponent.componentInstance.id).toEqual(mockId);
  });

  describe('ngOnInit', () => {
    
    it('should create the dropdownItemCounter array', () => {
      expect(qtyDropdownComponent.componentInstance.dropdownItemCounter.length).toEqual(QtyDropdownComponent.dropdownRange);
    });
  });

  describe('writeValue', () => {

    let newQtyValue = 'newQtyValue';

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

    let givenFunction: Function= () => {};

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

    beforeEach(() => {
      spyOn(qtyDropdownComponent.componentInstance, 'selectInput').and.callThrough();      
    });

    it('calls onChange with argument', () => {
      let input = "2";
      spyOn(qtyDropdownComponent.componentInstance, "onChange");
      qtyDropdownComponent.componentInstance.onChangedWrapper(input);
      
      expect(qtyDropdownComponent.componentInstance.onChange).toHaveBeenCalledWith(parseInt(input));
    });
    
    describe('when value is 10', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.inputHasBeenShown = true;
        fixture.detectChanges();
        qtyDropdownComponent.componentInstance.onChangedWrapper("10");
      });
      
      it('should calls selectInput', () => {
        expect(qtyDropdownComponent.componentInstance.selectInput).toHaveBeenCalled();
      });
    });
    
    describe('when value is not 10', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.onChangedWrapper("2");
      });
      
      it('does not call selectInput', () => {
        expect(qtyDropdownComponent.componentInstance.selectInput).not.toHaveBeenCalled();
      });
    });
  });
});
