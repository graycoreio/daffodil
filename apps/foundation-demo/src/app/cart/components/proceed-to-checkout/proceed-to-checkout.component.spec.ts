import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { ProceedToCheckoutDirective } from './proceed-to-checkout.directive';
import { Component } from '@angular/core';

@Component({template: '<button proceed-to-checkout></button>'})
class TestProceedToCheckoutDirective {}
 describe('ProceedToCheckoutDirective', () => {
  let component: TestProceedToCheckoutDirective;
  let fixture: ComponentFixture<TestProceedToCheckoutDirective>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestProceedToCheckoutDirective,
        ProceedToCheckoutDirective
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProceedToCheckoutDirective);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

    spyOn(router, 'navigateByUrl');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a proceed to checkout button', () => {
    expect(fixture.debugElement.query(By.css('.button'))).toBeDefined();
  });

  fdescribe('when button is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/checkout');
    });
  });
});
