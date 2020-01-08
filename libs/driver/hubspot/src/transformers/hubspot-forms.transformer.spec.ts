import { DaffHubspotFormsTransformer } from './hubspot-forms.transformer';

describe('DaffNewsletterHubspotTransformer', () => {
  let transformer;
  transformer = new DaffHubspotFormsTransformer();
  describe('when using transformOut', () => {
    it('should create the correct field values for a submission object', () => {
      const payload = { email: 'johndoe@email.com' };
      const fieldValues = { fields: [{ 'name': 'email', 'value': 'johndoe@email.com' }] };
      expect(transformer.transformOut(payload)).toEqual(fieldValues);
    });
  });
  describe('when using transformIn', () => {
    it('should return the object itself', () => {
      const payload = { email: 'johndoe@email.com' };
      expect(transformer.transformIn(payload)).toEqual(payload);
    });
  });
}); 