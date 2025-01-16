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

import { DaffToastMessageDirective } from './toast-message.directive';

@Component({
  template: `
    <div daffToastMessage>Message</div>
  `,
  imports: [
    DaffToastMessageDirective,
  ],
})
class WrapperComponent {}

describe('DaffToastMessageDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffToastMessage]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffToastMessage]', () => {
    it('should add a class of `daff-toast__message` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-toast__message')).toEqual(true);
    });
  });
});
