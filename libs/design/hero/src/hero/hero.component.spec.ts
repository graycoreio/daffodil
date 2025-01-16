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
  imports: [
    DaffHeroComponent,
  ],
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
      imports: [
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

  it('should take color as an input', () => {
    wrapper.color = 'primary';
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
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
