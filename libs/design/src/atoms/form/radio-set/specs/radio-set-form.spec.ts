import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DaffRadioSetComponent } from '../radio-set.component';
import { DaffRadioComponent } from '../../radio/radio.component';

@Component ({
  template: `
  <daff-radio-set>
    <daff-radio [value]="value1"></daff-radio>
    <daff-radio [value]="value2"></daff-radio>
  </daff-radio-set>`
})
class WrapperErrorComponent {
  value1: string;
  value2: string;
}

describe('DaffRadioSetComponent | Form', () => {
  let fixture: ComponentFixture<WrapperErrorComponent>;
  let wrapper: WrapperErrorComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        DaffRadioSetComponent,
        DaffRadioComponent,
        WrapperErrorComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperErrorComponent);
    wrapper = fixture.componentInstance;
    wrapper.value1 = 'value1';
    wrapper.value2 = 'value2';
  });

  it('should throw an error when not provided a formControl', () => {
    expect(() => fixture.detectChanges()).toThrowError();
  });
});