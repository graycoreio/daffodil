import { TestBed } from '@angular/core/testing';

import { daffMultiTokenProviderFactory } from './multi-token-provider-factory';

describe('daffMultiTokenProviderFactory', () => {
  let values: number[];
  let result: number[];

  beforeEach(() => {
    const {
      token: TEST_TOKEN,
      provider,
    } = daffMultiTokenProviderFactory<number>('TEST_TOKEN');
    values = [
      0,
      1,
      2,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provider(...values),
      ],
    });

    result = TestBed.inject(TEST_TOKEN);
  });

  it('should provide the values to the token', () => {
    values.forEach(value => {
      expect(result).toContain(value);
    });
  });
});
