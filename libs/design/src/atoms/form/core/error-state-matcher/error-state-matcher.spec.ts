import { FormControl } from '@angular/forms';

import { DaffErrorStateMatcher } from './error-state-matcher';

describe('DaffErrorStateMatcher', () => {
  let component: DaffErrorStateMatcher;

  component = new DaffErrorStateMatcher();

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
