import {
  Observable,
  of,
} from 'rxjs';
import {
  withLatestFrom,
  map,
  take,
} from 'rxjs/operators';

/**
 * Emits the latest value emitted from the passed observable and then completes.
 */
export const latest = <T>(ob: Observable<T>) => of(null).pipe(
  withLatestFrom(ob),
  map(([_, val]) => val),
  take(1),
);
