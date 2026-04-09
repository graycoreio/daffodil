import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

/**
 * A no-op implementation of Angular CDK's `BreakpointObserver` that always reports
 * no breakpoints as matched. Useful for server-side rendering or testing contexts
 * where browser layout APIs are unavailable.
 */
@Injectable({
  providedIn: 'root',
})
export class NoopBreakpointObserver implements Omit<BreakpointObserver, never> {
  /**
   * @docs-private
   */
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {}

  /**
   * Always returns `false`, indicating that none of the given media queries are active.
   */
  isMatched(value: string | readonly string[]): boolean {
    return false;
  }

  /**
   * Returns an observable that never emits a `BreakpointState`, making breakpoint-dependent logic inert.
   */
  observe(value: string | readonly string[]): Observable<BreakpointState> {
    return of();
  }

}
