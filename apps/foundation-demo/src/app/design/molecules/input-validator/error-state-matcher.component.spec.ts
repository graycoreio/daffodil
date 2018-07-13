import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStateMatcher } from './error-state-matcher.component';
import { FormControl } from '@angular/forms';

describe('ErrorStateMatcher', () => {
  let component: ErrorStateMatcher;

  component = new ErrorStateMatcher();

  describe('isErrorState', () => {

    let control;
    let formSubmitted;

    beforeEach(() => {
      control = new FormControl();
      formSubmitted = false;
    });
    
    describe('when there are errors on the form control', () => {

      beforeEach(() => {
        control.errors = true;
      });
      
      describe('and the control has been touched', () => {

        beforeEach(() => {
          control.touched = true;
        });
        
        it('should return true', () => {
          expect(component.isErrorState(control, formSubmitted)).toBeTruthy();
        });
      });

      describe('and the form has been submitted', () => {
        
        beforeEach(() => {
          formSubmitted = true;
        });

        it('should return true', () => {
          expect(component.isErrorState(control, formSubmitted)).toBeTruthy();
        });
      });
    });

    describe('when there are no errors on form control', () => {
      
      beforeEach(() => {
        control.errors = false;
      });

      it('should return false', () => {
        expect(component.isErrorState(control, formSubmitted)).toBeFalsy();
      });
    });
  });
});
