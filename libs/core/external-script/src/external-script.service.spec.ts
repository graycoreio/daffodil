import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffExternalScriptService } from './external-script.service';

export const FAKE_DOCUMENT = <Document>{
  createElement: (tagName: string) => <HTMLElement>{
    setAttribute: (name: string, value: string) => {},
    setAttributeNS: (namespace: string, name: string, value: string) => {},
  },

  body: {
    appendChild: (node: any) => {},
  },
};

describe('DaffExternalScriptService', () => {
  let service: DaffExternalScriptService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new DaffExternalScriptService(FAKE_DOCUMENT);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error when the script errors', () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      const expected = '(#)';

      expectObservable(service.load('test', { src: 'https://example.com/script.js' }))
        .toBe(expected, [], new Error('Failed to load https://example.com/script.js'));
      service.scriptMap.get('test').el.onerror(<Event>{});
    });
  });

  it('should emit true when it loads a success script', () => {
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;
      const expected = 'a';

      expectObservable(service.load('test', { src: 'https://example.com/script.js' }))
        .toBe(expected, { a: true });
      service.scriptMap.get('test').el.onload(<Event>{});
    });
  });
});
