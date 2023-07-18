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
  template: `<div daffProgressBarLabel></div>`,
})

class WrapperComponent {}

describe('DaffProgressBarLabelDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffProgressBarLabelDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffProgressBar]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffProgressBarLabel]', () => {
    it('should add a class of "daff-progres-bar__label" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-progress-bar__label': true,
      }));
    });
  });
});
