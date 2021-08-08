import { TestBed } from '@angular/core/testing';

import { DaffSeoMetaUpdate } from '@daffodil/seo/state';

import {
  daffProvideMetaUpdates,
  DAFF_SEO_META_UPDATES,
} from './updates.token';

describe('daffProvideMetaUpdates', () => {
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
        ...daffProvideMetaUpdates(...updates),
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
