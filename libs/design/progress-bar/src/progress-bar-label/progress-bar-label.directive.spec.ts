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

import { DaffProgressBarLabelDirective } from './progress-bar-label.directive';

@Component({
  template: `<daff-progress-bar-label>Label</daff-progress-bar-label>`,
  imports: [
    DaffProgressBarLabelDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/progress-bar | DaffProgressBarLabelDirective', () => {
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
    de = fixture.debugElement.query(By.css('daff-progress-bar-label'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });
});
