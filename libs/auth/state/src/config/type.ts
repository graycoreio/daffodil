export interface DaffAuthStateConfig {
  /**
   * How often Daffodil will run the auth check.
   * Defaults to twenty minutes.
   */
  checkInterval: number;

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
}
