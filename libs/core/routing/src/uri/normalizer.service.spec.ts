import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffRoutingUriNormalizer } from './normalizer.service';

describe('@daffodil/core/routing | DaffRoutingUriNormalizer', () => {
  let service: DaffRoutingUriNormalizer;

  let uri: string;
  let result: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
    });
    service = TestBed.inject(DaffRoutingUriNormalizer);
    uri = 'some/url.html(secondary:outlet)?query=param#fragment';
  });

  describe('normalize', () => {
    describe('when no outlet is specified', () => {
      beforeEach(() => {
        result = service.normalize(uri);
      });

      it('should normalize based on the primary outlet', () => {
        const expected = '/some/url.html?query=param#fragment';
        expect(result).toEqual(expected);
      });
    });

    describe('when an outlet is specified', () => {
      beforeEach(() => {
        result = service.normalize(uri, 'secondary');
      });

      it('should normalize based on the primary outlet', () => {
        const expected = '/outlet?query=param#fragment';
        expect(result).toEqual(expected);
      });
    });
  });
});
