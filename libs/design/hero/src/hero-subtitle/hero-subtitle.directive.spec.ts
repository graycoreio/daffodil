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

import { DaffHeroSubtitleDirective } from './hero-subtitle.directive';

@Component({
  template: `
    <h1 daffHeroSubtitle>Lorem Ipsum</h1>
  `,
  imports: [
    DaffHeroSubtitleDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/hero | DaffHeroSubtitleDirective', () => {
  let wrapper: WrapperComponent;
  let heroSubtitle: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

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
    heroSubtitle = fixture.debugElement.query(By.css('[daffHeroSubtitle]'));
    wrapper = heroSubtitle.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffHeroSubtitle]',() => {
    it('should add a class of `daff-hero__subtitle` to its host element', () => {
      expect(heroSubtitle.nativeElement.classList.contains('daff-hero__subtitle')).toEqual(true);
    });
  });
});
