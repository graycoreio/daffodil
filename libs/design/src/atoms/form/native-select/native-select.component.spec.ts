import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffNativeSelectComponent } from './native-select.component';

@Component({
  template: `
    <select daff-native-select [formSubmitted]="formSubmittedValue" [formControl]="formControlValue">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  `,
  standalone: false,
})

class WrapperComponent {
  formSubmittedValue: boolean;
  formControlValue: UntypedFormControl;
}

describe('@daffodil/design | DaffNativeSelectComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let component: DaffNativeSelectComponent;
  let componentDE: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        DaffNativeSelectComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new UntypedFormControl();
    stubFormSubmitted = false;

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formControlValue = stubFormControl;
    wrapper.formSubmittedValue = stubFormSubmitted;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('select[daff-native-select]'));
    component = componentDE.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should set the control type to `native-select', () =>{
    expect(component.controlType).toEqual('native-select');
  });

  it('should set `daff-native-select` on host element', () => {
    expect(fixture.debugElement.query(By.css('[daff-native-select]')).nativeElement.classList.contains('daff-native-select')).toEqual(true);
  });

  it('should be able to take formSubmitted as input', () => {
    expect(component.formSubmitted).toEqual(stubFormSubmitted);
  });

  describe('onFocus', () => {
    it('should call focus on the native element', () => {
      spyOn(componentDE.nativeElement, 'focus');

      component.onFocus();

      expect(componentDE.nativeElement.focus).toHaveBeenCalledWith();
    });
  });

  describe('when [daff-native-select] is focused', () => {
    it('should set focused to true', () => {
      componentDE.triggerEventHandler('focus', {});

      expect(component.focused).toBe(true);
    });
  });

  describe('when [daff-native-select] is blurred', () => {
    it('should set focused to false', () => {
      componentDE.triggerEventHandler('blur', {});

      expect(component.focused).toBe(false);
    });
  });
});
