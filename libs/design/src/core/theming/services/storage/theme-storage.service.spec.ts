import { timer } from 'rxjs';
import {
  take,
  map,
} from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { DaffPersistenceService } from '@daffodil/core';

import {
  DaffodilThemeStorageService,
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

describe('DaffodilThemeStorageService', () => {
  let service: DaffodilThemeStorageService;
  let testScheduler: TestScheduler;

  const constructThemeStorageService = (
    document: Document = new Document(),
    storageService = new DaffMemoryStorageService(),
  ) => new DaffodilThemeStorageService(storageService, document);

  it('should be created', () => {
    expect(constructThemeStorageService()).toBeTruthy();
  });

  it('should be able to remove the theme from storage', () => {
    service = constructThemeStorageService();
    service.setTheme('dark');
    expect(service.getTheme()).toEqual('dark');
    service.removeThemeSetting();
    expect(service.getTheme()).toEqual(undefined);
  });

  it('should be able to persist values via storage', () => {
    service = constructThemeStorageService();
    service.setTheme('dark');
    expect(service.getTheme()).toEqual('dark');
    service.setTheme('light');
    expect(service.getTheme()).toEqual('light');
  });

  it('should store the theme in storage as "GRAYCORE_THEME"', () => {
    service = constructThemeStorageService();
    expect(THEME_STORAGE_KEY).toEqual(
      'GRAYCORE_THEME',
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
      tempStorage.setItem('GRAYCORE_THEME', 'light');
      console.log((new Document().defaultView));

      testScheduler.run(({ expectObservable }) => {
        service = constructThemeStorageService(new Document(), tempStorage);

        const expectedMarble = '(a)';
        const expectedValue = { a: 'light' };
        expectObservable(service.getThemeAsObservable()).toBe(
          expectedMarble,
          expectedValue,
        );
      });
    });

    describe('in a document that supports storage events', () => {
      it('should be initialized from the theme in storage', () => {
        const tempStorage = new DaffMemoryStorageService();
        tempStorage.setItem('GRAYCORE_THEME', 'light');

        testScheduler.run(({ expectObservable }) => {
          service = constructThemeStorageService(document, tempStorage);

          const expectedMarble = 'a';
          const expectedValue = { a: 'light' };
          expectObservable(service.getThemeAsObservable()).toBe(
            expectedMarble,
            expectedValue,
          );
        });
      });

      it('should be derived from subsequent storage events', () => {
        const tempStorage = new DaffMemoryStorageService();
        tempStorage.setItem('GRAYCORE_THEME', 'light');

        const schedulableWindow: any = {
          addEventListener: (eventType: any, listener: any) => {
            timer(10, 5, testScheduler)
              .pipe(
                map(
                  (i) =>
                    new StorageEvent('testevent', {
                      key: THEME_STORAGE_KEY,
                      newValue: i % 2 === 0 ? 'dark' : 'light',
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
            a: 'light',
            b: 'dark',
            c: 'light',
            d: 'dark',
          };

          expectObservable(service.getThemeAsObservable()).toBe(
            expectedMarble,
            expectedValue,
          );
        });
      });

      it('should have bad storage values coerced to `undefined`', () => {
        const tempStorage = new DaffMemoryStorageService();
        tempStorage.setItem('GRAYCORE_THEME', 'taco');

        testScheduler.run(({ expectObservable }) => {
          service = constructThemeStorageService(document, tempStorage);

          const expectedMarble = 'a';
          const expectedValue = { a: undefined };

          expectObservable(service.getThemeAsObservable()).toBe(
            expectedMarble,
            expectedValue,
          );
        });
      });
    });
  });
});
