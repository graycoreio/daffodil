import { CommonModule } from '@angular/common';
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
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  of,
  Subject,
} from 'rxjs';

import { DaffQuantityInputComponent } from './quantity-input.component';
import {
  DaffInputModule,
  DaffInputComponent,
} from '../../input/public_api';

@Component({
  template: `
    <daff-quantity-input
      [min]="minValue"
      [max]="maxValue"
    ></daff-quantity-input>
  `,
  standalone: false,
})
class WrapperComponent {
  minValue = 0;
  maxValue = 50;
}

describe('@daffodil/design | DaffQuantityInputComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffQuantityInputComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let inputComponent: DaffInputComponent;

  let control;

  beforeEach(waitForAsync(() => {
    control = {
      statusChanges: new Subject(),
      disabled: false,
      control: new UntypedFormControl(1),
      value: null,
    };

    TestBed.configureTestingModule({
      declarations: [
        DaffQuantityInputComponent,
        WrapperComponent,
      ],
      imports: [
        CommonModule,
        DaffInputModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: NgControl,
          useValue: control,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-quantity-input')).componentInstance;
    inputComponent = fixture.debugElement.query(By.css('[daff-input]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the form control is disabled', () => {
    beforeEach(() => {
      control.disabled = true;
      control.statusChanges.next(true);
      fixture.detectChanges();
    });

    it('should disable the input', () => {
      expect(component._inputControl.disabled).toBeTrue();
    });
  });

  describe('when the component is destroyed', () => {
    beforeEach(() => {
      component.ngOnDestroy();
    });

    describe('and when the form control is disabled', () => {
      beforeEach(() => {
        control.disabled = true;
        control.statusChanges.next(true);
        fixture.detectChanges();
      });

      it('should not disable the input', () => {
        expect(component._inputControl.disabled).toBeFalse();
      });
    });
  });

  describe('when the form control is enabled', () => {
    beforeEach(() => {
      control.disabled = false;
      control.statusChanges.next(true);
      fixture.detectChanges();
    });

    it('should enable the input', () => {
      expect(component._inputControl.disabled).toBeFalse();
    });
  });

  describe('when the component is focused', () => {
    it('should focus the input component', () => {
      const spy = spyOn(inputComponent, 'focus');
      component.focus();
      fixture.detectChanges();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the component value is set to a value greater than max', () => {
    beforeEach(() => {
      component.value = wrapper.maxValue + 5;
      fixture.detectChanges();
    });

    it('should set the value to max', () => {
      expect(component.value).toEqual(wrapper.maxValue);
    });
  });

  describe('when the component value is set to a non-integer value', () => {
    beforeEach(() => {
      component.value = 5.5;
      fixture.detectChanges();
    });

    it('should set the value to the nearest integer', () => {
      expect(component.value).toEqual(6);
    });
  });
});
