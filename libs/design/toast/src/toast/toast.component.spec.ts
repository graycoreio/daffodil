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

import { DaffStatus } from '@daffodil/design';

import { DaffToastComponent } from './toast.component';
import { DaffToast } from '../interfaces/toast';

@Component ({
  template: `
    <daff-toast
      [status]="status"
      [toast]="toast"
    ></daff-toast>
  `,
  imports: [
    DaffToastComponent,
  ],
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
      imports: [
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

  it('should take status as an input', () => {
    wrapper.status = 'warn';
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-warn')).toEqual(true);
  });
});
