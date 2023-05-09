import { DaffAuthRoutingConfig } from './interface';

export const DAFF_AUTH_ROUTING_CONFIG_DEFAULT: DaffAuthRoutingConfig = {
  resetPasswordTokenParam: 'token',
  redirectUrlParam: 'redirect',
  authCompleteRedirectPath: '/',
  logoutRedirectPath: '/',
  tokenExpirationRedirectPath: '/',
};
