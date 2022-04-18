import { TestBed } from '@angular/core/testing';
import {
  Event,
  NavigationEnd,
} from '@angular/router';

import { DaffSeoUpdateEventPair } from '../../../models/update-event-pair.interface';
import {
  daffProvideTitleRouterUpdates,
  DAFF_SEO_TITLE_ROUTER_UPDATES,
} from './updates.token';

describe('daffProvideTitleUpdates', () => {
  let updates: DaffSeoUpdateEventPair<Event, string>[];
  let result: DaffSeoUpdateEventPair<Event, string>[];

  beforeEach(() => {
    updates = [
      {
        event: NavigationEnd,
        getData: () => null,
      },
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideTitleRouterUpdates(...updates),
      ],
    });

    result = TestBed.inject(DAFF_SEO_TITLE_ROUTER_UPDATES);
  });

  it('should provide the updates to the token', () => {
    updates.forEach(update => {
      expect(result).toContain(update);
    });
  });
});
