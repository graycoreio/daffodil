import { TestBed } from '@angular/core/testing';
import {
  Event,
  NavigationEnd,
} from '@angular/router';

import {
  provideDaffTitleRouterUpdates,
  DAFF_SEO_TITLE_ROUTER_UPDATES,
} from './updates.token';
import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';


describe('provideDaffTitleUpdates', () => {
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
        ...provideDaffTitleRouterUpdates(...updates),
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
