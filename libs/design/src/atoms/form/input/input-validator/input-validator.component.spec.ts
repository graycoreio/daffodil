import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffInputValidatorComponent } from './input-validator.component';
import { DaffErrorStateMatcher } from '../../core/public_api';

@Component({template: '<input daff-input-validator [formSubmitted]="formSubmittedValue" [formControl]="formControlValue" [errorStateMatcher]="errorStateMatcherValue"/>'})
class WrapperComponent {
  formSubmittedValue: boolean;
  formControlValue: FormControl;
  errorStateMatcherValue: DaffErrorStateMatcher;
}

describe('DaffInputValidatorComponent', () => {
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let mockDaffErrorStateMatcher: DaffErrorStateMatcher;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffInputValidatorComponent;
  let hostNativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffInputValidatorComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new FormControl();
    stubFormSubmitted = false;
    mockDaffErrorStateMatcher = new DaffErrorStateMatcher();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formControlValue = stubFormControl;
    wrapper.formSubmittedValue = stubFormSubmitted;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('[daff-input-validator]')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should be able to take formControl as input', () => {
    expect(component.formControl).toEqual(stubFormControl);
  });

  it('should be able to take formSubmitted as input', () => {
    expect(component.formSubmitted).toEqual(stubFormSubmitted);
  });

  it('should be able to take an DaffErrorStateMatcher as input', () => {
    expect(component.errorStateMatcher).toEqual(mockDaffErrorStateMatcher);
  });

  describe('ngOnInit', () => {
    
    describe('when errorStateMatcher is not provided by the host component', () => {
      
      let errorStateMatcherTestFixture: ComponentFixture<WrapperComponent>;

      beforeEach(() => {
        errorStateMatcherTestFixture = TestBed.createComponent(WrapperComponent);
        wrapper = errorStateMatcherTestFixture.componentInstance;
        wrapper.formControlValue = stubFormControl;
        wrapper.formSubmittedValue = stubFormSubmitted;
        errorStateMatcherTestFixture.detectChanges();

        component = errorStateMatcherTestFixture.debugElement.query(By.css('[daff-input-validator]')).componentInstance;
      });

      it('should initialize a default DaffErrorStateMatcher', () => {
        expect(component.errorStateMatcher).toEqual(jasmine.any(DaffErrorStateMatcher));
      });
    });

    describe('when formControl is not provided by the host component', () => {
      
      let noFormControlTestFixture: ComponentFixture<WrapperComponent>;

      beforeEach(() => {
        noFormControlTestFixture = TestBed.createComponent(WrapperComponent);
        wrapper = noFormControlTestFixture.componentInstance;
        wrapper.formSubmittedValue = stubFormSubmitted;
      });

      it('should throw an error', () => {
          expect(function() {
            noFormControlTestFixture.detectChanges()
          }).toThrow(new Error('formControl: FormControl and formSubmitted: boolean are required fields'));
      });
    });

    describe('when formSubmitted is not provided by the host component', () => {
      
      let noFormSubmittedTestFixture: ComponentFixture<WrapperComponent>;

      beforeEach(() => {
        noFormSubmittedTestFixture = TestBed.createComponent(WrapperComponent);
        wrapper = noFormSubmittedTestFixture.componentInstance;
        wrapper.formControlValue = stubFormControl;
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
      spyOn(component.errorStateMatcher, 'isErrorState').and.returnValue(returnedValue);      

      fixture.debugElement.query(By.css('input')).nativeElement.touched = true;
    });
    
    it('should call errorStateMatcher.isErrorState', () => {
      fixture.detectChanges();

      expect(component.errorStateMatcher.isErrorState).toHaveBeenCalledWith(stubFormControl, stubFormSubmitted);
    });

    it('should set errorState to returned value of errorStateMatcher.isErrorState', () => {
      fixture.detectChanges();

      expect(component.errorState).toEqual(returnedValue);
    });

    describe('when formControl has not been touched', () => {
      
      it('should set validState to false', () => {
        stubFormControl.touched = false;
        component.formControl = stubFormControl;
     
        fixture.detectChanges();

        expect(component.validState).toBeFalsy();
      });
    });

    describe('when formControl has been touched', () => {

      beforeEach(() => {
        stubFormControl.touched = true;        
      });
      
      describe('and has an error', () => {
        
        it('should set validState to false', () => {
          stubFormControl.errors = true;
          component.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(component.validState).toBeFalsy();
        });
      });

      describe('and does not have an error', () => {
        
        it('should set validState to true', () => {
          stubFormControl.errors = false;
          component.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(component.validState).toBeTruthy();
        });
      });
    });
  });

  describe('when errorState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = true;
      stubFormControl.touched = true;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set daff-input-validator__error class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input-validator__error')).toBeTruthy();
    });
  });

  describe('when errorState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-input-validator__error class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input-validator__error')).toBeFalsy();
    });
  });

  describe('when validState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = true;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set set daff-input-validator__valid class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input-validator__valid')).toBeTruthy();
    });
  });

  describe('when validState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-input-validator__valid class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input-validator__valid')).toBeFalsy();
    });
  });
});
