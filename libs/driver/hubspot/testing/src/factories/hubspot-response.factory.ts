import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  HubspotResponse,
  HubspotError,
} from '@daffodil/driver/hubspot';

const MockHubspotError = (): HubspotError => ({
  message: faker.random.words(5),
  errorType: faker.random.word(),
});

export class MockHubspotResponse implements HubspotResponse {
  redirectUri? = faker.internet.url();
  inlineMessage = faker.random.words(5);
  errors: HubspotError[] = Array(faker.datatype.number({ min: 1, max: 5 })).fill(MockHubspotError);
}

/**
 * Model factory for {@link HubspotResponse}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffHubspotResponseFactory extends DaffModelFactory<HubspotResponse>{
  constructor() {
    super(MockHubspotResponse);
  }
}
