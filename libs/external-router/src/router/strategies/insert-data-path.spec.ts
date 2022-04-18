import { TestBed } from '@angular/core/testing';
import {
  Route,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffRouteWithType } from '../../model/route-with-type';
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

  it('should insert an entry into the route matching the associated `daffExternalRouteType`', () => {
    const type = 'CATEGORY';

    const PATH = 'some-wild-path.html';

    const externalRoute: DaffRouteWithType = {
      path: PATH,
      daffExternalRouteType: type,
      data: {
      },
    };

    const routes = [
      { children: [{}], data: { daffExternalRouteType: type }},
    ];

    expect(daffInsertDataPathStrategy(externalRoute, routes)).toEqual([
      { children: [{}], data: { daffExternalRouteType: type, daffPaths: { [PATH]: {}}}},
    ]);
  });

  describe('inserting an entry that matches', () => {
    it('should assign data to the associated daffPath', () => {
      const type = 'CATEGORY';

      const PATH = 'some-wild-path.html';

      const externalRoute: DaffRouteWithType = {
        path: PATH,
        daffExternalRouteType: type,
        data: {
        },
      };

      const routes = [
        { children: [{}], data: { daffExternalRouteType: type }},
      ];

      expect(daffInsertDataPathStrategy(externalRoute, routes)).toEqual([
        { children: [{}], data: { daffExternalRouteType: type, daffPaths: { [PATH]: {}}}},
      ]);
    });

    it('should replace data when reinserting existing data to an existing daffPath', () => {
      const type = 'CATEGORY';

      const PATH = 'some-wild-path.html';

      const externalRoute: DaffRouteWithType = {
        path: PATH,
        daffExternalRouteType: type,
        data: {
          some_key: 'test1',
          some_other_key: 'some_other_key',
        },
      };

      const externalRoute2: DaffRouteWithType = {
        path: PATH,
        daffExternalRouteType: type,
        data: {
          some_key: 'some_key',
          some_third_key: 'some_third_key',
        },
      };

      const routes = [
        { children: [{}], data: { daffExternalRouteType: type }},
      ];
      let result = daffInsertDataPathStrategy(externalRoute, routes);
      result = daffInsertDataPathStrategy(externalRoute2, result);

      expect(result).toEqual([
        { children: [{}], data: { daffExternalRouteType: type, daffPaths: { [PATH]: {
          some_key: 'some_key',
          some_third_key: 'some_third_key',
        }}}},
      ]);
    });

    it('should insert multiple different entries on the same type with a different path', () => {
      const type = 'CATEGORY';

      const PATH = 'some-wild-path.html';

      const externalRoute: DaffRouteWithType = {
        path: PATH,
        daffExternalRouteType: type,
        data: {
          some_key: 'test1',
          some_other_key: 'some_other_key',
        },
      };
      const PATH_2 = 'some-other-path.html';
      const externalRoute2: DaffRouteWithType = {
        path: PATH_2,
        daffExternalRouteType: type,
        data: {
          some_key: 'test2',
          some_other_key: 'some_other_key',
        },
      };

      const routes = [
        { children: [{}], data: { daffExternalRouteType: type }},
      ];
      let result = daffInsertDataPathStrategy(externalRoute, routes);
      result = daffInsertDataPathStrategy(externalRoute2, result);

      expect(result).toEqual([
        { children: [{}], data: { daffExternalRouteType: type, daffPaths: {
          [PATH]: {
            some_key: 'test1',
            some_other_key: 'some_other_key',
          },
          [PATH_2]: {
            some_key: 'test2',
            some_other_key: 'some_other_key',
          },
        }}},
      ]);
    });
  });
});
