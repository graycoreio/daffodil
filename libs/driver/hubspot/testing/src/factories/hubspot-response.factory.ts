import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  HubspotError,
  HubspotResponse,
} from '@daffodil/driver/hubspot';

const MockHubspotError = (): HubspotError => ({
  message: faker.lorem.words(5),
  errorType: faker.lorem.word(),
});

export class MockHubspotResponse implements HubspotResponse {
  redirectUri? = faker.internet.url();
  inlineMessage = faker.lorem.words(5);
  errors: HubspotError[] = Array(faker.number.int({ min: 1, max: 5 })).fill(MockHubspotError);
}

/**
 * Model factory for {@link MockHubspotResponse}s.
 *
 * Should be used to create {@link MockHubspotResponse}s for testing purposes.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffHubspotResponseFactory extends DaffModelFactory<HubspotResponse>{
  constructor() {
    super(MockHubspotResponse);
  }
}
