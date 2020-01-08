import { DaffContactTransformerInterface } from '../../interfaces/contact-transformer.interface';
import { DaffContactUnion } from '../../../models/contact-union';
import { DaffHubspotRequest, DaffHubspotFormsTransformer } from '@daffodil/driver/hubspot';
import { Injectable } from '@angular/core';

export class DaffContactHubspotTransformer extends DaffHubspotFormsTransformer implements
  DaffContactTransformerInterface<DaffContactUnion, DaffHubspotRequest, any, any>{
}