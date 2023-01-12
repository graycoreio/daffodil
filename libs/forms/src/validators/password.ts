import {
  AbstractControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

/**
 * The length config describes a password requirement that specifies
 * maxmimum and/or minimum lengths.
 */
export interface DaffFormsPasswordValidatorLengthConfig {
  /**
   * The minimum length.
   */
  minLength?: number;

  /**
   * The maximum length.
   */
  maxLength?: number;
}

/**
 * The class config describes a password requirement that specifies a certain
 * number of occurences of each character class must be present in the password value.
 */
export interface DaffFormsPasswordValidatorClassConfig {
  /**
   * How many special characters are required.
   */
  special?: number;

  /**
   * How many numbers are required.
   */
  numbers?: number;

  /**
   * How many uppercase letters are required.
   */
  uppercase?: number;

  /**
   * How many lowercase letters are required.
   */
  lowercase?: number;
}

/**
 * The combo config describes a password requirement that does not specify hardcoded
 * requirements for each character class but instead that a certain number of any
 * of the character characterClasses are present in the password value.
 */
export interface DaffFormsPasswordValidatorComboConfig {
  /**
   * How many of the 4 character characterClasses should be present.
   */
  numClasses: 1 | 2 | 3 | 4;

  /**
   * How many occurences of a particular class need to be present for that class to count towards the `characterClasses` total.
   */
  occurences: number;
}

export type DaffFormsPasswordValidatorConfig = DaffFormsPasswordValidatorLengthConfig | DaffFormsPasswordValidatorClassConfig | DaffFormsPasswordValidatorComboConfig;

const characterClasses: (keyof DaffFormsPasswordValidatorClassConfig)[] = [
  'special',
  'numbers',
  'uppercase',
  'lowercase',
];

const characterClassRegex: Record<keyof DaffFormsPasswordValidatorClassConfig, string> = {
  special: '^\\w\\d\\s',
  numbers: '\\d',
  uppercase: 'A-Z',
  lowercase: 'a-z',
};

/**
 * Regex that matches everything.
 */
const MATCH_EVERYTHING_REGEX = '.*';

function buildCharacterClassPattern(config: DaffFormsPasswordValidatorClassConfig): string {
  return characterClasses.reduce((acc, characterClass) => {
    if (config[characterClass]) {
      // this is a lookahead assertion combined with a quantifier
      return `(?=(?:.*[${characterClassRegex[characterClass]}]){${config[characterClass]},})${acc}`;
    }

    return acc;
  }, MATCH_EVERYTHING_REGEX);
}

function comboValidator(config: DaffFormsPasswordValidatorComboConfig): ValidatorFn {
  // generate each of the character class
  const patterns = characterClasses.map((characterClass) => buildCharacterClassPattern({ [characterClass]: config.occurences }));

  return (control: AbstractControl) =>
    // find how many of the character classes have a match
    patterns.filter(pattern => (<string>control.value)?.search?.(`^${pattern}$`) > -1).length < config.numClasses
      ? {
        passwordCombo: true,
      }
      : null;
}

export function daffFormsPasswordValidator(config: DaffFormsPasswordValidatorConfig = {}) {
  const validators = [];
  const classPattern = buildCharacterClassPattern(<DaffFormsPasswordValidatorClassConfig>config);
  const minLength = (<DaffFormsPasswordValidatorLengthConfig>config).minLength;
  const maxLength = (<DaffFormsPasswordValidatorLengthConfig>config).maxLength;

  if (minLength) {
    validators.push(Validators.minLength(minLength));
  }
  if (maxLength) {
    validators.push(Validators.maxLength(maxLength));
  }
  if (classPattern.length > MATCH_EVERYTHING_REGEX.length) {
    validators.push(Validators.pattern(classPattern));
  }
  if ((<DaffFormsPasswordValidatorComboConfig>config).numClasses) {
    validators.push(comboValidator(<DaffFormsPasswordValidatorComboConfig>config));
  }

  return Validators.compose(validators);
}
