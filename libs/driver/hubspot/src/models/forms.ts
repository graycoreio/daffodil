import { Observable } from "rxjs";
import { HubspotResponse } from "./hubspot-response";

export interface DaffHubspotFormsInterface {
  submit(payload: Record<string, any>): Observable<HubspotResponse>
}
