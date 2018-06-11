import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueShoppingComponent } from './continue-shopping.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('ContinueShoppingComponent', () => {
  let component: ContinueShoppingComponent;
  let fixture: ComponentFixture<ContinueShoppingComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ContinueShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueShoppingComponent);
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
