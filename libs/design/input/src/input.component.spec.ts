import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { UntypedFormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  template: `<input daff-input>`,
  imports: [
    DaffInputComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design | DaffInputComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubFormControl;
  let component: DaffInputComponent;
  let componentDE: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new UntypedFormControl();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    componentDE = fixture.debugElement.query(By.css('[daff-input]'));
    component = componentDE.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('onFocus', () => {
    it('should call focus on the native element', () => {
      spyOn(componentDE.nativeElement, 'focus');

      component.onFocus();

      expect(componentDE.nativeElement.focus).toHaveBeenCalledWith();
    });
  });

  describe('when [daff-input] is focused', () => {
    it('should set focused to true', () => {
      componentDE.triggerEventHandler('focus', {});

      expect(component.focused).toBe(true);
    });
  });

  describe('when [daff-input] is blurred', () => {
    it('should set focused to false', () => {
      componentDE.triggerEventHandler('blur', {});

      expect(component.focused).toBe(false);
    });
  });
});
