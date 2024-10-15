import { TestBed } from '@angular/core/testing';
import {
  Event,
  NavigationEnd,
} from '@angular/router';

import { DaffSeoMetaDefinition } from '@daffodil/seo';

import {
  provideDaffMetaRouterUpdates,
  DAFF_SEO_META_ROUTER_UPDATES,
} from './updates.token';
import { DaffSeoUpdateEventPair } from '../model/update-event-pair.interface';


describe('provideDaffMetaUpdates', () => {
  let updates: DaffSeoUpdateEventPair<Event, DaffSeoMetaDefinition>[];
  let result: DaffSeoUpdateEventPair<Event, DaffSeoMetaDefinition>[];

  beforeEach(() => {
    updates = [
      {
        event: NavigationEnd,
        getData: () => null,
      },
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffMetaRouterUpdates(...updates),
      ],
    });

    result = TestBed.inject(DAFF_SEO_META_ROUTER_UPDATES);
  });

  it('should provide the updates to the token', () => {
    updates.forEach(update => {
      expect(result).toContain(update);
    });
  });
});
