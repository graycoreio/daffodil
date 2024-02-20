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
  DaffPalette,
  DaffTextAlignment,
} from '@daffodil/design';

import {
  DaffHeroComponent,
  DaffHeroLayout,
  DaffHeroSize,
} from './hero.component';

@Component({
  template: `<daff-hero [layout]="layout" [size]="size" [color]="color" [textAlignment]="textAlignment" [compact]="compact"></daff-hero>`,
})
class WrapperComponent {
  layout: DaffHeroLayout;
  size: DaffHeroSize;
  color: DaffPalette;
  textAlignment: DaffTextAlignment;
  compact = false;
}

describe('@daffodil/design/hero | DaffHeroComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffHeroComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffHeroComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-hero'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-hero>', () => {
    it('should add a class of "daff-hero" to the host element', () => {
      expect(de.nativeElement.classList.contains('daff-hero')).toBeTruthy();
    });
  });

  describe('setting the layout', () => {
    it('should not set a default layout', () => {
      expect(component.layout).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-hero--centered')).toBeFalsy();
    });

    describe('when layout="centered"', () => {
      it('should add a class of "daff-hero--centered" to the host element', () => {
        wrapper.layout = 'centered';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-hero--centered')).toBeTruthy();
      });
    });
  });

  describe('setting the size', () => {
    it('should not set a default size', () => {
      expect(component.layout).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-hero--small')).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-hero--compact')).toBeFalsy();
    });

    describe('when size="small"', () => {
      it('should add a class of "daff-hero--compact" to the host element', () => {
        wrapper.size = 'small';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-hero--compact')).toBeTruthy();
      });
    });

    describe('when size="compact"', () => {
      it('should add a class of "daff-hero--compact" to the host element', () => {
        wrapper.size = 'compact';
        fixture.detectChanges();
        expect(de.nativeElement.classList.contains('daff-hero--compact')).toBeTruthy();
      });
    });
  });

  describe('using a color variant of a hero', () => {
    it('should set a color class on the hero', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
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
