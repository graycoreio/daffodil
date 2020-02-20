import { Observable } from 'rxjs';
import { DaffAuthToken } from '../../models/auth-token';

export interface DaffAuthServiceInterface {
  /**
   * Checks the validity of an auth token.
   */
  check(): Observable<void>;
}
