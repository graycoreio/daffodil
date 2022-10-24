export interface DaffAuthResetPasswordInfo {
  /**
   * The customer's email.
   */
  email: string;
  /**
   * The reset password token.
   */
  token: string;
  /**
   * The customer's new password.
   */
  password: string;
}
