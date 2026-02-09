import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffNavbarComponent } from '@daffodil/design/navbar';

@Component({
  template: '<nav daff-navbar [elevated]="elevated" [blurred]="blurred"></ nav>',
  imports: [
    DaffNavbarComponent,
  ],
})
class WrapperComponent {
  elevated = false;
  blurred = false;
}

describe('@daffodil/design/navbar | DaffNavbarComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('nav[daff-navbar]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-navbar" to the host element', () => {
    expect(de.nativeElement.classList.contains('daff-navbar')).toBeTruthy();
  });

  it('should add a class of "elevated" to the host element when elevated is true', () => {
    wrapper.elevated = true;
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('elevated')).toEqual(true);
  });

  it('should add a class of "blurred" to the host element when blurred is true', () => {
    wrapper.blurred = true;
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('blurred')).toEqual(true);
  });
});
