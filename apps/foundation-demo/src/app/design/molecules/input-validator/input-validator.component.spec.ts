import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidatorComponent } from './input-validator.component';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ErrorStateMatcher } from './error-state-matcher.component';

@Component({template: '<input input-validator [formSubmitted]="formSubmittedValue" [formControl]="formControlValue" [errorStateMatcher]="errorStateMatcherValue"/>'})
class TestInputValidatorWrapper {
  formSubmittedValue: boolean;
  formControlValue: FormControl;
  errorStateMatcherValue: ErrorStateMatcher;
}

describe('InputValidatorComponent', () => {
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let mockErrorStateMatcher: ErrorStateMatcher;
  let component: TestInputValidatorWrapper;
  let fixture: ComponentFixture<TestInputValidatorWrapper>;
  let inputValidator: InputValidatorComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        InputValidatorComponent,
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

    inputValidator = fixture.debugElement.query(By.css('[input-validator]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take formControl as input', () => {
    expect(inputValidator.formControl).toEqual(stubFormControl);
  });

  it('should be able to take formSubmitted as input', () => {
    expect(inputValidator.formSubmitted).toEqual(stubFormSubmitted);
  });

  it('should be able to take an ErrorStateMatcher as input', () => {
    expect(inputValidator.errorStateMatcher).toEqual(mockErrorStateMatcher);
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

        inputValidator = errorStateMatcherTestFixture.debugElement.query(By.css('[input-validator]')).componentInstance;
      });

      it('should initialize a default ErrorStateMatcher', () => {
        expect(inputValidator.errorStateMatcher).toEqual(jasmine.any(ErrorStateMatcher));
      });
    });

    describe('when formControl is not provided by the host component', () => {
      
      let noFormControlTestFixture: ComponentFixture<TestInputValidatorWrapper>;

      beforeEach(() => {
        noFormControlTestFixture = TestBed.createComponent(TestInputValidatorWrapper);
        component = noFormControlTestFixture.componentInstance;
        component.formSubmittedValue = stubFormSubmitted;
      });

      it('should throw an error', () => {
          expect(function() {
            noFormControlTestFixture.detectChanges()
          }).toThrow(new Error('formControl: FormControl and formSubmitted: boolean are required fields'));
      });
    });

    describe('when formSubmitted is not provided by the host component', () => {
      
      let noFormSubmittedTestFixture: ComponentFixture<TestInputValidatorWrapper>;

      beforeEach(() => {
        noFormSubmittedTestFixture = TestBed.createComponent(TestInputValidatorWrapper);
        component = noFormSubmittedTestFixture.componentInstance;
        component.formControlValue = stubFormControl;
      });

      it('should throw an error', () => {
          expect(function() {
            noFormSubmittedTestFixture.detectChanges()
          }).toThrow(new Error('formControl: FormControl and formSubmitted: boolean are required fields'));
      });
    });
  });

  describe('ngDoCheck - when the control is touched', () => {

    let returnedValue;

    beforeEach(() => {
      returnedValue = false;
      spyOn(inputValidator.errorStateMatcher, 'isErrorState').and.returnValue(returnedValue);      

      fixture.debugElement.query(By.css('input')).nativeElement.touched = true;
    });
    
    it('should call errorStateMatcher.isErrorState', () => {
      fixture.detectChanges();

      expect(inputValidator.errorStateMatcher.isErrorState).toHaveBeenCalledWith(stubFormControl, stubFormSubmitted);
    });

    it('should set errorState to returned value of errorStateMatcher.isErrorState', () => {
      fixture.detectChanges();

      expect(inputValidator.errorState).toEqual(returnedValue);
    });

    describe('when formControl has not been touched', () => {
      
      it('should set validState to false', () => {
        stubFormControl.touched = false;
        inputValidator.formControl = stubFormControl;
     
        fixture.detectChanges();

        expect(inputValidator.validState).toBeFalsy();
      });
    });

    describe('when formControl has been touched', () => {

      beforeEach(() => {
        stubFormControl.touched = true;        
      });
      
      describe('and has an error', () => {
        
        it('should set validState to false', () => {
          stubFormControl.errors = true;
          inputValidator.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(inputValidator.validState).toBeFalsy();
        });
      });

      describe('and does not have an error', () => {
        
        it('should set validState to true', () => {
          stubFormControl.errors = false;
          inputValidator.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(inputValidator.validState).toBeTruthy();
        });
      });
    });
  });

  describe('when errorState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = true;
      stubFormControl.touched = true;
      inputValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set input-validator__error class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('input-validator__error')).toBeTruthy();
    });
  });

  describe('when errorState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      inputValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set input-validator__error class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('input-validator__error')).toBeFalsy();
    });
  });

  describe('when validState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = true;
      inputValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set set input-validator__valid class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('input-validator__valid')).toBeTruthy();
    });
  });

  describe('when validState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      inputValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set input-validator__valid class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('input-validator__valid')).toBeFalsy();
    });
  });
});
