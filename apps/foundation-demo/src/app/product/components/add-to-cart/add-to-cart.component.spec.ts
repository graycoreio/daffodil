import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AddToCartComponent } from './add-to-cart.component';

@Component({template: '<fd-add-to-cart (addToCart)="eventCatcher()" [additive]="additiveValue" [qty]="qtyValue"></fd-add-to-cart>'})
class AddToCartWrapperTest {
  additiveValue = 'additiveValue';
  qtyValue = 1;
  eventCatcher;
}

describe('AddToCartComponent', () => {
  let component: AddToCartWrapperTest;
  let fixture: ComponentFixture<AddToCartWrapperTest>;
  let addToCartComponent: AddToCartComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        AddToCartWrapperTest,
        AddToCartComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartWrapperTest);
    component = fixture.componentInstance;
    component.eventCatcher = () => {};
    
    fixture.detectChanges();

    addToCartComponent = fixture.debugElement.query(By.css('fd-add-to-cart')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take additive as input', () => {
    expect(addToCartComponent.additive).toEqual(component.additiveValue);
  });

  it('should be able to take qty as input', () => {
    expect(addToCartComponent.qty).toEqual(component.qtyValue);
  });

  describe('when add to cart button is clicked', () => {

    beforeEach(() => {
      spyOn(addToCartComponent, 'emitAddToCart');

      fixture.debugElement.query(By.css('button')).nativeElement.click();      
    });
    
    it('should call emitAddToCart', () => {
      expect(addToCartComponent.emitAddToCart).toHaveBeenCalled();
    });
  });

  describe('emitAddToCart', () => {
    
    it('should call addToCart.emit', () => {
      spyOn(addToCartComponent.addToCart, 'emit');

      addToCartComponent.emitAddToCart();

      expect(addToCartComponent.addToCart.emit).toHaveBeenCalledWith({productId: addToCartComponent.additive.id, qty: addToCartComponent.qty});
    });
  });
});
