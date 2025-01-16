import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffHeroTaglineDirective } from './hero-tagline.directive';

@Component({
  template: `
    <h1 daffHeroTagline>Lorem Ipsum</h1>
  `,
  imports: [
    DaffHeroTaglineDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/hero | DaffHeroTaglineDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
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
    de = fixture.debugElement.query(By.css('[daffHeroTagline]'));
    wrapper = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffHeroTagline]',() => {
    it('should add a class of `daff-hero__tagline` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-hero__tagline')).toEqual(true);
    });
  });
});
