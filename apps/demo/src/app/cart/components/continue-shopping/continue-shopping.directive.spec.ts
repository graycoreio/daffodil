import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { ContinueShoppingDirective } from './continue-shopping.directive';
import { Component } from '@angular/core';

@Component({template: '<button demoContinueShopping></button>'})
class WrapperComponent {}

describe('ContinueShoppingDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ WrapperComponent, ContinueShoppingDirective ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when [demo-continue-shopping] is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('[demo-continue-shopping]')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/product-grid');
    });
  });
});
