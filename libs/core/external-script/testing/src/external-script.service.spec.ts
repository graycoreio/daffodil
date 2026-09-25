import { TestBed } from '@angular/core/testing';

import { runMarbles } from '@daffodil/jasmine';

import { TestScripts } from './constants';
import { DaffExternalScriptTestingService } from './external-script.service';

describe('DaffExternalScriptTestingService', () => {
  let service: DaffExternalScriptTestingService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaffExternalScriptTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error when given an error script', () => {
    runMarbles((helpers) => {
      const { expectObservable } = helpers;
      const expected = '(#)';

      expectObservable(service.load(TestScripts.FAILURE, { src: 'https://example.com/script.js' }))
        .toBe(expected, [], new Error('Failed to load https://example.com/script.js'));
    });
  });

  it('should throw an error when given an unknown script', () => {
    runMarbles((helpers) => {
      const { expectObservable } = helpers;
      const expected = '(#)';

      expectObservable(service.load('taco', { src: 'https://example.com/script.js' }))
        .toBe(expected, [], new Error('Failed to load https://example.com/script.js'));
    });
  });

  it('should emit true when it loads a success script', () => {
    runMarbles((helpers) => {
      const { expectObservable } = helpers;
      const expected = '(a|)';

      expectObservable(service.load(TestScripts.SUCCESS, { src: 'https://example.com/script.js' }))
        .toBe(expected, { a: true });
    });
  });
});
