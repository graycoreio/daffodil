import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  Router,
  provideRouter,
} from '@angular/router';

import { DemoHeaderComponent } from './header.component';

describe('DemoHeaderComponent', () => {
  let component: DemoHeaderComponent;
  let fixture: ComponentFixture<DemoHeaderComponent>;
  let router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DemoHeaderComponent,
      ],
      providers: [
        provideRouter([]),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHeaderComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when cart icon is clicked', () => {

    it('should call router.navigateByUrl', () => {
      spyOn(router, 'navigateByUrl');
      fixture.debugElement.query(By.css('.demo-header__right-nav')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
    });
  });
});
