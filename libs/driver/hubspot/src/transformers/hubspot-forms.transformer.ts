import { DaffHubspotRequest } from '../models/hubspot-request';
import { jsonBuilder } from './json-builder';


export class DaffHubspotFormsTransformer {
  transformOut(payload: Object): DaffHubspotRequest {
    return { fields: jsonBuilder(payload)};
  }
  transformIn(payload: any): any {
    return payload;
  }
}