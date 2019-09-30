import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffNativeSelectComponent } from './select.component';

@Component({
  template: `
    <select daff-native-select [formSubmitted]="formSubmittedValue" [formControl]="formControlValue">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  `
})

class WrapperComponent {
  formSubmittedValue: boolean;
  formControlValue: FormControl;
}

describe('DaffNativeSelectComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let component: DaffNativeSelectComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ 
        DaffNativeSelectComponent,
        WrapperComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new FormControl();
    stubFormSubmitted = false;

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formControlValue = stubFormControl;
    wrapper.formSubmittedValue = stubFormSubmitted;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('[daff-native-select]')).componentInstance;
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
});