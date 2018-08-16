import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SelectValidatorComponent } from './select-validator.component';
import { ErrorStateMatcher } from '../error-state-matcher/error-state-matcher.component';

@Component({template: '<select select-validator [formSubmitted]="formSubmittedValue" [formControl]="formControlValue" [errorStateMatcher]="errorStateMatcherValue"></select>'})
class TestSelectValidatorWrapper {
  formSubmittedValue: boolean;
  formControlValue: FormControl;
  errorStateMatcherValue: ErrorStateMatcher;
}

describe('SelectValidatorComponent', () => {
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let mockErrorStateMatcher: ErrorStateMatcher;
  let component: TestSelectValidatorWrapper;
  let fixture: ComponentFixture<TestSelectValidatorWrapper>;
  let selectValidator: SelectValidatorComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SelectValidatorComponent,
        TestSelectValidatorWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new FormControl();
    stubFormSubmitted = false;
    mockErrorStateMatcher = new ErrorStateMatcher();

    fixture = TestBed.createComponent(TestSelectValidatorWrapper);
    component = fixture.componentInstance;
    component.formControlValue = stubFormControl;
    component.formSubmittedValue = stubFormSubmitted;
    fixture.detectChanges();

    selectValidator = fixture.debugElement.query(By.css('[select-validator]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take formControl as select', () => {
    expect(selectValidator.formControl).toEqual(stubFormControl);
  });

  it('should be able to take formSubmitted as select', () => {
    expect(selectValidator.formSubmitted).toEqual(stubFormSubmitted);
  });

  it('should be able to take an ErrorStateMatcher as select', () => {
    expect(selectValidator.errorStateMatcher).toEqual(mockErrorStateMatcher);
  });

  describe('ngOnInit', () => {
    
    describe('when errorStateMatcher is not provided by the host component', () => {
      
      let errorStateMatcherTestFixture: ComponentFixture<TestSelectValidatorWrapper>;

      beforeEach(() => {
        errorStateMatcherTestFixture = TestBed.createComponent(TestSelectValidatorWrapper);
        component = errorStateMatcherTestFixture.componentInstance;
        component.formControlValue = stubFormControl;
        component.formSubmittedValue = stubFormSubmitted;
        errorStateMatcherTestFixture.detectChanges();

        selectValidator = errorStateMatcherTestFixture.debugElement.query(By.css('[select-validator]')).componentInstance;
      });

      it('should initialize a default ErrorStateMatcher', () => {
        expect(selectValidator.errorStateMatcher).toEqual(jasmine.any(ErrorStateMatcher));
      });
    });

    describe('when formControl is not provided by the host component', () => {
      
      let noFormControlTestFixture: ComponentFixture<TestSelectValidatorWrapper>;

      beforeEach(() => {
        noFormControlTestFixture = TestBed.createComponent(TestSelectValidatorWrapper);
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
      
      let noFormSubmittedTestFixture: ComponentFixture<TestSelectValidatorWrapper>;

      beforeEach(() => {
        noFormSubmittedTestFixture = TestBed.createComponent(TestSelectValidatorWrapper);
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

      fixture.debugElement.query(By.css('select')).nativeElement.touched = true;
    });
    
    it('should call errorStateMatcher.isErrorState', () => {
      spyOn(selectValidator.errorStateMatcher, 'isErrorState').and.returnValue(returnedValue)
      fixture.detectChanges();

      expect(selectValidator.errorStateMatcher.isErrorState).toHaveBeenCalledWith(stubFormControl, stubFormSubmitted);
    });

    it('should set errorState to returned value of errorStateMatcher.isErrorState', () => {
      spyOn(selectValidator.errorStateMatcher, 'isErrorState').and.returnValue(returnedValue)
      fixture.detectChanges();

      expect(selectValidator.errorState).toEqual(returnedValue);
    });

    describe('when formControl has not been touched', () => {
      
      it('should set validState to false', () => {
        stubFormControl.touched = false;
        selectValidator.formControl = stubFormControl;
     
        fixture.detectChanges();

        expect(selectValidator.validState).toBeFalsy();
      });
    });

    describe('when formControl has been touched', () => {

      beforeEach(() => {
        stubFormControl.touched = true;        
      });
      
      describe('and has an error', () => {
        
        it('should set validState to false', () => {
          spyOn(selectValidator.errorStateMatcher, 'isErrorState').and.returnValue(true);
          selectValidator.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(selectValidator.validState).toBeFalsy();
        });
      });

      describe('and does not have an error', () => {
        
        it('should set validState to true', () => {
          stubFormControl.errors = false;
          selectValidator.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(selectValidator.validState).toBeTruthy();
        });
      });
    });
  });

  describe('when errorState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = true;
      stubFormControl.touched = true;
      selectValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set select-validator__error class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('select-validator__error')).toBeTruthy();
    });
  });

  describe('when errorState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      selectValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set select-validator__error class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('select-validator__error')).toBeFalsy();
    });
  });

  describe('when validState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = true;
      selectValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set set select-validator__valid class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('select-validator__valid')).toBeTruthy();
    });
  });

  describe('when validState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      selectValidator.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set select-validator__valid class on host component', () => {
      let hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('select-validator__valid')).toBeFalsy();
    });
  });
});
