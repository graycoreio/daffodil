import {
  Observable,
  of,
  BehaviorSubject,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffodilOsThemeService } from './os-theme/ostheme.service';
import { DaffodilThemeStorageService } from './storage/theme-storage.service';
import { DaffodilThemingService } from './theming.service';

describe('DaffodilThemingService', () => {
  let testScheduler: TestScheduler;

  const constructThemingService = (
    themePreference: Observable<any>,
    themeStorageObs: Observable<any>): { service: DaffodilThemingService; osTheme: DaffodilOsThemeService; themeStorage: DaffodilThemeStorageService } => {
    const osTheme = jasmine.createSpyObj(DaffodilOsThemeService, {
      getThemePreference: themePreference,
    });

    const themeStorage = jasmine.createSpyObj(DaffodilThemeStorageService, {
      getThemeAsObservable: themeStorageObs,
      setTheme: undefined,
    });

    return { service: new DaffodilThemingService(osTheme, themeStorage), osTheme, themeStorage };
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
      const expectedValue = { a: 'dark' };
      expectObservable(service.getTheme()).toBe(expectedMarble, expectedValue);
    });
  });

  it('should be able to set the theme to light', () => {

    testScheduler.run(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a b', { a: undefined, b: 'light' });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a b';
      const expectedValue = { a: 'dark', b: 'light' };
      expectObservable(service.getTheme()).toBe(expectedMarble, expectedValue);
    });
  });

  it('should be able to update the theme to dark', () => {

    testScheduler.run(({ expectObservable, cold }) => {
      const osThemeMarble = cold('a', { a: undefined });
      const themeStorageMarble = cold('a b', { a: 'light', b: 'dark' });

      const service = constructThemingService(osThemeMarble, themeStorageMarble).service;

      const expectedMarble = 'a b';
      const expectedValue = { a: 'light', b: 'dark' };
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
      expect(themeStorage.setTheme).toHaveBeenCalledWith('light');
    });

    it('should be able to set the theme to dark', () => {
      const osThemeMarble = new BehaviorSubject(undefined);
      const themeStorageMarble = new BehaviorSubject(undefined);
      const setup = constructThemingService(osThemeMarble, themeStorageMarble);
      const service = setup.service;
      const themeStorage = setup.themeStorage;

      service.goDark();
      expect(themeStorage.setTheme).toHaveBeenCalledWith('dark');
    });

    it('should be able to switch themes', () => {
      const osThemeMarble = new BehaviorSubject('light');
      const themeStorageMarble = new BehaviorSubject('dark');
      const setup = constructThemingService(osThemeMarble, themeStorageMarble);
      const service = setup.service;
      const themeStorage = setup.themeStorage;

      service.switchTheme();
      expect(themeStorage.setTheme).toHaveBeenCalledWith('light');
    });
  });
});
