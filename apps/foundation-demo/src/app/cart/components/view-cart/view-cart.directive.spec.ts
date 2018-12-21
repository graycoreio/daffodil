import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCartDirective } from './view-cart.directive';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({template: '<button demo-view-cart></button>'})
class TestViewCartDirective {}

describe('ViewCartDirective', () => {
  let component: TestViewCartDirective;
  let fixture: ComponentFixture<TestViewCartDirective>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ViewCartDirective, 
        TestViewCartDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture = TestBed.createComponent(TestViewCartDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when button is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
    });
  });
});
