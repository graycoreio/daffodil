import { DaffNewsletterTransformerInterface } from '../../interfaces/newsletter-transformer.interface';
import { DaffNewsletterUnion } from '../../../models/newsletter-union';
import { DaffHubspotFormsTransformer, DaffHubspotRequest } from '@daffodil/driver/hubspot';

export class DaffNewsletterHubspotTransformer
	extends DaffHubspotFormsTransformer
	implements
		DaffNewsletterTransformerInterface<
			DaffNewsletterUnion,
			DaffHubspotRequest,
			any,
			any
		> {
}
