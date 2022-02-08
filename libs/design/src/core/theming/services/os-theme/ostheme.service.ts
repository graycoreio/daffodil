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

export type OperatingSystemThemePreference = 'light' | 'dark' | undefined;

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

@Injectable({
  providedIn: 'root',
})
export class DaffodilOsThemeService {

	preference$: Observable<OperatingSystemThemePreference>;

	constructor(@Inject(DOCUMENT) private doc: Document) {
	  this.preference$ = this.doc.defaultView?.matchMedia
	    ? fromEventPattern<MediaQueryListEvent>(
	      addHandlerFactory(this.doc.defaultView),
	     	removeHandlerFactory(this.doc.defaultView),
	    )
	      .pipe(
	        startWith(this.doc.defaultView?.matchMedia(mediaQueryDarkPreference)),
	        map((e: MediaQueryListEvent) => e.matches),
	        map((val) => val ? 'dark' : 'light'),
	      )
	    : of(undefined);
	}

	/**
	 * Get the operating system's theme preference.
	 */
	public getThemePreference(): Observable<OperatingSystemThemePreference> {
	  return this.preference$;
	}
}
