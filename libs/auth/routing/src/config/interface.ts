/**
 * An interface for providing `@daffodil/auth/routing` with necessary config values.
 */
export interface DaffAuthRoutingConfig {
  /**
   * The name of the query param to which the reset password token will be set.
   */
  resetPasswordTokenParam?: string;
}
