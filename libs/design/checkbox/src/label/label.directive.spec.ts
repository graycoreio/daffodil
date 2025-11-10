import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffCheckboxSetLabelDirective } from './label.directive';

@Component({
  template: `<daff-checkbox-set-label>Label</daff-checkbox-set-label>`,
  imports: [
    DaffCheckboxSetLabelDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/checkbox | DaffCheckboxSetLabelDirective', () => {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });
});
