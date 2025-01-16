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
  template: `<label daffProgressBarLabel>Label</label>`,
  imports: [
    DaffProgressBarLabelDirective,
  ],
})

class WrapperComponent {}

describe('DaffProgressBarLabelDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffProgressBarLabel]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-progress-bar__label" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-progress-bar__label': true,
    }));
  });
});
