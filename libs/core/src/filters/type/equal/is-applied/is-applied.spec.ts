import { TestBed } from '@angular/core/testing';

import { daffFilterEqualOptionArrayToDict } from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
} from '@daffodil/core/testing';

import { daffIsFilterEqualApplied } from './is-applied';

describe('@daffodil/core | filters | equal | daffIsFilterEqualApplied', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
  });

  it('should return false for an unapplied equal filter', () => {
    const unappliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: false })]),
    });

    expect(daffIsFilterEqualApplied(unappliedEqualFilter)).toBeFalse();
  });

  it('should return true for an applied equal filter', () => {
    const appliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: true })]),
    });

    expect(daffIsFilterEqualApplied(appliedEqualFilter)).toBeTrue();
  });
});
