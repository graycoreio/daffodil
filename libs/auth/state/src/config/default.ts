import { DaffAuthStateConfig } from './type';

const TWENTY_MINUTES = 1.2e6;

export const daffAuthStateDefaultConfig: DaffAuthStateConfig = {
  checkInterval: TWENTY_MINUTES,
  authCompleteRedirectPath: '/customer',
  logoutRedirectPath: '/auth/login',
};
