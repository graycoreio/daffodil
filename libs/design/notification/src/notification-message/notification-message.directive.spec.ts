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

import { DaffNotificationMessageDirective } from './notification-message.directive';

@Component({
  template: `
    <h3 daffNotificationMessage>Lorem Ipsum</h3>
  `,
  imports: [
    DaffNotificationMessageDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/notification | DaffNotificationMessageDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffNotificationMessage]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffNotificationMessage]', () => {
    it('should add a class of `daff-notification__message` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-notification__message')).toEqual(true);
    });
  });
});
