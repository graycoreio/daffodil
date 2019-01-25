import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { ProceedToCheckoutDirective } from './proceed-to-checkout.directive';
import { Component } from '@angular/core';

@Component({template: '<div demoProceedToCheckout></div>'})
class WrapperComponent {}

describe('ProceedToCheckoutDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WrapperComponent,
        ProceedToCheckoutDirective
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    router = TestBed.get(Router);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();

    spyOn(router, 'navigateByUrl');
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when [demoProceedToCheckout] is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('[demoProceedToCheckout]')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/checkout');
    });
  });
});