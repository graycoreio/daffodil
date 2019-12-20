import { DaffNewsletterSubmission } from 'libs/newsletter/src/models/newsletter.model';
import { DaffNewsletterHubspotTransformer } from './newsletter.transformer';
import { jsonBuilder } from './json-builder';
import { TestBed } from '@angular/core/testing';

describe('DaffNewsletterHubspotTransformer', () => {
  let transformer;
  beforeEach(() => {
    transformer = TestBed.get(DaffNewsletterHubspotTransformer);

  });
  describe('when using transformOut', () => {
    it('should create the correct field values for a submission object', () => {
      const payload: DaffNewsletterSubmission = { email: 'johndoe@email.com' };
      const fieldValues = { fields: [{ 'name': 'email', 'value': 'johndoe@email.com' }] };
      expect(transformer.transformOut(payload)).toEqual(fieldValues);
    });

  });
}); 