import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Observable,
  of,
  fromEventPattern,
} from 'rxjs';
import {
  map,
  startWith,
} from 'rxjs/operators';

import { DaffTheme } from '../../types/theme';

export const mediaQueryDarkPreference = '(prefers-color-scheme: dark)';

export const addHandlerFactory = (window: Window) => (handler: any) => {
  const query = window.matchMedia(mediaQueryDarkPreference);
  return 'addEventListener' in query
    ? query.addEventListener('change', handler)
    : (<MediaQueryList>query).addListener(handler);
};

export const removeHandlerFactory = (window: Window) => (handler: any) => {
  const query = window.matchMedia(mediaQueryDarkPreference);
  return 'removeEventListener' in query
    ? query.removeEventListener('change', handler)
    : (<MediaQueryList>query).removeListener(handler);
};

/**
 * A service for retrieving the operating system's theme preference.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOsThemeService {

  preference$: Observable<DaffTheme>;

  private doc?: Document;

  constructor(@Inject(DOCUMENT) _doc: any) {
    this.doc = <Document>_doc;

    this.preference$ = this.doc.defaultView?.matchMedia
      ? fromEventPattern<MediaQueryListEvent>(
        addHandlerFactory(this.doc.defaultView),
        removeHandlerFactory(this.doc.defaultView),
      )
        .pipe(
          startWith(this.doc.defaultView?.matchMedia(mediaQueryDarkPreference)),
          map((e: MediaQueryListEvent) => e.matches),
          map((prefersDark) => prefersDark ? DaffTheme.Dark : DaffTheme.Light),
        )
      : of(DaffTheme.None);
  }

  /**
   * Get the operating system's theme preference.
   */
  public getThemePreference(): Observable<DaffTheme> {
    return this.preference$;
  }
}
