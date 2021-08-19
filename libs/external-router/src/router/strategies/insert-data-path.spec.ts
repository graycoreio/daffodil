import { TestBed } from '@angular/core/testing';
import {
  Route,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import {
  DAFF_EXTERNAL_ROUTE_DATA_TYPE,
  DAFF_EXTERNAL_ROUTE_DATA_PATHS,
  DaffRouteWithDataPath,
} from '../../model/route-with-daff-data-path';
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
        [DAFF_EXTERNAL_ROUTE_DATA_TYPE]: type,
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
        [DAFF_EXTERNAL_ROUTE_DATA_TYPE]: type,
      },
    };

    const routes = [
      { children: [{}], data: { [DAFF_EXTERNAL_ROUTE_DATA_TYPE]: type }},
    ];

    expect(daffInsertDataPathStrategy(externalRoute, routes)).toEqual([
      { children: [{}], data: { [DAFF_EXTERNAL_ROUTE_DATA_TYPE]: type, [DAFF_EXTERNAL_ROUTE_DATA_PATHS]: { [PATH]: PATH }}},
    ]);
  });
});
