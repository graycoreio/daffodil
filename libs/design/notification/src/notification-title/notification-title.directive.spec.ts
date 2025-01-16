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

import { DaffNotificationTitleDirective } from './notification-title.directive';

@Component({
  template: `
    <h3 daffNotificationTitle>Title</h3>
  `,
  imports: [
    DaffNotificationTitleDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/notification | DaffNotificationTitleDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffNotificationTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffNotificationTitle]', () => {
    it('should add a class of `daff-notification__title` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-notification__title')).toEqual(true);
    });
  });
});
