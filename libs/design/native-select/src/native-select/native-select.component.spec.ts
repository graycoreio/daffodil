import { Component } from '@angular/core';
import {
  waitForAsync,
  TestBed,
} from '@angular/core/testing';

import { DaffNativeSelectComponent } from '@daffodil/design/native-select';

@Component({
  template: `<select daff-native-select></select>`,
  imports: [
    DaffNativeSelectComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design | DaffNativeSelectComponent | Default', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(() => TestBed.createComponent(WrapperComponent)).toThrowError(
      'DaffNativeSelectComponent needs to be used with the DaffFormFieldComponent.',
    );
  });
});
