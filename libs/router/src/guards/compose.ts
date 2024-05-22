import {
  GuardResult,
  UrlTree,
  CanActivateChildFn,
  CanActivateFn,
} from '@angular/router';
import {
  of,
  switchMap,
  combineLatest,
  OperatorFunction,
  map,
} from 'rxjs';

import { observe } from '@daffodil/core';

function guardFailure(val: GuardResult): boolean {
  return !val || val instanceof UrlTree;
}

/**
 * Composes functional guards together into a single functional guard.
 * Both blocking and non-blocking guards may be specified.
 * Blocking guards run in serial, waiting for a response before calling the next blocking guard.
 * If a blocking guard returns a failure condition (falsy or a `UrlTree`), all future guards will be skipped and not called. The failure condition return will be returned from the composed guard.
 * Non-blocking guards are run in parallel after all of the blocking guards have finished.
 */
export function daffRouterComposeGuards(blockingGuards: Array<CanActivateFn | CanActivateChildFn>, nonBlockingGuards: Array<CanActivateFn | CanActivateChildFn> = []): CanActivateFn | CanActivateChildFn {
  return (...args) => of(true).pipe(
    // @ts-expect-error rxjs has not written a function overload for only rest param...so this errors https://github.com/ReactiveX/rxjs/issues/4177#issuecomment-2125328922
    ...blockingGuards.map<OperatorFunction<GuardResult, GuardResult>>((guard) =>
      switchMap((prevGuardResult) =>
        guardFailure(prevGuardResult)
          ? of(prevGuardResult)
          : observe(guard(...args)),
      ),
    ),
    switchMap((prevGuardResult) =>
      guardFailure(prevGuardResult)
        ? of(prevGuardResult)
        : combineLatest(nonBlockingGuards.map((guard) => observe(guard(...args)))).pipe(
          map((results) => results.reduce((acc, res) => res ? acc && res : res)),
        ),
    ),
  );
}
