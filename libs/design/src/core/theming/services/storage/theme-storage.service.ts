import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  Observable,
  fromEvent,
  Subject,
  merge,
  EMPTY,
} from 'rxjs';
import {
  map,
  filter,
  startWith,
  shareReplay,
  catchError,
} from 'rxjs/operators';

import { DaffPersistenceService } from '@daffodil/core';

import { DaffServerSafePersistenceServiceToken } from '../../../storage/server-safe-persistence.token';
import { DaffTheme } from '../../types/theme';

export type ThemeStorageEvent = Pick<StorageEvent, 'newValue' | 'key'>;

export const THEME_STORAGE_KEY = 'DAFF_THEME';

export const coerceValue = (val?: string): DaffTheme =>
  val === DaffTheme.Dark || val === DaffTheme.Light
    ? val
    : DaffTheme.None;

/**
 * Generate a StorageEvent
 */
const storageEventBuilder = (
  value: DaffTheme,
): ThemeStorageEvent => ({
  key: THEME_STORAGE_KEY,
  newValue: coerceValue(value) !== DaffTheme.None ? value : null,
});

/**
 * A service for retrieving and managing the stored app theme.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffThemeStorageService {
	private theme$: Observable<DaffTheme>;
	private storage$: Subject<ThemeStorageEvent> = new Subject();

	constructor(
		@Inject(DaffServerSafePersistenceServiceToken)
		private storage: DaffPersistenceService,
		@Inject(DOCUMENT) private doc: Document,
	) {
	  this.theme$ = merge(
	    this.storage$,
	    fromEvent<ThemeStorageEvent>(
				<Window & typeof globalThis>this.doc.defaultView,
				'storage',
	    ).pipe(
	      startWith(
	        storageEventBuilder(
	          this.storage.getItem(THEME_STORAGE_KEY),
	        ),
	      ),
	      catchError((e) => EMPTY),
	    ),
	  ).pipe(
	    filter(
	      (e: ThemeStorageEvent) => e.key === THEME_STORAGE_KEY,
	    ),
	    map((e) => coerceValue(e.newValue)),
	    shareReplay(1),
	  );
	}

	/**
	 * Given that Safari doesn't respect in-tab storage events, we have to manually
	 * fire storage events in the open tab on Webkit based browsers.
	 */
	private progressStorageEvent(theme: DaffTheme) {
	  this.storage$.next(storageEventBuilder(theme));
	}

	getThemeAsObservable(): Observable<DaffTheme> {
	  return this.theme$;
	}

	getTheme(): DaffTheme {
	  return coerceValue(this.storage.getItem(THEME_STORAGE_KEY));
	}

	setTheme(theme: DaffTheme): void {
	  this.progressStorageEvent(theme);
	  this.storage.setItem(THEME_STORAGE_KEY, theme);
	}

	removeThemeSetting(): void {
	  this.progressStorageEvent(DaffTheme.None);
	  this.storage.removeItem(THEME_STORAGE_KEY);
	}
}
