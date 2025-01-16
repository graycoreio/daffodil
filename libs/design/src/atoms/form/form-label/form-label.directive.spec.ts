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

import { DaffFormLabelDirective } from './form-label.directive';

@Component({
  template: `<div daffFormLabel>Label</div>`,
  standalone: false,
})

class WrapperComponent {}

describe('@daffodil/design | DaffFormLabelDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffFormLabelDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffFormLabel]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffFormLabel]', () => {
    it('should add a class of "daff-form-label" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-form-label': true,
      }));
    });
  });
});
