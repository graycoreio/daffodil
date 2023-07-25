import {
  Observable,
  combineLatest,
  map,
} from 'rxjs';

/**
 * Accepts a list of input observables and emits true when all of the inputs emit a truthy value.
 * Does not emit until all of the input streams have emitted at least once.
 */
export const allOf = (items: Observable<boolean>[]) => combineLatest(items).pipe(map((els) => els.reduce(
  (agg, el) => agg && el, true)),
);
