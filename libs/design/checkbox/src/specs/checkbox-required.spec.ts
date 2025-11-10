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
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DaffCheckboxComponent,
  DAFF_CHECKBOX_COMPONENTS,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox [value]="value" [name]="name" [required]="requiredValue">
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
  requiredValue: boolean;
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

  it('should set required to true when checkbox is required', () => {
    wrapper.requiredValue = true;
    fixture.detectChanges();

    expect(component.required).toBeTrue();
  });

  it('should set required to false when checkbox is not required', () => {
    wrapper.requiredValue = false;
    fixture.detectChanges();

    expect(component.required).toBe(false);
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
  terms = new UntypedFormControl('', Validators.required);
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

  it('should set required to true when checkbox is required', () => {
    expect(component.required).toBeTrue();
  });

  it('should set required to false when checkbox is not required', () => {
    wrapper.terms.setValidators([]);
    fixture.detectChanges();

    expect(component.required).toBe(false);
  });
});
