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

import { DaffNotificationSubtitleDirective } from './notification-subtitle.directive';

@Component({
  template: `
    <h3 daffNotificationSubtitle>Subtitle</h3>
  `,
})
class WrapperComponent {}

describe('DaffNotificationSubtitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffNotificationSubtitleDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffNotificationSubtitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffNotificationSubtitle]', () => {
    it('should add a class of `daff-notification__subtitle` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-notification__subtitle')).toEqual(true);
    });
  });
});
