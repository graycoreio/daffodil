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

import { DaffPalette } from '../../core/colorable/colorable';
import { DaffDecorativeIconComponent } from './decorative-icon.component';

@Component({
  template: `<daff-decorative-icon [color]="color"></daff-decorative-icon>`,
})
class WrapperComponent {
  color: DaffPalette;
}

describe('DaffDecorativeIconComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffDecorativeIconComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffDecorativeIconComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-decorative-icon'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-decorative-icon>', () => {
    it('should add a class of "daff-decorative-icon" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-decorative-icon': true,
      }));
    });

    it('should set aria-hidden to true', () => {
      expect(component.ariaHidden).toBe('true');
    });
  });

  describe('setting the color', () => {
    it('should not set a default color', () => {
      de = fixture.debugElement.query(By.css('daff-decorative-icon'));
      expect(de.nativeElement.classList.toString()).toEqual('daff-decorative-icon');
    });

    it('should add the color class on the host element for the defined color', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });
});
