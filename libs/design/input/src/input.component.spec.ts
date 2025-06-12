import { Component } from '@angular/core';
import {
  waitForAsync,
  TestBed,
} from '@angular/core/testing';

import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  template: `<input daff-input>`,
  imports: [
    DaffInputComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design | DaffInputComponent | Default', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(() => TestBed.createComponent(WrapperComponent)).toThrowError('DaffInputComponent needs to be used with the DaffFormFieldComponent.');
  });
});
