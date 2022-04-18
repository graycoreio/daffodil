import { TestBed } from '@angular/core/testing';
import {
  Router,
  UrlTree,
  UrlSegmentGroup,
  UrlSegment,
  PRIMARY_OUTLET,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';

import { DaffRouteWithDataPath } from '../../model/route-with-data-path';
import { daffDataPathUrlMatcher } from './data-path-matcher';

describe('@daffodil/external-router | daffPathUrlMatcher', () => {
  let router: Router;

  const EXAMPLES = [
    'test',
    'test#test',
    'test?test=1',
    'test/test/test.html?test=1#test',
  ];

  beforeEach(() => {
    TestBed.configureTestingModule(({
      imports: [
        RouterTestingModule,
      ],
    }));
    router = TestBed.get(Router);
  });

  it('should match daffPaths that match exactly and consume the whole path', () => {
    EXAMPLES.forEach((example) => {
      const tree: UrlTree = router.parseUrl(example);
      const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;

      const path = daffUriTruncateLeadingSlash(
        s.reduce((acc: string, segment) => acc + '/' + segment.path, ''),
      );

      const route: DaffRouteWithDataPath = {
        path: '',
        data: {
          daffPaths: {
            [path]: {},
          },
        },
      };

      expect(daffDataPathUrlMatcher(s,g, route)).toEqual({
        consumed: s,
      });
    });
  });

  it('should not match daffPaths that do NOT match', () => {
    EXAMPLES.forEach((example) => {
      const tree: UrlTree = router.parseUrl(example);
      const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;

      const route: DaffRouteWithDataPath = {
        path: '',
        data: {},
      };

      expect(daffDataPathUrlMatcher(s,g, route)).toEqual(null);
    });
  });
});
