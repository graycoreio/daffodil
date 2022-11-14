import { DaffLoginInfo } from './login-info';

export interface DaffAccountRegistration extends DaffLoginInfo {
  /**
   * Whether the customer be subscribed to the newsletter upon registration.
   */
  subscribe?: boolean;

  /**
   * The customer's first name.
   */
  firstName?: string;

  /**
   * The customer's last name.
   */
  lastName?: string;
};
