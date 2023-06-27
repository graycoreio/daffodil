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

import { DaffStatus } from '@daffodil/design';

import {
  DaffNotificationComponent,
  DaffNotificationMode,
} from './notification.component';

@Component ({
  template: `<daff-notification [status]="status" [mode]="modeValue"></daff-notification>`,
})

class WrapperComponent {
  status: DaffStatus;
  modeValue: DaffNotificationMode;
}

describe('DaffNotificationComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffNotificationComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffNotificationComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-notification'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-notification>', () => {
    it('should add a class of "daff-notification" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-notification': true,
      }));
    });
  });

  describe('using the status property of a notification', () => {
    it('should not set a default status', () => {
      expect(component.status).toBeFalsy();
    });

    it('should add the class of the defined status to the host element', () => {
      wrapper.status = 'warn';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-warn')).toEqual(true);
    });
  });

  describe('setting the mode of a notification', () => {
    it('should not set the default mode to `toast`', () => {
      expect(component.mode).toEqual('toast');
    });

    describe('when mode="inline"', () => {
      it('should add a class of "inline" to the host element', () => {
        wrapper.modeValue = 'inline';
        fixture.detectChanges();

        expect(de.classes['daff-notification.inline']).toBeTrue();
      });
    });
  });
});
