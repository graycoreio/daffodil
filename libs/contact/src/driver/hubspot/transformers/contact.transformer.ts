import { Injectable } from '@angular/core';
import { HubspotRequest } from '../models/hubspot-response';
import { jsonBuilder } from './json-builder';
import { DaffContactTransformerInterface } from '../../interfaces/contact-transformer.interface';
import { DaffContactUnion } from '../../../models/contact-union';

@Injectable({
  providedIn: 'root'
})
export class DaffContactHubspotTransformer implements
  DaffContactTransformerInterface<DaffContactUnion, HubspotRequest, any, any>{
  transformOut(Contact: DaffContactUnion): HubspotRequest {
    return { fields: jsonBuilder(Contact)};
  }
  transformIn(Contact: any) {
    return Contact;
  }
}