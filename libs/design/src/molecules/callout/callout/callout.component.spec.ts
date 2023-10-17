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
  DaffCalloutComponent,
  DaffCalloutLayout,
  DaffCalloutSize,
} from './callout.component';
import { DaffPalette } from '../../../core/colorable/public_api';
import { DaffTextAlignment } from '../../../core/text-alignable/text-alignable';

@Component ({
  template: `
    <daff-callout [color]="color" [layout]="layout" [size]="size" [textAlignment]="textAlignment" [compact]="compact"></daff-callout>
  `,
})

class WrapperComponent {
  color: DaffPalette;
  layout: DaffCalloutLayout;
  size: DaffCalloutSize;
  textAlignment: DaffTextAlignment;
  compact = false;
}

describe('DaffCalloutComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffCalloutComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffCalloutComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-callout'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-callout>', () => {
    it('should add a class of "daff-callout" to the host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout')).toBeTruthy();
    });
  });

  describe('using a colored variant of a callout',() => {
    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });

    it('should set a color class on the callout', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });
  });

  describe('setting the layout', () => {
    describe('when layout="centered"', () => {
      it('should add a class of "daff-callout--centered" to the host element', () => {
        wrapper.layout = 'centered';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-callout--centered')).toBeTruthy();
      });
    });

    it('should not set a default layout', () => {
      expect(component.layout).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-callout--centered')).toBeFalsy();
    });
  });

  describe('setting the size', () => {
    describe('when size="compact"', () => {
      it('should add a class of "daff-callout--compact" to the host element', () => {
        wrapper.size = 'compact';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-callout--compact')).toBeTruthy();
      });
    });

    it('should not set a default size', () => {
      expect(component.size).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-callout--compact')).toBeFalsy();
    });
  });

  it('should take textAlignment as an input', () => {
    wrapper.textAlignment = 'left';
    fixture.detectChanges();

    expect(component.textAlignment).toEqual('left');
  });

  describe('setting the textAlignment', () => {
    it('should add the class of the defined textAlignment to the host element', () => {
      wrapper.textAlignment = 'left';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-left')).toEqual(true);
    });

    it('should set the default textAlignment to left', () => {
      expect(component.textAlignment).toEqual('left');
    });

    describe('when textAlignment="left"', () => {
      it('should add a class of "daff-left" to the host element', () => {
        wrapper.textAlignment = 'left';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-left')).toBeTruthy();
      });
    });

    describe('when textAlignment="center"', () => {
      it('should add a class of "daff-center" to the host element', () => {
        wrapper.textAlignment = 'center';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-center')).toBeTruthy();
      });
    });

    describe('when textAlignment="right"', () => {
      it('should add a class of "daff-right" to the host element', () => {
        wrapper.textAlignment = 'right';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-right')).toBeTruthy();
      });
    });
  });

  it('should take compact as an input', () => {
    wrapper.compact = true;
    fixture.detectChanges();

    expect(component.compact).toEqual(true);
  });
});
