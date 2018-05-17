import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

    describe('when qty is less than or equal to dropdownRange', () => {
      
      it('sets showQtyInputField to false', () => {
        expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeFalsy();
      });
    });

    describe('when qty is greater than dropdownRange', () => {
      
      beforeEach(() => {
        fixture = TestBed.createComponent(TestQtyDropdownWrapper);
        component = fixture.componentInstance;
        
        component.qtyValue = "10";
        fixture.detectChanges();
        qtyDropdownComponent = fixture.debugElement.query(By.css('qty-dropdown'));
      });

      it('should set showQtyInputField to true', () => {
        expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeTruthy();
      });
    });

    it('initializes dropdownItemCounter to an array of size dropdownRange', () => {
      expect(qtyDropdownComponent.componentInstance.dropdownItemCounter.length).toEqual(9);
    });
  });

  describe('onChange', () => {
    
    describe('when value is 10+', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.onChange("10+");
      });
      
      it('sets showQtyInputField to true', () => {
        expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeTruthy();
      });
    });
    
    describe('when value is not 10+', () => {

      beforeEach(() => {
        qtyDropdownComponent.componentInstance.onChange("not");
      });
      
      it('showQtyInputField remains false', () => {
        expect(qtyDropdownComponent.componentInstance.showQtyInputField).toBeFalsy();
      });
    });
  });

  describe('isOptionSelectedInitially', () => {

    let result;
    
    describe('when index equals qty', () => {

      beforeEach(() => {
        result = qtyDropdownComponent.componentInstance.isOptionSelectedInitially(parseInt(mockQty));
      });
      
      it('should return selected', () => {
        expect(result).toEqual('selected');
      });
    });
    
    describe('when index does not equal qty', () => {
      
      beforeEach(() => {
        result = qtyDropdownComponent.componentInstance.isOptionSelectedInitially(35);
      });

      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });
});
