import { TestBed } from '@angular/core/testing';

import { DaffNewsletterHubspotTransformer } from './newsletter.transformer';
import { DaffNewsletterSubmission } from '../../../models/newsletter.model';

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
  describe('when using transformIn', () => {
    it('should return the object itself', () => {
      const payload: DaffNewsletterSubmission = { email: 'johndoe@email.com' };
      expect(transformer.transformIn(payload)).toEqual(payload);
    });
  });
}); 