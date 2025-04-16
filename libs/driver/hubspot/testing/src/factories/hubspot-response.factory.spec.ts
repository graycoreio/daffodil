import { TestBed } from '@angular/core/testing';

import { HubspotResponse } from '@daffodil/driver/hubspot/models/hubspot-response';

import { DaffHubspotResponseFactory } from './hubspot-response.factory';

describe('@daffodil/driver/hubspot/testing | DaffHubspotResponseFactory', () => {
  let hubspotResponseFactory: DaffHubspotResponseFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffHubspotResponseFactory],
    });

    hubspotResponseFactory = TestBed.inject(DaffHubspotResponseFactory);
  });

  it('should be created', () => {
    expect(hubspotResponseFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: HubspotResponse;

    beforeEach(() => {
      result = hubspotResponseFactory.create();
    });

    it('should return', () => {
      expect(result).toBeDefined();
    });

    it('should define all the required fields', () => {
      expect(result.redirectUri).toBeDefined();
      expect(result.inlineMessage).toBeDefined();
      expect(result.errors).toBeDefined();
    });
  });
});
