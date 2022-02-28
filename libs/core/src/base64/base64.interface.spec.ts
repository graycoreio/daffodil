import { TestBed } from '@angular/core/testing';

import {
  DaffBase64ServiceToken as Token,
  DaffBase64Service,
} from './base64.interface';
import { DaffBrowserBase64Service } from './browser/browser.service';

describe('DaffBase64ServiceToken', () => {
  let defaultPersistenceService: DaffBase64Service;

  beforeEach(() => {
    defaultPersistenceService = TestBed.inject(Token);
  });

  it('should inject a DaffBrowserBase64Service', () => {
    expect(defaultPersistenceService instanceof DaffBrowserBase64Service).toEqual(true);
  });
});
