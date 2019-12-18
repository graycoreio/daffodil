import { DaffNewsletterTransformerInterface, DaffNewsletterUnion } from 'libs/newsletter/src';
import { HubspotRequest } from '../models/hubspot-response';
import { jsonBuilder } from './json-builder';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaffNewsletterHubspotTransformer implements
  DaffNewsletterTransformerInterface<DaffNewsletterUnion, HubspotRequest, any, any>{
  transformOut(newsletter: DaffNewsletterUnion): HubspotRequest {
    return { fields: jsonBuilder(newsletter)};
  }
  transformIn(newsletter: any) {
    return newsletter;
  }
}
