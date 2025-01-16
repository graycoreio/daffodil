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

import { DaffToastTitleDirective } from './toast-title.directive';

@Component({
  template: `
    <h3 daffToastTitle>Title</h3>
  `,
  imports: [
    DaffToastTitleDirective,
  ],
})
class WrapperComponent {}

describe('DaffToastTitleDirective', () => {
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
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffToastTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffToastTitle]', () => {
    it('should add a class of `daff-toast__title` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-toast__title')).toEqual(true);
    });
  });
});
