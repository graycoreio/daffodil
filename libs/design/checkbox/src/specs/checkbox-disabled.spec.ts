import {
  Component,
  DebugElement,
} from '@angular/core';
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

import {
  DaffCheckboxComponent,
  DAFF_CHECKBOX_COMPONENTS,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox [value]="value" [name]="name" [disabled]="disabledValue">
      Terms and conditions
    </daff-checkbox>
  `,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
  ],
})
class BasicWrapperComponent {
  value: string;
  name: string;
  disabledValue: boolean;
}

describe('@daffodil/design/checkbox | DaffCheckboxComponent Without Reactive Forms', () => {
  let wrapper: BasicWrapperComponent;
  let component: DaffCheckboxComponent;
  let fixture: ComponentFixture<BasicWrapperComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCheckboxComponent,
        BasicWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-checkbox'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set disabled to true when checkbox is disabled', () => {
    wrapper.disabledValue = true;
    fixture.detectChanges();

    expect(component.disabled).toBeTrue();
  });

  it('should set disabled to false when checkbox is not disabled', () => {
    wrapper.disabledValue = false;
    fixture.detectChanges();

    expect(component.disabled).toBe(false);
  });
});

@Component({
  template: `
    <daff-checkbox [formControl]="terms">
      Terms and conditions
    </daff-checkbox>
  `,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class ReactiveFormsWrapperComponent {
  terms = new UntypedFormControl({ value: '', disabled: true });
}

describe('@daffodil/design/checkbox | DaffCheckboxComponent With Reactive Forms', () => {
  let wrapper: ReactiveFormsWrapperComponent;
  let component: DaffCheckboxComponent;
  let fixture: ComponentFixture<ReactiveFormsWrapperComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffCheckboxComponent,
        ReactiveFormsWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsWrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-checkbox'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set disabled to true when checkbox is disabled', () => {
    expect(component.disabled).toBeTrue();
  });

  it('should set disabled to false when checkbox is not disabled', () => {
    wrapper.terms.enable();
    fixture.detectChanges();

    expect(component.disabled).toBe(false);
  });
});
