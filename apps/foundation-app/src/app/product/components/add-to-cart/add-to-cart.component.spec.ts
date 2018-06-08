import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-cart.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

@Component({template: '<add-to-cart (addToCart)="eventCatcher()"></add-to-cart>'})
class AddToCartWrapperTest {
  eventCatcher;
}

describe('AddToCartComponent', () => {
  let component: AddToCartWrapperTest;
  let fixture: ComponentFixture<AddToCartWrapperTest>;
  let addToCartComponent;
  let router: Router;

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
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    fixture.detectChanges();

    addToCartComponent = fixture.debugElement.query(By.css('add-to-cart'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when add to cart button is clicked', () => {

    beforeEach(() => {
      spyOn(addToCartComponent.componentInstance, 'emitAddToCart');
      spyOn(addToCartComponent.componentInstance, 'redirectToCart');

      addToCartComponent.query(By.css('button')).nativeElement.click();      
    });
    
    it('should call emitAddToCart', () => {
      expect(addToCartComponent.componentInstance.emitAddToCart).toHaveBeenCalled();
    });

    it('should call redirectToCart', () => {
      expect(addToCartComponent.componentInstance.redirectToCart).toHaveBeenCalled();
    });
  });

  describe('emitAddToCart', () => {
    
    it('should call addToCart.emit', () => {
      spyOn(addToCartComponent.componentInstance.addToCart, 'emit');

      addToCartComponent.componentInstance.emitAddToCart();

      expect(addToCartComponent.componentInstance.addToCart.emit).toHaveBeenCalled();
    });
  });

  describe('redirectToCart', () => {
    
    it('should call router.navigateByUrl', () => {
      addToCartComponent.componentInstance.redirectToCart();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
    });
  });
});
