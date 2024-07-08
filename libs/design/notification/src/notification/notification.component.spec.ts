import {
  Component,
  ContentChild,
  DebugElement,
  Input,
  ViewChild,
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
  DaffNotificationOrientation,
} from './notification.component';
import { DaffNotificationActionsDirective } from '../notification-actions/notification-actions.directive';

@Component ({
  template: `
    <daff-notification
      [status]="status"
      [orientation]="orientation"
      [dismissible]="dismissible"
      (closeNotification)="closeNotificationFunction()">
    </daff-notification>
  `,
})

class WrapperComponent {
  status: DaffStatus;
  orientation: DaffNotificationOrientation = 'vertical';
  dismissible = false;
  closeNotificationFunction = () => {};
}

describe('@daffodil/design/notification | DaffNotificationComponent', () => {
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

  describe('the dismissible property', () => {
    it('should take dismissible as an input', () => {
      expect(component.dismissible).toEqual(wrapper.dismissible);
    });

    it('should set dismissible to false by default', () => {
      expect(component.dismissible).toBeFalse();
    });

    describe('when dismissible is set to false', () => {
      it('should not add a class of "dismissible" to the host element', () => {
        expect(de.classes['dismissible']).toBeUndefined();
      });

      it('should not show the close icon button', () => {
        expect(fixture.debugElement.query(By.css('.daff-notification__close-icon'))).toBeFalsy();
      });
    });

    describe('when dismissible is set to true', () => {
      beforeEach(() => {
        wrapper.dismissible = true;
        fixture.detectChanges();
      });

      it('should add a class of "dismissible" to the host element', () => {
        expect(de.classes['dismissible']).toBeTrue();
      });

      it('should show the close icon button', () => {
        expect(fixture.debugElement.query(By.css('.daff-notification__close-icon'))).toBeTruthy();
      });
    });
  });

  it('should set the tabindex to 0', () => {
    expect(de.attributes['tabindex']).toEqual('0');
  });

  describe('setting the role', () => {
    it('should set role to status', () => {
      expect(component.role).toBe('status');
    });

    it('should set role to alert if status is warn', () => {
      wrapper.status = 'warn';
      fixture.detectChanges();

      expect(component.role).toBe('alert');
    });

    it('should set role to alert if status is danger', () => {
      wrapper.status = 'danger';
      fixture.detectChanges();

      expect(component.role).toBe('alert');
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

  describe('setting the orientation of a notification', () => {
    it('should take orientation as an input', () => {
      expect(component.orientation).toEqual(wrapper.orientation);
    });

    it('should set the default orientation to `vertical`', () => {
      expect(component.orientation).toEqual('vertical');
    });

    describe('when orientation="horizontal"', () => {
      it('should add a class of "horizontal" to the host element', () => {
        wrapper.orientation = 'horizontal';
        fixture.detectChanges();

        expect(de.classes['horizontal']).toBeTrue();
      });
    });

    describe('when orientation="vertical"', () => {
      it('should add a class of "vertical" to the host element', () => {
        wrapper.orientation = 'vertical';
        fixture.detectChanges();

        expect(de.classes['vertical']).toBeTrue();
      });
    });
  });

  describe('when the close icon button is clicked', () => {
    it('should emit closeNotification', () => {
      wrapper.dismissible = true;
      fixture.detectChanges();

      spyOn(component.closeNotification, 'emit');

      fixture.debugElement.query(By.css('.daff-notification__close-icon')).nativeElement.click();

      expect(component.closeNotification.emit).toHaveBeenCalledWith();
    });
  });
});

@Component ({
  template: `
    <daff-notification>
      <div daffNotificationActions></div>
    </daff-notification>
  `,
})

class ActionsWrapperComponent {}

describe('@daffodil/design/notification | DaffNotificationComponent | With Actions', () => {
  let fixture: ComponentFixture<ActionsWrapperComponent>;
  let de: DebugElement;
  let wrapper: ActionsWrapperComponent;
  let component: DaffNotificationComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffNotificationComponent,
        ActionsWrapperComponent,
        DaffNotificationActionsDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsWrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-notification'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should set role to alert when there are actions', () => {
    expect(component.role).toBe('alert');
  });
});
