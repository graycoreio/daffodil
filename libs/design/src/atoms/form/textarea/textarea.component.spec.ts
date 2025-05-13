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

import { DaffTextareaComponent } from '@daffodil/design';

@Component({
  template: `<textarea daff-textarea></textarea>`,
  imports: [
    DaffTextareaComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design | DaffTextareaComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubFormControl;
  let component: DaffTextareaComponent;
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

    componentDE = fixture.debugElement.query(By.css('[daff-textarea]'));
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

  describe('when [daff-textarea] is focused', () => {
    it('should set focused to true', () => {
      componentDE.triggerEventHandler('focus', {});

      expect(component.focused).toBe(true);
    });
  });

  describe('when [daff-textarea] is blurred', () => {
    it('should set focused to false', () => {
      componentDE.triggerEventHandler('blur', {});

      expect(component.focused).toBe(false);
    });
  });
});
