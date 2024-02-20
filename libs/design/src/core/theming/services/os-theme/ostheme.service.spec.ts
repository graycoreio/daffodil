import { timer } from 'rxjs';
import {
  map,
  take,
} from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { DaffOsThemeService } from './ostheme.service';

describe('@daffodil/design | DaffOsThemeService', () => {
  let service: DaffOsThemeService;
  let testScheduler: TestScheduler;

  const constructOsThemeService = (document = new Document()): DaffOsThemeService => new DaffOsThemeService(document);

  it('should be created', () => {
    expect(constructOsThemeService()).toBeTruthy();
  });

  it('should not crash if the window does not exist', () => {
    expect(constructOsThemeService()).toBeTruthy();
  });

  it('should not crash if matchMedia is not supported by the platform', () => {
    const doc: any = {
      defaultView: {},
    };

    expect(constructOsThemeService(doc)).toBeTruthy();
  });

  describe('working with the operating system theme preference as an observable', () => {

    beforeEach(() => {
      testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
    });

    it('should be able to retrieve the current theme preference', () => {
      const doc: any = {
        defaultView: {
          matchMedia: () => ({
            addEventListener: (eventType: any, listener: any) => { },
            removeEventListener: (): void => void 0,
            dispatchEvent: (): void => void 0,
            matches: true,
          }),
        },
      };

      testScheduler.run(({ expectObservable }) => {
        service = constructOsThemeService(doc);

        const expectedMarble = 'a';
        const expectedValue = { a: 'dark' };

        expectObservable(service.getThemePreference()).toBe(expectedMarble, expectedValue);
      });
    });

    it('should update as the theme preference changes', () => {
      const doc: any = {
        defaultView: {
          matchMedia: () => ({
            addEventListener: (eventType: any, listener: any) => {
              timer(5, 5, testScheduler)
                .pipe(
                  map((i) => new MediaQueryListEvent('testevent', {
                    matches: i % 2 === 0 ? true : false,
                  })),
                  take(3),
                )
                .subscribe(listener);
            },
            removeEventListener: (): void => void 0,
            dispatchEvent: (): void => void 0,
            matches: true,
          }),
        },
      };

      testScheduler.run(({ expectObservable }) => {
        service = constructOsThemeService(doc);

        const expectedMarble = 'a 4ms b 4ms c 4ms d';
        const expectedValue = { a: 'dark', b: 'dark', c: 'light', d: 'dark' };

        expectObservable(service.getThemePreference()).toBe(expectedMarble, expectedValue);
      });
    });
  });
});
