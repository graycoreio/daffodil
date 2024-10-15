import { TestBed } from '@angular/core/testing';

import { DaffSeoCanonicalUrlUpdate } from '@daffodil/seo/state';

import {
  provideDaffCanonicalUrlUpdates,
  DAFF_SEO_CANONICAL_URL_UPDATES,
} from './updates.token';

describe('provideDaffCanonicalUrlUpdates', () => {
  let updates: DaffSeoCanonicalUrlUpdate[];
  let result: DaffSeoCanonicalUrlUpdate[];

  beforeEach(() => {
    updates = [
      {
        action: 'action type',
        getData: () => null,
      },
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffCanonicalUrlUpdates(...updates),
      ],
    });

    result = TestBed.inject(DAFF_SEO_CANONICAL_URL_UPDATES);
  });

  it('should provide the updates to the token', () => {
    updates.forEach(update => {
      expect(result).toContain(update);
    });
  });
});
