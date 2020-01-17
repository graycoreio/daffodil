import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { DaffCheckboxComponent } from './checkbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  template: `<daff-checkbox [formControl]="controlValue">checkbox name</daff-checkbox>`
})
class WrapperComponent {
  controlValue: FormControl;
}

describe('DaffCheckboxComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;
  let nativeCheckboxDe: DebugElement;
  let nativeCheckbox: HTMLInputElement;
  let labelDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FontAwesomeModule
      ],
      declarations: [
        DaffCheckboxComponent,
        WrapperComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.controlValue = new FormControl(false);
    de = fixture.debugElement.query(By.css('daff-checkbox'));
    component = de.componentInstance;
    nativeCheckboxDe = fixture.debugElement.query(By.css('input[type="checkbox"]'));
    nativeCheckbox = nativeCheckboxDe.nativeElement;
    labelDe = fixture.debugElement.query(By.css('label'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-checkbox>', () => {
    it('should add a class of "daff-checkbox" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-checkbox': true,
      }));
    });
  });

  describe('the icon', () => {
    it('should only show when checked', () => {
      const getIcon = () => fixture.debugElement.query(By.css('.daff-checkbox__check-icon'));
      expect(getIcon()).toBeFalsy();

      wrapper.controlValue.setValue(true);
      fixture.detectChanges();

      expect(getIcon()).toBeTruthy();
    });
  });

  describe('the label', () => {
    describe('when the label is clicked', () => {
      it('should call toggleCheckbox', () => {
        spyOn(component, 'toggleCheckbox');
        labelDe.nativeElement.click();
        expect(component.toggleCheckbox).toHaveBeenCalled();
      });

      it('should focus the checkbox', () => {
        labelDe.nativeElement.click();
        fixture.detectChanges();
        expect(document.activeElement).toBe(nativeCheckbox);
      });

      it('should update the form control', () => {
        wrapper.controlValue.setValue(false);

        fixture.detectChanges();
        labelDe.nativeElement.click();
        fixture.detectChanges();

        expect(wrapper.controlValue.value).toEqual(true);
      });
    });

    it('should have the content rendered inside it', () => {
      expect(labelDe.nativeElement.textContent).toEqual('checkbox name');
    });
  });

  describe('the native checkbox', () => {
    it('should be visually hidden', () => {
      expect(nativeCheckbox.className).toContain('cdk-visually-hidden');
    });

    it('should stop propagation when changed', () => {
      const mockEvent = jasmine.createSpyObj('event', ['stopPropagation']);
      nativeCheckboxDe.triggerEventHandler('change', mockEvent);
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('should call toggleCheckbox when clicked', () => {
      spyOn(component, 'toggleCheckbox');
      const eventStub = jasmine.createSpyObj('event', ['stopPropagation']);
      nativeCheckboxDe.triggerEventHandler('click', eventStub);
      expect(component.toggleCheckbox).toHaveBeenCalled();
    });

    it('should notifyTouched when blurred', () => {
      spyOn(component, 'notifyTouched' as any);
      const eventStub = jasmine.createSpyObj('event', ['stopPropagation']);
      nativeCheckboxDe.triggerEventHandler('blur', eventStub);
      expect(component.notifyTouched).toHaveBeenCalled();
    });

    it('should cause the DaffCheckbox to become focused when focused', () => {
      nativeCheckboxDe.triggerEventHandler('focus', {});
      fixture.detectChanges();
      expect(component.focused).toEqual(true);
    });

    it('should cause the DaffCheckbox to lose focus when focus is lost', () => {
      nativeCheckboxDe.triggerEventHandler('blur', {});
      fixture.detectChanges();
      expect(component.focused).toEqual(false);
    });
  });


  describe('when the formControl tries to set a value of the wrong type', () => {
    it('should throw a descriptive error', () => {
      expect(() => component.writeValue(10 as any))
        .toThrowError('DaffCheckboxComponent expects a DaffCheckboxValueInterface or a boolean');
    });

    it('should throw a more specific error if the wrong object type is specified', () => {
      expect(() => component.writeValue({ value: '' } as any))
        .toThrowError('DaffCheckboxComponent expects an object with a `value` and a `status` property.');
    });
  });

  describe('toggleCheckbox', () => {
    it('should negate the current value of `checked`', () => {
      component.checked = false;
      component.toggleCheckbox();
      expect(component.checked).toEqual(true);
    });

    it('should call onChange when a function is registered', () => {
      const registeredFunction = jasmine.createSpy();
      component.registerOnChange(registeredFunction);
      component.toggleCheckbox();

      expect(registeredFunction).toHaveBeenCalled();
    });
  });

  describe('focus', () => {
    it('should focus the native checkbox when called', () => {
      expect(document.activeElement).not.toBe(nativeCheckbox);

      component.focus();
      fixture.detectChanges();

      expect(document.activeElement).toBe(nativeCheckbox);
    });
  });
});
