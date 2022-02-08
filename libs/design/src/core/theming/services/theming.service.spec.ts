import {
  Observable,
  of,
  BehaviorSubject,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffTheme } from '../types/theme';
import { DaffOsThemeService } from './os-theme/ostheme.service';
import { DaffThemeStorageService } from './storage/theme-storage.service';
import { DaffThemingService } from './theming.service';

describe('DaffThemingService', () => {
  let testScheduler: TestScheduler;

  const constructThemingService = (
    themePreference: Observable<any>,
    themeStorageObs: Observable<any>): { service: DaffThemingService; osTheme: DaffOsThemeService; themeStorage: DaffThemeStorageService } => {
    const osTheme = jasmine.createSpyObj(DaffOsThemeService, {
      getThemePreference: themePreference,
    });

    const themeStorage = jasmine.createSpyObj(DaffThemeStorageService, {
      getThemeAsObservable: themeStorageObs,
      setTheme: undefined,
    });

    return { service: new DaffThemingService(osTheme, themeStorage), osTheme, themeStorage };
  };

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(constructThemingService(
      of(undefined), of(undefined),
    )).toBeTruthy();
  });

  /**
   * This test also acts as an integration test for daffComputeThemeSetting
   */
  it('should compute the theme from os and storage settings', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a', { a: undefined });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a';
      const expectedValue = { a: DaffTheme.Dark };
      expectObservable(service.getTheme()).toBe(expectedMarble, expectedValue);
    });
  });

  it('should be able to set the theme to light', () => {

    testScheduler.run(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a b', { a: undefined, b: DaffTheme.Light });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a b';
      const expectedValue = { a: DaffTheme.Dark, b: DaffTheme.Light };
      expectObservable(service.getTheme()).toBe(expectedMarble, expectedValue);
    });
  });

  it('should be able to update the theme to dark', () => {

    testScheduler.run(({ expectObservable, cold }) => {
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

      service.blastMyEyes();
      expect(themeStorage.setTheme).toHaveBeenCalledWith(DaffTheme.Light);
    });

    it('should be able to set the theme to dark', () => {
      const osThemeMarble = new BehaviorSubject(undefined);
      const themeStorageMarble = new BehaviorSubject(undefined);
      const setup = constructThemingService(osThemeMarble, themeStorageMarble);
      const service = setup.service;
      const themeStorage = setup.themeStorage;

      service.goDark();
      expect(themeStorage.setTheme).toHaveBeenCalledWith(DaffTheme.Dark);
    });

    it('should be able to switch themes', () => {
      const osThemeMarble = new BehaviorSubject(DaffTheme.Light);
      const themeStorageMarble = new BehaviorSubject(DaffTheme.Dark);
      const setup = constructThemingService(osThemeMarble, themeStorageMarble);
      const service = setup.service;
      const themeStorage = setup.themeStorage;

      service.switchTheme();
      expect(themeStorage.setTheme).toHaveBeenCalledWith(DaffTheme.Light);
    });
  });
});
