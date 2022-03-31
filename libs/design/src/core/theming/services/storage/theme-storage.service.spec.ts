import { timer } from 'rxjs';
import {
  take,
  map,
} from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { DaffPersistenceService } from '@daffodil/core';

import { DaffTheme } from '../../types/theme';
import {
  DaffThemeStorageService,
  THEME_STORAGE_KEY,
} from './theme-storage.service';

class DaffMemoryStorageService implements DaffPersistenceService {
  memory: { [x: string]: any } = {};

  setItem(key: string, value: any): void {
    this.memory[key] = value;
  }

  getItem(key: string) {
    return this.memory[key];
  }

  clear(): void {
    this.memory = {};
  }

  /**
   * We abuse destructuring to remove the key
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */
  removeItem(key: string): void {
    const { [key]: value, ...noKey } = this.memory;
    this.memory = noKey;
  }
}

describe('DaffThemeStorageService', () => {
  let service: DaffThemeStorageService;
  let testScheduler: TestScheduler;

  const constructThemeStorageService = (
    doc: Document = document,
    storageService = new DaffMemoryStorageService(),
  ) => new DaffThemeStorageService(storageService, doc);

  it('should be created', () => {
    expect(constructThemeStorageService()).toBeTruthy();
  });

  it('should be able to remove the theme from storage', () => {
    service = constructThemeStorageService();
    service.setTheme(DaffTheme.Dark);
    expect(service.getTheme()).toEqual(DaffTheme.Dark);
    service.removeThemeSetting();
    expect(service.getTheme()).toEqual(DaffTheme.None);
  });

  it('should be able to persist values via storage', () => {
    service = constructThemeStorageService();
    service.setTheme(DaffTheme.Dark);
    expect(service.getTheme()).toEqual(DaffTheme.Dark);
    service.setTheme(DaffTheme.Light);
    expect(service.getTheme()).toEqual(DaffTheme.Light);
  });

  it('should store the theme in storage as "DAFF_THEME"', () => {
    service = constructThemeStorageService();
    expect(THEME_STORAGE_KEY).toEqual(
      'DAFF_THEME',
    );
  });

  describe('the observable theme', () => {
    beforeEach(() => {
      testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
    });

    it('should be whatever is in storage if document does not have a window', () => {
      const tempStorage = new DaffMemoryStorageService();
      tempStorage.setItem('DAFF_THEME', DaffTheme.Light);

      testScheduler.run(({ expectObservable }) => {
        service = constructThemeStorageService(new Document(), tempStorage);

        const expectedMarble = '(a)';
        const expectedValue = { a: DaffTheme.Light };
        expectObservable(service.getThemeAsObservable()).toBe(
          expectedMarble,
          expectedValue,
        );
      });
    });

    describe('in a document that supports storage events', () => {
      it('should be initialized from the theme in storage', () => {
        const tempStorage = new DaffMemoryStorageService();
        tempStorage.setItem('DAFF_THEME', DaffTheme.Light);

        testScheduler.run(({ expectObservable }) => {
          service = constructThemeStorageService(document, tempStorage);

          const expectedMarble = 'a';
          const expectedValue = { a: DaffTheme.Light };
          expectObservable(service.getThemeAsObservable()).toBe(
            expectedMarble,
            expectedValue,
          );
        });
      });

      it('should be derived from subsequent storage events', () => {
        const tempStorage = new DaffMemoryStorageService();
        tempStorage.setItem('DAFF_THEME', DaffTheme.Light);

        const schedulableWindow: any = {
          addEventListener: (eventType: any, listener: any) => {
            timer(10, 5, testScheduler)
              .pipe(
                map(
                  (i) =>
                    new StorageEvent('testevent', {
                      key: THEME_STORAGE_KEY,
                      newValue: i % 2 === 0 ? DaffTheme.Dark : DaffTheme.Light,
                    }),
                ),
                take(3),
              )
              .subscribe(listener);
          },
          removeEventListener: (): void => void 0,
          dispatchEvent: (): void => void 0,
        };

        const doc: any = {
          defaultView: schedulableWindow,
        };

        testScheduler.run(({ expectObservable }) => {
          service = constructThemeStorageService(doc, tempStorage);

          const expectedMarble = 'a 9ms b 4ms c 4ms d';
          const expectedValue = {
            a: DaffTheme.Light,
            b: DaffTheme.Dark,
            c: DaffTheme.Light,
            d: DaffTheme.Dark,
          };

          expectObservable(service.getThemeAsObservable()).toBe(
            expectedMarble,
            expectedValue,
          );
        });
      });

      it('should have bad storage values coerced to `none`', () => {
        const tempStorage = new DaffMemoryStorageService();
        tempStorage.setItem('DAFF_THEME', 'taco');

        testScheduler.run(({ expectObservable }) => {
          service = constructThemeStorageService(document, tempStorage);

          const expectedMarble = 'a';
          const expectedValue = { a: DaffTheme.None };

          expectObservable(service.getThemeAsObservable()).toBe(
            expectedMarble,
            expectedValue,
          );
        });
      });
    });
  });
});
