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

import { DaffNotificationActionsDirective } from './notification-actions.directive';

@Component({
  template: `
    <h3 daffNotificationActions>Lorem Ipsum</h3>
  `,
  imports: [
    DaffNotificationActionsDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/notification | DaffNotificationActionsDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffNotificationActions]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffNotificationActions]', () => {
    it('should add a class of `daff-notification__actions` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-notification__actions')).toEqual(true);
    });
  });
});
