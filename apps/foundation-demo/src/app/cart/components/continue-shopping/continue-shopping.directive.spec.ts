import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { ContinueShoppingDirective } from './continue-shopping.directive';
import { Component } from '@angular/core';

@Component({template: '<button continue-shopping></button>'})
class TestContinueShoppingDirective {}

describe('ContinueShoppingDirective', () => {
  let component: TestContinueShoppingDirective;
  let fixture: ComponentFixture<TestContinueShoppingDirective>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ TestContinueShoppingDirective, ContinueShoppingDirective ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContinueShoppingDirective);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when button is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/product-grid');
    });
  });
});
