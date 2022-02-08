import { Injectable } from '@angular/core';
import {
  Observable,
  combineLatest,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { daffComputeThemeSetting } from '../functions/computer';
import { DaffTheme } from '../types/theme';
import { DaffOsThemeService } from './os-theme/ostheme.service';
import { DaffThemeStorageService } from './storage/theme-storage.service';

/**
 * A service for controlling the current app theme.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffThemingService {
	private theme$: Observable<DaffTheme>;
	private theme: DaffTheme;

	constructor(
		private osTheme: DaffOsThemeService,
		private themeStorage: DaffThemeStorageService,
	) {

	  this.theme$ = combineLatest([
	    this.osTheme.getThemePreference(),
	    this.themeStorage.getThemeAsObservable(),
	  ]).pipe(
	    map(([osPreference, storedPreference]) => daffComputeThemeSetting(osPreference, storedPreference)),
	  );

	  this.theme$.subscribe((theme) => {
	    this.theme = theme;
	  });
	}

	/**
	 * Get the current theme
	 */
	getTheme(): Observable<DaffTheme> {
	  return this.theme$;
	}

	/**
	 * Swap between themes
	 */
	switchTheme(): void {
	  return this.theme === DaffTheme.Dark
	    ? this.blastMyEyes()
	    : this.goDark();
	}

	/**
	 * Set phasers to low light.
	 * Really, just set the theme to dark.
	 */
	goDark() {
	  this.themeStorage.setTheme(DaffTheme.Dark);
	}

	/**
	 * Set the theme to light mode.
	 * Don't do this.
	 */
	blastMyEyes() {
	  this.themeStorage.setTheme(DaffTheme.Light);
	}
}
