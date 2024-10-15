import { TestBed } from '@angular/core/testing';

import { DaffSeoTitleUpdate } from '@daffodil/seo/state';

import {
  provideDaffTitleUpdates,
  DAFF_SEO_TITLE_UPDATES,
} from './updates.token';

describe('provideDaffTitleUpdates', () => {
  let updates: DaffSeoTitleUpdate[];
  let result: DaffSeoTitleUpdate[];

  beforeEach(() => {
    updates = [
      {
        action: 'action type',
        getData: () => null,
      },
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffTitleUpdates(...updates),
      ],
    });

    result = TestBed.inject(DAFF_SEO_TITLE_UPDATES);
  });

  it('should provide the updates to the token', () => {
    updates.forEach(update => {
      expect(result).toContain(update);
    });
  });
});
