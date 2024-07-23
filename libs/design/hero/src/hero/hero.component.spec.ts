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

import { DaffHeroComponent } from './hero.component';

@Component({
  template: `<daff-hero [color]="color" [textAlignment]="textAlignment" [compact]="compact"></daff-hero>`,
})
class WrapperComponent {
  color: DaffPalette;
  textAlignment: DaffTextAlignment;
  compact: boolean;
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

    expect(de.nativeElement.classList.contains('daff-left')).toEqual(true);
  });

  it('should take compact as an input', () => {
    wrapper.compact = true;
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-compact')).toEqual(true);
  });
});
