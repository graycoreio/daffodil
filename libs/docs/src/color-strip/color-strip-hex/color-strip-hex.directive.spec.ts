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

import { DaffDocsColorStripHexDirective } from './color-strip-hex.directive';

@Component({
  template: `<div daffDocsColorStripHex>#000000</div>`,
  imports: [
    DaffDocsColorStripHexDirective,
  ],
})
class WrapperComponent {}

describe('DaffDocsColorStripHexDirective', () => {
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
    heroBody = fixture.debugElement.query(By.css('[daffDocsColorStripHex]'));
    wrapper = heroBody.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffDocsColorStripHex]',() => {
    it('should add a class of `daff-docs-color-strip__hex` to its host element', () => {
      expect(heroBody.nativeElement.classList.contains('daff-docs-color-strip__hex')).toEqual(true);
    });
  });
});
