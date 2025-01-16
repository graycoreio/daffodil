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

import { DaffHeroIconDirective } from './hero-icon.directive';

@Component({
  template: `<div daffHeroIcon>Hero Icon</div>`,
  imports: [
    DaffHeroIconDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/hero | DaffHeroIconDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffHeroIcon]'));
    wrapper = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffHeroIcon]',() => {
    it('should add a class of `daff-hero__icon` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-hero__icon')).toEqual(true);
    });
  });
});
