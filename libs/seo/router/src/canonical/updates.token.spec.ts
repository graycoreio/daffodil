import { TestBed } from '@angular/core/testing';
import {
  Event,
  NavigationEnd,
} from '@angular/router';

import {
  provideDaffCanonicalUrlRouterUpdates,
  DAFF_SEO_CANONICAL_URL_ROUTER_UPDATES,
} from './updates.token';
import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';


describe('provideDaffCanonicalUrlUpdates', () => {
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
        ...provideDaffCanonicalUrlRouterUpdates(...updates),
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
