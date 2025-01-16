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

import { DaffPalette } from '@daffodil/design';

import { DaffNavbarComponent } from './navbar.component';

@Component({
  template: '<nav daff-navbar [color]="color" [raised]="raised"></ nav>',
  imports: [
    DaffNavbarComponent,
  ],
})
class WrapperComponent {
  color: DaffPalette;
  raised = false;
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

  describe('using the color property of navbar', () => {
    it('should set a color class on the navbar', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(de.componentInstance.color).toBeUndefined();
    });
  });

  describe('using the raised property of navbar', () => {
    it('should add a class of "daff-navbar--raised" to the host element', () => {
      wrapper.raised = true;
      fixture.detectChanges();

      expect(de.componentInstance.raisedClass).toEqual(true);
    });
  });
});
