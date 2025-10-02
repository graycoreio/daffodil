import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffRadioComponent } from '../radio/radio.component';

@Component({
  template: `
    <daff-radio name="test" value="testValue" [formControl]="radio"></daff-radio>
  `,
  imports: [
    DaffRadioComponent,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  radio = new UntypedFormControl();
}

describe('@daffodil/design/radio | Without DaffRadioControlValueAccessorDirective', () => {
  let wrapper: WrapperComponent;
  let component: DaffRadioComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
  });

  it('should throw an error', async () => {
    expect(() => {
      component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
      fixture.detectChanges();
    }).toThrowError();
  });
});
