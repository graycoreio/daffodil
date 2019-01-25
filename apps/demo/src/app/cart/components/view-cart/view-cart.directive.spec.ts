import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCartDirective } from './view-cart.directive';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({template: '<div demoViewCart></div>'})
class WrapperComponent {}

describe('ViewCartDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ViewCartDirective, 
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when [demoViewCart] is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('[demoViewCart]')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
    });
  });
});
