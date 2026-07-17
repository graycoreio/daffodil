import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffImageComponent } from '@daffodil/design/image';

@Component({
  template: `<daff-image></daff-image>`,
  imports: [
    DaffImageComponent,
  ],
})

class WrapperComponent {
  src: string;
  alt: string;
  width: number;
  height: number;
}

describe('@daffodil/design/image | DaffImageComponent | Props Validation', () => {
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
  });

  it('should throw an error when any of src, alt, width, and height are not defined', () => {
    expect(() => fixture.detectChanges()).toThrowError();
  });
});
