import { TestBed } from '@angular/core/testing';
import {
  Route,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffRouteWithDataPath } from '../../model/route-with-data-path';
import { daffInsertDataPathStrategy } from './insert-data-path';

describe('@daffodil/external-router | daffInsertDataPathOnRouteMatchingType', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule(({
      imports: [
        RouterTestingModule,
      ],
    }));
    router = TestBed.get(Router);
  });

  it('should do nothing if there is no route matching the type', () => {
    const type = 'CATEGORY';

    const externalRoute: Route = {
      path: 'some-wild-path.html',
      data: {
        daffExternalRouteType: type,
      },
    };
    const routes = [];
    expect(daffInsertDataPathStrategy(externalRoute, routes)).toEqual([]);
  });

  it('should insert an entry into the route matching the associated `daffRouteType`', () => {
    const type = 'CATEGORY';

    const PATH = 'some-wild-path.html';

    const externalRoute: DaffRouteWithDataPath = {
      path: PATH,
      data: {
        daffExternalRouteType: type,
      },
    };

    const routes = [
      { children: [{}], data: { daffExternalRouteType: type }},
    ];

    expect(daffInsertDataPathStrategy(externalRoute, routes)).toEqual([
      { children: [{}], data: { daffExternalRouteType: type, daffPaths: { [PATH]: PATH }}},
    ]);
  });
});
