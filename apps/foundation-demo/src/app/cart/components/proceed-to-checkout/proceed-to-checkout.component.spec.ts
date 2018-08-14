import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedToCheckoutComponent } from './proceed-to-checkout.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ProceedToCheckoutComponent', () => {
  let component: ProceedToCheckoutComponent;
  let fixture: ComponentFixture<ProceedToCheckoutComponent>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ProceedToCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedToCheckoutComponent);
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

  describe('when button is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/checkout');
    });
  });
});
