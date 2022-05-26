import { TestBed } from '@angular/core/testing';

import { daffProductFilterEqualOptionArrayToDict } from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
} from '@daffodil/product/testing';

import { daffIsFilterEqualApplied } from './is-applied';

describe('@daffodil/product | filters | equal | daffIsFilterEqualApplied', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
  });

  it('should return false for an unapplied equal filter', () => {
    const unappliedEqualFilter = equalFilterFactory.create({
      options: daffProductFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: false })]),
    });

    expect(daffIsFilterEqualApplied(unappliedEqualFilter)).toBeFalse();
  });

  it('should return true for an applied equal filter', () => {
    const appliedEqualFilter = equalFilterFactory.create({
      options: daffProductFilterEqualOptionArrayToDict([equalOptionFactory.create({ applied: true })]),
    });

    expect(daffIsFilterEqualApplied(appliedEqualFilter)).toBeTrue();
  });
});
