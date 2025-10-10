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

import { DaffCheckboxComponent } from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox name="test" value="testValue" [formControl]="checkbox"></daff-checkbox>
  `,
  imports: [
    DaffCheckboxComponent,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  checkbox = new UntypedFormControl();
}

describe('@daffodil/design/checkbox | Without DaffCheckboxControlValueAccessorDirective', () => {
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;
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
      component = fixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
      fixture.detectChanges();
    }).toThrowError();
  });
});
