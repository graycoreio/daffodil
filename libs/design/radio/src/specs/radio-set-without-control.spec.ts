import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DAFF_RADIO_COMPONENTS } from '@daffodil/design/radio';

@Component({
  template: `
    <daff-radio-set value="apple" name="fruits">
      <daff-radio value="apple">Apple</daff-radio>
      <daff-radio value="grape">Grape</daff-radio>
      <daff-radio value="peach">Peach</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/radio | DaffRadioSetComponent Without Form Control', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;

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

  it('should set the value of the radio set to be checked', () => {
    const radioComponent = fixture.debugElement.queryAll(By.css('daff-radio'))[0].componentInstance;

    expect(radioComponent.checked()).toBe(true);
  });
});

@Component({
  template: `
    <daff-radio-set [disabled]="true" name="fruits">
      <daff-radio value="apple">Apple</daff-radio>
      <daff-radio value="grape">Grape</daff-radio>
      <daff-radio value="peach">Peach</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
  ],
})
class DisabledWrapperComponent {}

describe('@daffodil/design/radio | DaffRadioSetComponent Without Form Control | Disabled State', () => {
  let fixture: ComponentFixture<DisabledWrapperComponent>;
  let wrapper: DisabledWrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DisabledWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should disable all child radios when the radio set is disabled', () => {
    fixture.debugElement.queryAll(By.css('daff-radio')).forEach(de => {
      expect(de.componentInstance.disabled()).toBeTrue();
    });
  });

  it('should set the disabled attribute on all child radio inputs', () => {
    fixture.debugElement.queryAll(By.css('input[type="radio"]')).forEach(de => {
      expect(de.nativeElement.disabled).toBeTrue();
    });
  });
});
