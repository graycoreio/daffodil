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

import {
  DaffCardComponent,
  DaffCardOrientation,
} from './card.component';
import { DaffPalette } from '../../../core/colorable/public_api';

@Component ({
  template: `<daff-card [color]="color" [orientation]="orientation"></daff-card>`,
})

class WrapperComponent {
  color: DaffPalette;
  orientation: DaffCardOrientation;
}

describe('DaffCardComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffCardComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCardComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-card'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('setting the color', () => {
    it('should add the class of the defined color to the host element', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });

  it('should take orientation as an input', () => {
    wrapper.orientation = 'vertical';
    fixture.detectChanges();

    expect(component.orientation).toEqual('vertical');
  });

  describe('setting the orientation', () => {
    it('should add the class of the defined orientation to the host element', () => {
      wrapper.orientation = 'vertical';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-card--vertical')).toEqual(true);
    });

    describe('when orientation="vertical"', () => {
      it('should add a class of "daff-card--vertical" to the host element', () => {
        wrapper.orientation = 'vertical';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-card--vertical')).toBeTruthy();
      });
    });

    describe('when orientation="horizontal"', () => {
      it('should add a class of "daff-card--horizontal" to the host element', () => {
        wrapper.orientation = 'horizontal';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-card--horizontal')).toBeTruthy();
      });
    });
  });
});
