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

import { DaffToastSubtitleDirective } from './toast-subtitle.directive';

@Component({
  template: `
    <h3 daffToastSubtitle>Subtitle</h3>
  `,
})
class WrapperComponent {}

describe('DaffToastSubtitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffToastSubtitleDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffToastSubtitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffToastSubtitle]', () => {
    it('should add a class of `daff-toast__subtitle` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-toast__subtitle')).toEqual(true);
    });
  });
});
