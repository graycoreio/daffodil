import { DaffAuthorizeNetAcceptjsInvalidError } from './acceptjs_invalid';
import { DaffAuthorizeNetAcceptjsMissingError } from './acceptjs_missing';
import { DaffAuthorizeNetAuthFailedError } from './auth-failed';
import { DaffAuthorizeNetInputMissingError } from './input-missing';
import { DaffAuthorizeNetInsecureConnectionError } from './insecure-connection';
import { DaffAuthorizeNetInvalidCCCVVError } from './invalid-cc-cvv';
import { DaffAuthorizeNetInvalidCCExpMonthError } from './invalid-cc-exp-month';
import { DaffAuthorizeNetInvalidCCExpYearError } from './invalid-cc-exp-year';
import { DaffAuthorizeNetInvalidCCNameError } from './invalid-cc-name';
import { DaffAuthorizeNetInvalidClientKeyError } from './invalid-client-key';
import { DaffAuthorizeNetInvalidLoginIdError } from './invalid-login-id';
import { DaffAuthorizeNetInvalidPostalCodeError } from './invalid-postal-code';
import { DaffAuthorizeNetPastCCExpirationError } from './past-cc-expiration';

export const DAFF_AUTHORIZE_NET_ERROR_CODE_MAP = {
  E_WC_01: DaffAuthorizeNetAcceptjsMissingError,
  E_WC_02: DaffAuthorizeNetInsecureConnectionError,
  E_WC_03: DaffAuthorizeNetAcceptjsInvalidError,
  E_WC_04: DaffAuthorizeNetInputMissingError,
  E_WC_05: DaffAuthorizeNetInvalidCCNameError,
  E_WC_06: DaffAuthorizeNetInvalidCCExpMonthError,
  E_WC_07: DaffAuthorizeNetInvalidCCExpYearError,
  E_WC_08: DaffAuthorizeNetPastCCExpirationError,
  E_WC_10: DaffAuthorizeNetInvalidLoginIdError,
  E_WC_13: DaffAuthorizeNetAcceptjsInvalidError,
  E_WC_15: DaffAuthorizeNetInvalidCCCVVError,
  E_WC_16: DaffAuthorizeNetInvalidPostalCodeError,
  E_WC_17: DaffAuthorizeNetInvalidCCNameError,
  E_WC_18: DaffAuthorizeNetInvalidClientKeyError,
  E_WC_19: DaffAuthorizeNetInvalidLoginIdError,
  E_WC_21: DaffAuthorizeNetAuthFailedError,
  E_WC_23: DaffAuthorizeNetInputMissingError,
};
