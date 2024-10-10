import { Observable } from 'rxjs';

import { HubspotResponse } from './hubspot-response';

/**
 * Interface for interacting with Hubspot Forms API.
 */
export interface DaffHubspotFormsInterface {
  submit(payload: Record<string, any>): Observable<HubspotResponse>;
}
