import { DaffContactTransformerInterface } from '../../interfaces/contact-transformer.interface';
import { DaffContactUnion } from '../../../models/contact-union';
import { DaffHubspotRequest, DaffHubspotFormsTransformer } from '@daffodil/driver/hubspot';

export class DaffContactHubspotTransformer extends DaffHubspotFormsTransformer implements
  DaffContactTransformerInterface<DaffContactUnion, DaffHubspotRequest, any, any>{
}