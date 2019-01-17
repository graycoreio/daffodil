import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { ProceedToCheckoutComponent } from './proceed-to-checkout.component';
import { Component } from '@angular/core';

@Component({template: '<button demo-proceed-to-checkout></button>'})
class WrapperComponent {}

describe('ProceedToCheckoutComponent', () => {
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
        ProceedToCheckoutComponent
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

  it('should display a proceed to checkout button', () => {
    expect(fixture.debugElement.query(By.css('.button'))).toBeDefined();
  });

  describe('when button is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/checkout');
    });
  });
});