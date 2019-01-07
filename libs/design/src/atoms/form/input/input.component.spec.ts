import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffInputComponent } from './input.component';
import { ErrorStateMatcher } from '../error-state-matcher/error-state-matcher';

@Component({template: '<input daff-input [formSubmitted]="formSubmittedValue" [formControl]="formControlValue" [errorStateMatcher]="errorStateMatcherValue"/>'})
class TestInputValidatorWrapper {
  formSubmittedValue: boolean;
  formControlValue: FormControl;
  errorStateMatcherValue: ErrorStateMatcher;
}

describe('DaffInputComponent', () => {
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let mockErrorStateMatcher: ErrorStateMatcher;
  let component: TestInputValidatorWrapper;
  let fixture: ComponentFixture<TestInputValidatorWrapper>;
  let inputComponent: DaffInputComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffInputComponent,
        TestInputValidatorWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new FormControl();
    stubFormSubmitted = false;
    mockErrorStateMatcher = new ErrorStateMatcher();

    fixture = TestBed.createComponent(TestInputValidatorWrapper);
    component = fixture.componentInstance;
    component.formControlValue = stubFormControl;
    component.formSubmittedValue = stubFormSubmitted;
    fixture.detectChanges();

    inputComponent = fixture.debugElement.query(By.css('[daff-input]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take formControl as input', () => {
    expect(inputComponent.formControl).toEqual(stubFormControl);
  });

  it('should be able to take formSubmitted as input', () => {
    expect(inputComponent.formSubmitted).toEqual(stubFormSubmitted);
  });

  it('should be able to take an ErrorStateMatcher as input', () => {
    expect(inputComponent.errorStateMatcher).toEqual(mockErrorStateMatcher);
  });

  describe('ngOnInit', () => {
    
    describe('when errorStateMatcher is not provided by the host component', () => {
      
      let errorStateMatcherTestFixture: ComponentFixture<TestInputValidatorWrapper>;

      beforeEach(() => {
        errorStateMatcherTestFixture = TestBed.createComponent(TestInputValidatorWrapper);
        component = errorStateMatcherTestFixture.componentInstance;
        component.formControlValue = stubFormControl;
        component.formSubmittedValue = stubFormSubmitted;
        errorStateMatcherTestFixture.detectChanges();

        inputComponent = errorStateMatcherTestFixture.debugElement.query(By.css('[daff-input]')).componentInstance;
      });

      it('should initialize a default ErrorStateMatcher', () => {
        expect(inputComponent.errorStateMatcher).toEqual(jasmine.any(ErrorStateMatcher));
      });
    });

    describe('when formControl is not provided by the host component', () => {
      
      let noFormControlTestFixture: ComponentFixture<TestInputValidatorWrapper>;

      beforeEach(() => {
        noFormControlTestFixture = TestBed.createComponent(TestInputValidatorWrapper);
        component = noFormControlTestFixture.componentInstance;
        spyOn(inputComponent.errorStateMatcher, 'isErrorState').and.returnValue(true);
  
        noFormControlTestFixture.debugElement.query(By.css('input')).nativeElement.touched = true;
        inputComponent = noFormControlTestFixture.debugElement.query(By.css('[daff-input]')).componentInstance;
      });
      
      it('should always set errorState to false', () => {
        noFormControlTestFixture.detectChanges();
  
        expect(inputComponent.errorState).toBeFalsy();
      });
      
      it('should always set validState to false', () => {
        stubFormControl.errors = false;
        inputComponent.formControl = stubFormControl;
        noFormControlTestFixture.detectChanges();
  
        expect(inputComponent.validState).toBeFalsy();
      });
    });
  });

  describe('ngDoCheck - when the control is touched', () => {

    let returnedValue;

    beforeEach(() => {
      returnedValue = false;
      spyOn(inputComponent.errorStateMatcher, 'isErrorState').and.returnValue(returnedValue);      

      fixture.debugElement.query(By.css('input')).nativeElement.touched = true;
    });
    
    it('should call errorStateMatcher.isErrorState', () => {
      fixture.detectChanges();

      expect(inputComponent.errorStateMatcher.isErrorState).toHaveBeenCalledWith(stubFormControl, stubFormSubmitted);
    });

    it('should set errorState to returned value of errorStateMatcher.isErrorState', () => {
      fixture.detectChanges();

      expect(inputComponent.errorState).toEqual(returnedValue);
    });

    describe('when formControl has not been touched', () => {
      
      it('should set validState to false', () => {
        stubFormControl.touched = false;
        inputComponent.formControl = stubFormControl;
     
        fixture.detectChanges();

        expect(inputComponent.validState).toBeFalsy();
      });
    });

    describe('when formControl has been touched', () => {

      beforeEach(() => {
        stubFormControl.touched = true;        
      });
      
      describe('and has an error', () => {
        
        it('should set validState to false', () => {
          stubFormControl.errors = true;
          inputComponent.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(inputComponent.validState).toBeFalsy();
        });
      });

      describe('and does not have an error', () => {
        
        it('should set validState to true', () => {
          stubFormControl.errors = false;
          inputComponent.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(inputComponent.validState).toBeTruthy();
        });
      });
    });
  });

  describe('when errorState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = true;
      stubFormControl.touched = true;
      inputComponent.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set daff-input__error class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__error')).toBeTruthy();
    });
  });

  describe('when errorState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      inputComponent.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-input__error class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__error')).toBeFalsy();
    });
  });

  describe('when validState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = true;
      inputComponent.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set set daff-input__valid class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__valid')).toBeTruthy();
    });
  });

  describe('when validState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      inputComponent.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-input__valid class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__valid')).toBeFalsy();
    });
  });
});
