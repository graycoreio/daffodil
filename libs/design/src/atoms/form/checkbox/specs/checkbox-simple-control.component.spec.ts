import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { DaffCheckboxComponent } from '../checkbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component ({
  template: `<daff-checkbox [formControl]="controlValue">checkbox name</daff-checkbox>`
})
class WrapperComponent {
  controlValue: FormControl;
}

describe('DaffCheckboxComponent | Simple', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the checkbox is toggled from false to true', () => {
    it('should update the form control to true', () => {
      wrapper.controlValue.setValue(false);
      fixture.detectChanges();
      component.toggleCheckbox();
      expect(wrapper.controlValue.value).toBeTruthy();
    });
  });
});
