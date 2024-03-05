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
import { of } from 'rxjs';

import {
  DaffStatus,
  DaffStatusEnum,
} from '@daffodil/design';
import { DaffToast } from '@daffodil/design/toast';

import { DaffToastComponent } from './toast.component';

@Component ({
  template: `
    <daff-toast
      [status]="status"
      [toast]="toast"
    ></daff-toast>
  `,
})

class WrapperComponent {
  status: DaffStatus;
  toast: DaffToast;
}

describe('DaffToastComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffToastComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffToastComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.toast = {
      title: 'title',
      dismiss: () => {},
      dismissalStream: of(),
    };
    de = fixture.debugElement.query(By.css('daff-toast'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-toast>', () => {
    it('should add a class of "daff-toast" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-toast': true,
      }));
    });
  });

  describe('using the status property of a toast', () => {
    it('should not set a default status', () => {
      expect(component.status).toBeFalsy();
    });

    it('should add the class of the defined status to the host element', () => {
      wrapper.status = DaffStatusEnum.Warn;
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-warn')).toEqual(true);
    });
  });

  it('should have a role of status', () => {
    expect(component.role).toBe('status');
  });
});
