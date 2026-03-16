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

import { DaffDocsColorStripStepDirective } from './color-strip-step.directive';

@Component({
  template: `<div daffDocsColorStripStep>10</div>`,
  imports: [
    DaffDocsColorStripStepDirective,
  ],
})
class WrapperComponent {}

describe('DaffDocsColorStripStepDirective', () => {
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
    heroBody = fixture.debugElement.query(By.css('[daffDocsColorStripStep]'));
    wrapper = heroBody.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffDocsColorStripStep]',() => {
    it('should add a class of `daff-docs-color-strip__step` to its host element', () => {
      expect(heroBody.nativeElement.classList.contains('daff-docs-color-strip__step')).toEqual(true);
    });
  });
});
