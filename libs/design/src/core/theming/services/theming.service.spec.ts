import {
  Observable,
  of,
  BehaviorSubject,
} from 'rxjs';

import { runMarbles } from '@daffodil/jasmine';

import { DaffOsThemeService } from './os-theme/ostheme.service';
import { DaffThemeStorageService } from './storage/theme-storage.service';
import { DaffThemingService } from './theming.service';
import { DaffTheme } from '../types/theme';

describe('@daffodil/design | DaffThemingService', () => {

  const constructThemingService = (
    themePreference: Observable<any>,
    themeStorageObs: Observable<any>): { service: DaffThemingService; osTheme: DaffOsThemeService; themeStorage: DaffThemeStorageService } => {
    const osTheme = jasmine.createSpyObj(DaffOsThemeService, {
      getThemePreference: themePreference,
    });

    const themeStorage = jasmine.createSpyObj(DaffThemeStorageService, {
      getThemeAsObservable: themeStorageObs,
      setTheme: undefined,
      removeThemeSetting: undefined,
    });

    return { service: new DaffThemingService(osTheme, themeStorage), osTheme, themeStorage };
  };

  it('should be created', () => {
    expect(constructThemingService(
      of(undefined), of(undefined),
    )).toBeTruthy();
  });

  /**
   * This test also acts as an integration test for daffComputeThemeSetting
   */
  it('should compute the theme from os and storage settings', () => {
    runMarbles(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a', { a: undefined });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a';
      const expectedValue = { a: DaffTheme.Dark };
      expectObservable(service.getTheme()).toBe(expectedMarble, expectedValue);
    });
  });

  it('should be able to set the theme to light', () => {

    runMarbles(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a b', { a: undefined, b: DaffTheme.Light });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a b';
      const expectedValue = { a: DaffTheme.Dark, b: DaffTheme.Light };
      expectObservable(service.getTheme()).toBe(expectedMarble, expectedValue);
    });
  });

  it('should be able to update the theme to dark', () => {

    runMarbles(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a b', { a: DaffTheme.Light, b: DaffTheme.Dark });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a b';
      const expectedValue = { a: DaffTheme.Light, b: DaffTheme.Dark };
      expectObservable(service.getTheme()).toBe(expectedMarble, expectedValue);
    });
  });

  describe('updating the theme in storage', () => {
    it('should be able to set the theme to light', () => {
      const osThemeMarble = new BehaviorSubject(undefined);
      const themeStorageMarble = new BehaviorSubject(undefined);
      const setup = constructThemingService(osThemeMarble, themeStorageMarble);
      const service = setup.service;
      const themeStorage = setup.themeStorage;

      service.lightMode();
      expect(themeStorage.setTheme).toHaveBeenCalledWith(DaffTheme.Light);
    });

    it('should be able to set the theme to dark', () => {
      const osThemeMarble = new BehaviorSubject(undefined);
      const themeStorageMarble = new BehaviorSubject(undefined);
      const setup = constructThemingService(osThemeMarble, themeStorageMarble);
      const service = setup.service;
      const themeStorage = setup.themeStorage;

      service.darkMode();
      expect(themeStorage.setTheme).toHaveBeenCalledWith(DaffTheme.Dark);
    });

    it('should be able to follow the system theme', () => {
      const osThemeMarble = new BehaviorSubject(undefined);
      const themeStorageMarble = new BehaviorSubject(undefined);
      const setup = constructThemingService(osThemeMarble, themeStorageMarble);
      const service = setup.service;
      const themeStorage = setup.themeStorage;

      service.systemMode();
      expect(themeStorage.removeThemeSetting).toHaveBeenCalledWith();
    });
  });

  it('should expose the stored theme preference', () => {
    runMarbles(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a b c', { a: DaffTheme.System, b: DaffTheme.Light, c: DaffTheme.Dark });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a b c';
      const expectedValue = { a: DaffTheme.System, b: DaffTheme.Light, c: DaffTheme.Dark };
      expectObservable(service.getThemePreference()).toBe(expectedMarble, expectedValue);
    });
  });
});
