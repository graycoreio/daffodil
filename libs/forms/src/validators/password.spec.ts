import { UntypedFormControl } from '@angular/forms';

import {
  daffFormsPasswordValidator,
  DaffFormsPasswordValidatorConfig,
} from './password';

describe('@daffodil/forms | daffFormsPasswordValidator', () => {
  let control: UntypedFormControl;
  let config: DaffFormsPasswordValidatorConfig;

  describe('when a combo is required', () => {
    beforeEach(() => {
      config = {
        numClasses: 2,
        occurences: 2,
      };
      control = new UntypedFormControl('', daffFormsPasswordValidator(config));
    });

    describe('and the form value does not meet those requirements', () => {
      beforeEach(() => {
        control.patchValue('aA$3');
      });

      it('should set a passwordCombo error', () => {
        expect(control.hasError('passwordCombo')).toBeTrue();
      });
    });

    describe('and the form value meets those requirements', () => {
      beforeEach(() => {
        control.patchValue('aAA$33');
      });

      it('should not set a passwordCombo error', () => {
        expect(control.hasError('passwordCombo')).toBeFalse();
      });
    });
  });

  describe('when a number of special characters are required', () => {
    beforeEach(() => {
      config = {
        special: 2,
      };
      control = new UntypedFormControl('', daffFormsPasswordValidator(config));
    });

    describe('and the form value does not meet those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaa$');
      });

      it('should set a pattern error', () => {
        expect(control.hasError('pattern')).toBeTrue();
      });
    });

    describe('and the form value meets those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaa$$');
      });

      it('should not set a pattern error', () => {
        expect(control.hasError('pattern')).toBeFalse();
      });
    });
  });

  describe('when a number of numbers are required', () => {
    beforeEach(() => {
      config = {
        numbers: 2,
      };
      control = new UntypedFormControl('', daffFormsPasswordValidator(config));
    });

    describe('and the form value does not meet those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaa1');
      });

      it('should set a pattern error', () => {
        expect(control.hasError('pattern')).toBeTrue();
      });
    });

    describe('and the form value meets those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaa11');
      });

      it('should not set a pattern error', () => {
        expect(control.hasError('pattern')).toBeFalse();
      });
    });
  });

  describe('when a number of lowercase letters are required', () => {
    beforeEach(() => {
      config = {
        lowercase: 2,
      };
      control = new UntypedFormControl('', daffFormsPasswordValidator(config));
    });

    describe('and the form value does not meet those requirements', () => {
      beforeEach(() => {
        control.patchValue('11111111a');
      });

      it('should set a pattern error', () => {
        expect(control.hasError('pattern')).toBeTrue();
      });
    });

    describe('and the form value meets those requirements', () => {
      beforeEach(() => {
        control.patchValue('11111111aa');
      });

      it('should not set a pattern error', () => {
        expect(control.hasError('pattern')).toBeFalse();
      });
    });
  });

  describe('when a number of uppercase letters are required', () => {
    beforeEach(() => {
      config = {
        uppercase: 2,
      };
      control = new UntypedFormControl('', daffFormsPasswordValidator(config));
    });

    describe('and the form value does not meet those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaaA');
      });

      it('should set a pattern error', () => {
        expect(control.hasError('pattern')).toBeTrue();
      });
    });

    describe('and the form value meets those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaaAA');
      });

      it('should not set a pattern error', () => {
        expect(control.hasError('pattern')).toBeFalse();
      });
    });
  });

  describe('when a minimum length is required', () => {
    beforeEach(() => {
      config = {
        minLength: 10,
      };
      control = new UntypedFormControl('', daffFormsPasswordValidator(config));
    });

    describe('and the form value does not meet those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaaA');
      });

      it('should set a minLength error', () => {
        expect(control.hasError('minlength')).toBeTrue();
      });
    });

    describe('and the form value meets those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaaAA');
      });

      it('should not set a minLength error', () => {
        expect(control.hasError('minlength')).toBeFalse();
      });
    });
  });

  describe('when a maximum length is required', () => {
    beforeEach(() => {
      config = {
        maxLength: 10,
      };
      control = new UntypedFormControl('', daffFormsPasswordValidator(config));
    });

    describe('and the form value does not meet those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaaAaa');
      });

      it('should set a maxLength error', () => {
        expect(control.hasError('maxlength')).toBeTrue();
      });
    });

    describe('and the form value meets those requirements', () => {
      beforeEach(() => {
        control.patchValue('aaaaaaaaAA');
      });

      it('should not set a maxLength error', () => {
        expect(control.hasError('maxlength')).toBeFalse();
      });
    });
  });
});
