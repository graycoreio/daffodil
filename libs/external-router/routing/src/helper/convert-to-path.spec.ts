import { TestBed } from '@angular/core/testing';
import {
  Router,
  UrlSegment,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { daffConvertToPath } from './convert-to-path';

describe('@daffodil/external-router | daffConvertToPath', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });

    router = TestBed.inject<Router>(Router);
  });

  it('convert a segments array to a path', () => {
    const segments: UrlSegment[] = [
			<UrlSegment>{ path: 'some-path' },
			<UrlSegment>{ path: 'to' },
			<UrlSegment>{ path: 'a' },
			<UrlSegment>{ path: 'item' },
    ];

    expect(daffConvertToPath(segments)).toEqual('some-path/to/a/item');
  });
});
