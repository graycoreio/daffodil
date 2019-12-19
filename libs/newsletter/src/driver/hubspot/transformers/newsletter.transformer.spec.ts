import { DaffNewsletterSubmission } from 'libs/newsletter/src/models/newsletter.model';
import { jsonBuilder } from './json-builder';

describe('DaffNewsletterHubspotTransformer', () => {

  describe('when using transformOut', () => {

  });
  it('should create the correct field values for a submission object', () => {

    const payload: DaffNewsletterSubmission = { email: 'johndoe@email.com' };
    const fieldValues = [{ 'name': 'email', 'value': 'johndoe@email.com' }];
    expect(jsonBuilder(payload)).toEqual(fieldValues);
  });
  it('should create a proper HubspotRequest object', () => {

  });
}); 