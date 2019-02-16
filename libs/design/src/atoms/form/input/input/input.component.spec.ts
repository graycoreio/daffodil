import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffInputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: `<input daff-input [formSubmitted]="formSubmittedValue" [formControl]="formControlValue">`
})
class WrapperComponent {
  formSubmittedValue: boolean;
  formControlValue: FormControl;
}

describe('DaffInputComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let component: DaffInputComponent;
  let hostNativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffInputComponent,
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

    component = fixture.debugElement.query(By.css('[daff-input]')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('daff-input',() => {
    it('should set `daff-input` on host element', () => {
      expect(fixture.debugElement.query(By.css('[daff-input]')).nativeElement.classList.contains('daff-input')).toEqual(true);
    });
  });

  it('should be able to take formControl as input', () => {
    expect(component.formControl).toEqual(stubFormControl);
  });

  it('should be able to take formSubmitted as input', () => {
    expect(component.formSubmitted).toEqual(stubFormSubmitted);
  });

  describe('ngDoCheck - the control is touched', () => {

    beforeEach(() => {
      fixture.debugElement.query(By.css('input')).nativeElement.touched = true;
    });

    describe('when formControl has an error', () => {
      
      beforeEach(() => {
        stubFormControl.errors = true;
        component.formControl = stubFormControl;
      });

      describe('and formControl has been touched', () => {
        
        beforeEach(() => {
          stubFormControl.touched = true;        
          fixture.detectChanges();
        });

        it('should set isError to true', () => {
          expect(component.isError).toBeTruthy();
        });
        
        it('should set isValid to false', () => {
          expect(component.isValid).toBeFalsy();
        });
      });

      describe('and formControl has not been touched', () => {
        
        beforeEach(() => {
          stubFormControl.touched = false;
          component.formControl = stubFormControl;      
        });
        
        it('should set isValid to false', () => {
          fixture.detectChanges();

          expect(component.isValid).toBeFalsy();
        });

        describe('and form has not been submitted', () => {
          
          it('should set isError to false', () => {
            component.formSubmitted = false;
            fixture.detectChanges();
            
            expect(component.isError).toBeFalsy();
          });
        });

        describe('and form has been submitted', () => {
          
          it('should set isError to true', () => {
            component.formSubmitted = true;
            fixture.detectChanges();

            expect(component.isError).toBeTruthy();
          });
        });
      });
    });

    describe('when formControl has no error', () => {
      
      beforeEach(() => {
        stubFormControl.errors = false;
        component.formControl = stubFormControl;
    
      });

      it('should set isError to false', () => {
        fixture.detectChanges();

        expect(component.isError).toBeFalsy();
      });
      
      describe('when formControl has been touched', () => {

        beforeEach(() => {
          stubFormControl.touched = true;        
        });
        
        it('should set isValid to true', () => {
          fixture.detectChanges();

          expect(component.isValid).toBeTruthy();
        });
      });

      describe('and formControl has not been touched', () => {
        
        it('should set isValid to false', () => {
          stubFormControl.touched = false;
          component.formControl = stubFormControl;

          fixture.detectChanges();

          expect(component.isValid).toBeFalsy();
        });
      });
    });
  });

  describe('when isError is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = true;
      stubFormControl.touched = true;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set daff-input__error class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__error')).toBeTruthy();
    });
  });

  describe('when isError is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-input__error class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__error')).toBeFalsy();
    });
  });

  describe('when isValid is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = true;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set set daff-input__valid class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__valid')).toBeTruthy();
    });
  });

  describe('when isValid is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-input__valid class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-input__valid')).toBeFalsy();
    });
  });
});
