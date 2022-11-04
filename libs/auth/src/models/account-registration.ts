import { DaffLoginInfo } from './login-info';

export interface DaffAccountRegistration extends DaffLoginInfo {
  /**
   * Whether the customer be subscribed to the newsletter upon registration.
   */
  subscribe?: boolean;
};
