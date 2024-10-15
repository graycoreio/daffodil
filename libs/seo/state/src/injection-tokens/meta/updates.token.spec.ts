import { TestBed } from '@angular/core/testing';

import { DaffSeoMetaUpdate } from '@daffodil/seo/state';

import {
  provideDaffMetaUpdates,
  DAFF_SEO_META_UPDATES,
} from './updates.token';

describe('provideDaffMetaUpdates', () => {
  let updates: DaffSeoMetaUpdate[];
  let result: DaffSeoMetaUpdate[];

  beforeEach(() => {
    updates = [
      {
        action: 'action type',
        getData: () => null,
      },
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffMetaUpdates(...updates),
      ],
    });

    result = TestBed.inject(DAFF_SEO_META_UPDATES);
  });

  it('should provide the updates to the token', () => {
    updates.forEach(update => {
      expect(result).toContain(update);
    });
  });
});
