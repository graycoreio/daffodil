import { TestBed } from '@angular/core/testing';

import { DaffContactZendeskConfigService } from './config.service';
import { DaffContactZendeskConfigToken, DaffContactZendeskConfig } from './config';

describe('DaffContactZendeskConfig', () => {
  const config: DaffContactZendeskConfig = { 
    subdomain: "test"
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DaffContactZendeskConfigService,
      { provide: DaffContactZendeskConfigToken, useValue: config}
    ]
  }));

  it('should be created', () => {
    const service: DaffContactZendeskConfigService = TestBed.get(DaffContactZendeskConfigService);
    expect(service).toBeTruthy();
  });

  it('should give me the endpoint of the configured zendesk instance', () => {
    const service: DaffContactZendeskConfigService = TestBed.get(DaffContactZendeskConfigService);
    expect(service.getEndpoint()).toEqual('https://test.zendesk.com')
  });
});
