/**
 * An interface for providing `@daffodil/auth/routing` with necessary config values.
 */
export interface DaffAuthRoutingConfig {
  /**
   * The name of the query param to which the reset password token will be set.
   */
  resetPasswordTokenParam?: string;

  /**
   * The path to which the user will be redirected when they are logged in and the auth token is stored.
   * Defaults to `'/'`.
   */
  authCompleteRedirectPath: string;

  /**
   * The path to which the user will be redirected when they are logged out.
   * Defaults to `'/'`.
   */
  logoutRedirectPath: string;

  /**
   * The path to which the user will be redirected when their auth token is present but invalid.
   * Defaults to `'/'`.
   */
  tokenExpirationRedirectPath: string;
}
