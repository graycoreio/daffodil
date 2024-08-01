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
 * A stubbed out breakpoint observer service.
 */
@Injectable({
  providedIn: 'root',
})
export class NoopBreakpointObserver implements Omit<BreakpointObserver, never> {
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {}
  isMatched(value: string | readonly string[]): boolean {
    return false;
  }
  observe(value: string | readonly string[]): Observable<BreakpointState> {
    return of();
  }

}
