import { Injectable } from '@angular/core';
import {
  Observable,
  combineLatest,
} from 'rxjs';
import {
  map,
  tap,
} from 'rxjs/operators';

import { daffComputeThemeSetting } from '../functions/computer';
import {
  DaffodilThemeEnum,
  DaffodilTheme,
} from '../types/theme';
import { DaffodilOsThemeService } from './os-theme/ostheme.service';
import { DaffodilThemeStorageService } from './storage/theme-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DaffodilThemingService {
	private theme$: Observable<DaffodilTheme>;
	private theme: DaffodilTheme;

	constructor(
		private osTheme: DaffodilOsThemeService,
		private themeStorage: DaffodilThemeStorageService,
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
	getTheme(): Observable<DaffodilTheme> {
	  return this.theme$;
	}

	/**
	 * Swap between themes
	 */
	switchTheme(): void {
	  return this.theme === DaffodilThemeEnum.Dark
	    ? this.blastMyEyes()
	    : this.goDark();
	}

	/**
	 * Set phasers to low light.
	 * Really, just set the theme to dark.
	 */
	goDark() {
	  this.themeStorage.setTheme(DaffodilThemeEnum.Dark);
	}

	/**
	 * Set the theme to light mode.
	 * Don't do this.
	 */
	blastMyEyes() {
	  this.themeStorage.setTheme(DaffodilThemeEnum.Light);
	}
}
