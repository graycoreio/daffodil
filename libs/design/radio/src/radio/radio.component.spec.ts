import { Component } from '@angular/core';
import {
  waitForAsync,
  TestBed,
} from '@angular/core/testing';

import { DaffRadioComponent } from '@daffodil/design/radio';

import { DaffRadioMissingSetMessage } from './radio.component';

@Component({
  template: `
      <daff-radio value="apple">Apple</daff-radio>
      <daff-radio value="grape">Grape</daff-radio>
      <daff-radio value="peach">Peach</daff-radio>
  `,
  imports: [
    DaffRadioComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/radio | DaffRadioComponent Without DaffRadioSetComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(() => TestBed.createComponent(WrapperComponent)).toThrowError(DaffRadioMissingSetMessage);
  });
});
