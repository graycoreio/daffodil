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
import { DaffodilTheme } from '../../types/theme';

export type ThemeStorageEvent = Pick<StorageEvent, 'newValue' | 'key'>;

export const THEME_STORAGE_KEY = 'DAFFODIL_THEME';
/**
 * Generate a StorageEvent
 */
const storageEventBuilder = (
  value: DaffodilTheme | undefined,
): ThemeStorageEvent => ({
  key: THEME_STORAGE_KEY,
  newValue: value ? value : null,
});

export const coerceValue = (val: string | null): DaffodilTheme | undefined => val !== 'dark' && val !== 'light' ? undefined : val;

@Injectable({
  providedIn: 'root',
})
export class DaffodilThemeStorageService {
	private theme$: Observable<DaffodilTheme | undefined>;

	private storage$: Subject<ThemeStorageEvent | undefined> = new Subject();

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
	      (e: ThemeStorageEvent) =>
	        e.key === THEME_STORAGE_KEY,
	    ),
	    map((e) => coerceValue(e.newValue)),
	    shareReplay(1),
	  );
	}

	/**
	 * Given that Safari doesn't respect in-tab storage events, we have to manually
	 * fire storage events in the open tab on Webkit based browsers.
	 */
	private progressStorageEvent(theme: DaffodilTheme | undefined) {
	  this.storage$.next(storageEventBuilder(theme));
	}

	getThemeAsObservable(): Observable<DaffodilTheme | undefined> {
	  return this.theme$;
	}

	getTheme() {
	  return this.storage.getItem(THEME_STORAGE_KEY);
	}

	setTheme(theme: DaffodilTheme): void {
	  this.progressStorageEvent(theme);
	  this.storage.setItem(THEME_STORAGE_KEY, theme);
	}

	removeThemeSetting(): void {
	  this.progressStorageEvent(undefined);
	  this.storage.removeItem(THEME_STORAGE_KEY);
	}
}
