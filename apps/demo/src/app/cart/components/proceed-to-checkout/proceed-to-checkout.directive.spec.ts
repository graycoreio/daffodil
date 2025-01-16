import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProceedToCheckoutDirective } from './proceed-to-checkout.directive';

@Component({
  template: '<div demoProceedToCheckout></div>',
  standalone: false,
})
class WrapperComponent {}

describe('ProceedToCheckoutDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        WrapperComponent,
        ProceedToCheckoutDirective,
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    router = TestBed.inject(Router);
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
