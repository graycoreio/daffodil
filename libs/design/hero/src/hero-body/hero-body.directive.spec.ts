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

import { DaffHeroBodyDirective } from './hero-body.directive';

@Component({
  template: `<h1 daffHeroBody>Hero Body</h1>`,
  imports: [
    DaffHeroBodyDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/hero | DaffHeroBodyDirective', () => {
  let wrapper: WrapperComponent;
  let heroBody: DebugElement;
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
    heroBody = fixture.debugElement.query(By.css('[daffHeroBody]'));
    wrapper = heroBody.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffHeroBody]',() => {
    it('should add a class of `daff-hero__body` to its host element', () => {
      expect(heroBody.nativeElement.classList.contains('daff-hero__body')).toEqual(true);
    });
  });
});
