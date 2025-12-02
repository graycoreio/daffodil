import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DaffRadioComponent,
  DAFF_RADIO_COMPONENTS,
} from '@daffodil/design/radio';

@Component({
  template: `
    <daff-radio-set [formControl]="fruits" name="fruits">
      <daff-radio value="apple">Apple</daff-radio>
      <daff-radio value="grape">Grape</daff-radio>
      <daff-radio value="peach">Peach</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent {
  fruits = new UntypedFormControl();
}
describe('@daffodil/design/radio | DaffRadioComponent With DaffRadioSetComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let component: DaffRadioComponent;

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
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should get its name from the parent <daff-radio-set>', () => {
    expect(component._name()).toEqual('fruits');
  });

  it('should get its tabIndex from the parent <daff-radio-set>', () => {
    expect(component._tabIndex()).toBe(0);
  });

  it('should be disabled when the parent <daff-radio-set> is disabled', () => {
    wrapper.fruits.disable();
    fixture.detectChanges();
    expect(component.disabled()).toBe(true);
  });
});

@Component({
  template: `
    <daff-radio-set [formControl]="fruits" name="fruits" [tabIndex]="-1">
      <daff-radio value="apple">Apple</daff-radio>
      <daff-radio value="peach">Peach</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class CustomTabIndexWrapperComponent {
  fruits = new UntypedFormControl();
}

describe('@daffodil/design/radio | DaffRadioComponent With DaffRadioSetComponent | Custom TabIndex', () => {
  let fixture: ComponentFixture<CustomTabIndexWrapperComponent>;
  let wrapper: CustomTabIndexWrapperComponent;
  let component: DaffRadioComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomTabIndexWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTabIndexWrapperComponent);
    wrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });

  it('should get the tabIndex from the parent <daff-radio-set>', () => {
    expect(component._tabIndex()).toBe(-1);
  });

  it('should apply the custom tabIndex to the input element', () => {
    const inputElement = fixture.debugElement.query(By.css('input[type="radio"]')).nativeElement;
    expect(inputElement.tabIndex).toBe(-1);
  });
});

@Component({
  template: `
    <daff-radio-set [formControl]="fruits" name="fruits" value="apple">
      <daff-radio value="apple">Apple</daff-radio>
      <daff-radio value="peach">Peach</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class ValueWrapperComponent {
  fruits = new UntypedFormControl();
}

describe('@daffodil/design/radio | DaffRadioComponent With DaffRadioSetComponent | Value', () => {
  let fixture: ComponentFixture<ValueWrapperComponent>;
  let wrapper: ValueWrapperComponent;
  let component: DaffRadioComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ValueWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueWrapperComponent);
    wrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });

  it('should get the value from the parent <daff-radio-set>', () => {
    expect(component.value()).toBe('apple');
  });
});
