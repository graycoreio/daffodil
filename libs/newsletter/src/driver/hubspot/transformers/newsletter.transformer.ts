import { Injectable } from '@angular/core';
import { HubspotRequest } from '../models/hubspot-response';
import { jsonBuilder } from './json-builder';
import { DaffNewsletterTransformerInterface } from '../../interfaces/newsletter-transformer.interface';
import { DaffNewsletterUnion } from '../../../models/newsletter-union';

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
