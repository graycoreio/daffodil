import { TestBed } from '@angular/core/testing';
import {
  Event,
  NavigationEnd,
} from '@angular/router';

import {
  daffProvideCanonicalUrlRouterUpdates,
  DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES,
} from './updates.token';
import { DaffSeoUpdateEventPair } from '../../../models/update-event-pair.interface';

describe('daffProvideCanonicalUrlUpdates', () => {
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
        ...daffProvideCanonicalUrlRouterUpdates(...updates),
      ],
    });

    result = TestBed.inject(DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES);
  });

  it('should provide the updates to the token', () => {
    updates.forEach(update => {
      expect(result).toContain(update);
    });
  });
});
